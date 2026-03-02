import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

interface DailyData {
  date: string;
  views: number;
  visitors: number;
}

interface HashEntry {
  key: string;
  value: number;
}

interface AnalyticsData {
  period: { days: number; from: string; to: string };
  totals: { views: number; visitors: number };
  daily: DailyData[];
  pages: HashEntry[];
  referrers: HashEntry[];
  countries: HashEntry[];
  devices: HashEntry[];
}

// ── Stat Card ──
function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="admin-stat-card">
      <span className="admin-stat-label">{label}</span>
      <span className="admin-stat-value">{value}</span>
      {sub && <span className="admin-stat-sub">{sub}</span>}
    </div>
  );
}

// ── Bar Chart ──
function BarChart({ data, labelKey, valueKey }: { data: Array<Record<string, any>>; labelKey: string; valueKey: string }) {
  const max = Math.max(...data.map(d => d[valueKey]), 1);
  return (
    <div className="admin-chart">
      {data.map((d, i) => (
        <div key={i} className="admin-chart-row">
          <span className="admin-chart-label">{d[labelKey]}</span>
          <div className="admin-chart-bar-track">
            <div
              className="admin-chart-bar"
              style={{ width: `${Math.max((d[valueKey] / max) * 100, 2)}%` }}
            />
          </div>
          <span className="admin-chart-val">{d[valueKey].toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

// ── Daily Mini Chart ──
function DailyChart({ daily }: { daily: DailyData[] }) {
  const maxViews = Math.max(...daily.map(d => d.views), 1);
  return (
    <div className="admin-daily-chart">
      {daily.map((d, i) => (
        <div key={i} className="admin-daily-col" title={`${d.date}: ${d.views} views, ${d.visitors} visitors`}>
          <div
            className="admin-daily-bar"
            style={{ height: `${Math.max((d.views / maxViews) * 100, 2)}%` }}
          />
          {daily.length <= 14 && (
            <span className="admin-daily-label">{d.date.slice(5)}</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Setup Instructions ──
function SetupGuide() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <div className="info-card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Setup Required</h3>
        <p>The analytics dashboard needs a few environment variables to work. Follow these steps:</p>

        <h4 style={{ fontFamily: 'var(--font-body)', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 600 }}>
          1. Create a free Upstash Redis database
        </h4>
        <p>
          Go to <a href="https://console.upstash.com" target="_blank" rel="noopener noreferrer">console.upstash.com</a>,
          sign up (free), create a Redis database, and copy the REST URL and Token.
        </p>

        <h4 style={{ fontFamily: 'var(--font-body)', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 600 }}>
          2. Add environment variables in Vercel
        </h4>
        <p>Go to your Vercel project → Settings → Environment Variables and add:</p>
        <div style={{ background: 'var(--color-bg-cream)', padding: '1rem', borderRadius: 8, fontFamily: 'monospace', fontSize: '0.85rem', margin: '0.75rem 0', lineHeight: 2 }}>
          UPSTASH_REDIS_REST_URL=https://your-db.upstash.io<br />
          UPSTASH_REDIS_REST_TOKEN=AXxx...<br />
          ADMIN_PASSWORD=choose-a-strong-password
        </div>

        <h4 style={{ fontFamily: 'var(--font-body)', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 600 }}>
          3. Redeploy
        </h4>
        <p>
          Trigger a redeployment in Vercel (or push a new commit). Analytics will start tracking
          immediately, and this dashboard will show your data.
        </p>
      </div>
    </div>
  );
}

// ── Main Admin Page ──
export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notConfigured, setNotConfigured] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [days, setDays] = useState(30);

  const fetchData = useCallback(async (pw: string, period: number) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/analytics?days=${period}`, {
        headers: { 'x-admin-password': pw },
      });
      if (res.status === 401) {
        setAuthed(false);
        setError('Invalid password');
        sessionStorage.removeItem('aaany_admin_pw');
        return;
      }
      if (res.status === 503) {
        setNotConfigured(true);
        setAuthed(true);
        return;
      }
      if (!res.ok) throw new Error('Failed to load');
      const json = await res.json();
      setData(json);
      setAuthed(true);
    } catch {
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-login from session
  useEffect(() => {
    const saved = sessionStorage.getItem('aaany_admin_pw');
    if (saved) {
      setPassword(saved);
      fetchData(saved, days);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('aaany_admin_pw', password);
    fetchData(password, days);
  };

  const changePeriod = (d: number) => {
    setDays(d);
    fetchData(password, d);
  };

  const avgPerDay = data ? Math.round(data.totals.views / data.period.days) : 0;
  const topPage = data?.pages[0];

  return (
    <>
      <Head>
        <title>Admin — AAANY Analytics</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="admin-shell">
        <div className="admin-header">
          <div className="container-aaany" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                AAANY Admin
              </span>
              <h1 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Analytics Dashboard</h1>
            </div>
            {authed && (
              <button
                className="admin-logout"
                onClick={() => { sessionStorage.removeItem('aaany_admin_pw'); setAuthed(false); setData(null); setPassword(''); }}
              >
                Sign Out
              </button>
            )}
          </div>
        </div>

        <div className="container-aaany" style={{ padding: '2rem 1.5rem 4rem' }}>
          {/* ── Login Gate ── */}
          {!authed && (
            <div style={{ maxWidth: 380, margin: '4rem auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>Sign In</h2>
              <p style={{ marginBottom: '1.5rem' }}>Enter the admin password to view analytics.</p>
              <form onSubmit={handleLogin}>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Admin password"
                  className="admin-input"
                  autoFocus
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>
                  {loading ? 'Checking...' : 'Sign In'}
                </button>
              </form>
              {error && <p style={{ color: 'var(--color-accent)', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>}
            </div>
          )}

          {/* ── Setup Guide ── */}
          {authed && notConfigured && <SetupGuide />}

          {/* ── Dashboard ── */}
          {authed && data && !notConfigured && (
            <>
              {/* Period selector */}
              <div className="admin-period-bar">
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {data.period.from} → {data.period.to}
                </span>
                <div className="admin-period-btns">
                  {[7, 30, 90].map(d => (
                    <button
                      key={d}
                      className={`admin-period-btn ${days === d ? 'active' : ''}`}
                      onClick={() => changePeriod(d)}
                    >
                      {d}d
                    </button>
                  ))}
                </div>
              </div>

              {/* Stat cards */}
              <div className="admin-stat-grid">
                <StatCard label="Page Views" value={data.totals.views.toLocaleString()} sub={`Last ${days} days`} />
                <StatCard label="Unique Visitors" value={data.totals.visitors.toLocaleString()} sub={`Last ${days} days`} />
                <StatCard label="Avg / Day" value={avgPerDay.toLocaleString()} sub="Page views" />
                <StatCard label="Top Page" value={topPage ? topPage.key : '—'} sub={topPage ? `${topPage.value.toLocaleString()} views` : ''} />
              </div>

              {/* Daily chart */}
              <div className="admin-card">
                <h3 style={{ marginBottom: '1rem' }}>Daily Page Views</h3>
                {data.daily.some(d => d.views > 0) ? (
                  <DailyChart daily={data.daily} />
                ) : (
                  <p style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-text-light)' }}>
                    No data yet — views will appear here as visitors browse the site.
                  </p>
                )}
              </div>

              {/* Detail grids */}
              <div className="admin-detail-grid">
                <div className="admin-card">
                  <h3 style={{ marginBottom: '1rem' }}>Top Pages</h3>
                  {data.pages.length > 0 ? (
                    <BarChart data={data.pages.slice(0, 10)} labelKey="key" valueKey="value" />
                  ) : (
                    <p className="admin-empty">No data yet</p>
                  )}
                </div>

                <div className="admin-card">
                  <h3 style={{ marginBottom: '1rem' }}>Referrers</h3>
                  {data.referrers.length > 0 ? (
                    <BarChart data={data.referrers.slice(0, 10)} labelKey="key" valueKey="value" />
                  ) : (
                    <p className="admin-empty">No data yet</p>
                  )}
                </div>

                <div className="admin-card">
                  <h3 style={{ marginBottom: '1rem' }}>Countries</h3>
                  {data.countries.length > 0 ? (
                    <BarChart data={data.countries.slice(0, 10)} labelKey="key" valueKey="value" />
                  ) : (
                    <p className="admin-empty">No data yet</p>
                  )}
                </div>

                <div className="admin-card">
                  <h3 style={{ marginBottom: '1rem' }}>Devices</h3>
                  {data.devices.length > 0 ? (
                    <BarChart data={data.devices} labelKey="key" valueKey="value" />
                  ) : (
                    <p className="admin-empty">No data yet</p>
                  )}
                </div>
              </div>

              {/* Refresh */}
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button className="btn btn-green" onClick={() => fetchData(password, days)}>
                  {loading ? 'Loading...' : 'Refresh Data'}
                </button>
              </div>
            </>
          )}

          {loading && authed && !data && !notConfigured && (
            <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>Loading analytics...</p>
          )}
        </div>
      </div>
    </>
  );
}
