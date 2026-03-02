import type { NextApiRequest, NextApiResponse } from 'next';
import { Redis } from '@upstash/redis';

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function getDateRange(days: number): string[] {
  const dates: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Password check
  const password = req.headers['x-admin-password'] as string;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || password !== adminPassword) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const redis = getRedis();
  if (!redis) {
    return res.status(503).json({ error: 'Redis not configured' });
  }

  try {
    const days = parseInt(req.query.days as string) || 30;
    const dates = getDateRange(days);

    // Fetch daily views and unique visitors for each day
    const pipeline = redis.pipeline();
    for (const date of dates) {
      pipeline.get(`pv:daily:${date}`);
      pipeline.scard(`uv:daily:${date}`);
    }
    pipeline.hgetall('pv:pages');
    pipeline.hgetall('pv:refs');
    pipeline.hgetall('pv:countries');
    pipeline.hgetall('pv:devices');

    const results = await pipeline.exec();

    // Parse daily data
    const daily: Array<{ date: string; views: number; visitors: number }> = [];
    let totalViews = 0;
    let totalVisitors = 0;

    for (let i = 0; i < dates.length; i++) {
      const views = Number(results[i * 2]) || 0;
      const visitors = Number(results[i * 2 + 1]) || 0;
      daily.push({ date: dates[i], views, visitors });
      totalViews += views;
      totalVisitors += visitors;
    }

    // Parse hash data — sort by value descending
    const offset = dates.length * 2;
    const pages = sortHash(results[offset] as Record<string, string> | null);
    const referrers = sortHash(results[offset + 1] as Record<string, string> | null);
    const countries = sortHash(results[offset + 2] as Record<string, string> | null);
    const devices = sortHash(results[offset + 3] as Record<string, string> | null);

    return res.status(200).json({
      period: { days, from: dates[0], to: dates[dates.length - 1] },
      totals: { views: totalViews, visitors: totalVisitors },
      daily,
      pages,
      referrers,
      countries,
      devices,
    });
  } catch (err) {
    console.error('Analytics fetch error:', err);
    return res.status(500).json({ error: 'Failed to fetch analytics' });
  }
}

function sortHash(data: Record<string, string> | null): Array<{ key: string; value: number }> {
  if (!data) return [];
  return Object.entries(data)
    .map(([key, val]) => ({ key, value: Number(val) || 0 }))
    .sort((a, b) => b.value - a.value);
}
