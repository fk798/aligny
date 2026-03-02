import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PageTracker() {
  const router = useRouter();

  useEffect(() => {
    function trackView(path: string) {
      if (path.startsWith('/admin')) return; // Don't track admin pages
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: path,
          referrer: document.referrer || '',
        }),
      }).catch(() => {}); // Silent fail
    }

    // Track initial page load
    trackView(router.asPath);

    // Track client-side navigations
    const handleRouteChange = (url: string) => trackView(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  return null;
}
