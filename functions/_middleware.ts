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

  const response = await context.next();

  // Cache pre-rendered HTML at Cloudflare edge with stale-while-revalidate resilience against 521/504 origin drops
  const contentType = response.headers.get('content-type') || '';
  if (response.status === 200 && contentType.includes('text/html')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set(
      'Cache-Control',
      'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400'
    );
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
};
