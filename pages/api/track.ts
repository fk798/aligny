import type { NextApiRequest, NextApiResponse } from 'next';
import { Redis } from '@upstash/redis';

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function getDeviceType(ua: string): string {
  if (/tablet|ipad/i.test(ua)) return 'tablet';
  if (/mobile|iphone|android.*mobile/i.test(ua)) return 'mobile';
  return 'desktop';
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const redis = getRedis();
  if (!redis) {
    return res.status(200).json({ ok: true, tracked: false });
  }

  try {
    const { page, referrer } = req.body;
    const today = getToday();
    const ua = req.headers['user-agent'] || '';
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() 
      || req.headers['x-real-ip'] as string 
      || 'unknown';
    const country = (req.headers['x-vercel-ip-country'] as string) || 'Unknown';
    const device = getDeviceType(ua);
    const visitorId = hashString(ip + ua);

    // Referrer domain extraction
    let refDomain = 'direct';
    if (referrer) {
      try {
        const url = new URL(referrer);
        refDomain = url.hostname.replace('www.', '');
      } catch {
        refDomain = referrer.length > 0 ? 'other' : 'direct';
      }
    }

    // Pipeline all writes for efficiency (6 commands per view)
    const pipeline = redis.pipeline();
    pipeline.incr(`pv:daily:${today}`);
    pipeline.hincrby('pv:pages', page || '/', 1);
    pipeline.hincrby('pv:refs', refDomain, 1);
    pipeline.hincrby('pv:countries', country, 1);
    pipeline.hincrby('pv:devices', device, 1);
    pipeline.sadd(`uv:daily:${today}`, visitorId);

    await pipeline.exec();

    return res.status(200).json({ ok: true, tracked: true });
  } catch (err) {
    console.error('Analytics track error:', err);
    return res.status(200).json({ ok: true, tracked: false });
  }
}
