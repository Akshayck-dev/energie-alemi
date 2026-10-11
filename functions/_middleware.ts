// Cloudflare Pages Middleware
// Intercepts bot/exploit probe paths at the edge to prevent resource exhaustion and origin 521/504 timeouts

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const path = url.pathname.toLowerCase();

  // Instantly drop malicious probes and bot scans at the Cloudflare Edge
  if (
    path.endsWith('.php') ||
    path.startsWith('/admin') ||
    path.startsWith('/wp-') ||
    path.startsWith('/.env') ||
    path.startsWith('/cgi-bin') ||
    path.startsWith('/xmlrpc') ||
    path.startsWith('/setup.cgi')
  ) {
    return new Response('Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'X-Robots-Tag': 'noindex, nofollow'
      }
    });
  }

  return context.next();
};
