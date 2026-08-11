import { Helmet } from 'react-helmet-async';
import routesManifest from '../routes-manifest.json';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  isArticle?: boolean;
  datePublished?: string;
  dateModified?: string;
  faqs?: any;
}

export default function SEO({ title, description, keywords, url, isArticle, datePublished, dateModified }: SEOProps) {
  // Determine current manifest entry if url is provided
  const manifestEntry = url ? routesManifest.find(route => route.path === url) : undefined;

  const defaultTitle = 'Energie Alemi - Stromtarife und Gasvergleich';
  const defaultDescription = 'Vergleichen Sie jetzt kostenlos Strom- und Gastarife mit Energie Alemi. Finden Sie günstige Energieanbieter, wechseln Sie unkompliziert und sparen Sie bares Geld.';

  // Resolve values (explicit prop > manifest value > default value)
  const resolvedTitle = title || (manifestEntry ? manifestEntry.title : defaultTitle);
  const resolvedDescription = description || (manifestEntry ? manifestEntry.description : defaultDescription);
  
  const seoTitle = resolvedTitle.includes('Energie Alemi') ? resolvedTitle : `${resolvedTitle} | Energie Alemi`;
  const seoDescription = resolvedDescription;
  const seoKeywords = keywords || "Stromvergleich, Gasvergleich, Gastarife vergleichen, Stromanbieter wechseln, günstiger Stromtarif, Energieanbieter vergleichen, Energie Alemi";

  // Dynamic Base URL
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://www.energie-alemi.com';
  const canonicalUrl = url ? `${baseUrl}${url.replace(/\/$/, '')}` : baseUrl;

  // Strict check on environment variable to prevent staging indexation
  const allowIndexing = import.meta.env.VITE_ALLOW_INDEXING === "true";
  const robotsContent = allowIndexing ? "index, follow" : "noindex, nofollow";

  // Base Structured Data
  const graph: any[] = [];

  // 1. Organization (always defined as a root node on home, and referenced elsewhere)
  const orgId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;

  graph.push({
    "@type": "WebSite",
    "@id": websiteId,
    "url": `${baseUrl}/`,
    "name": "Energie Alemi",
    "description": "Kostenloser Vergleich für Strom, Gas und Internet.",
    "inLanguage": "de-DE",
    "publisher": {
      "@id": orgId
    }
  });

  graph.push({
    "@type": "LocalBusiness",
    "@id": orgId,
    "name": "Energie Alemi",
    "url": `${baseUrl}/`,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/favicon.webp`
    },
    "image": `${baseUrl}/about-hero-image.webp`,
    "description": "Berater für Energie- und Telekommunikationstarife in Aachen und ganz Deutschland.",
    "telephone": "+4917665949390",
    "email": "info@energie-alemi.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alexianergraben 9",
      "addressLocality": "Aachen",
      "postalCode": "52064",
      "addressCountry": "DE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ]
  });

  // 2. BreadcrumbList schema (for sub-pages only)
  if (url && url !== '/') {
    const parts = url.split('/').filter(Boolean);
    const breadcrumbItems = parts.map((part, index) => {
      const currentPath = '/' + parts.slice(0, index + 1).join('/');
      const routeInfo = routesManifest.find(r => r.path === currentPath);
      const name = routeInfo ? routeInfo.title.split(' | ')[0] : part.charAt(0).toUpperCase() + part.slice(1);
      
      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${baseUrl}${currentPath}`
      };
    });

    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": `${baseUrl}/`
        },
        ...breadcrumbItems
      ]
    });
  }

  // 3. Article Schema
  if (isArticle) {
    graph.push({
      "@type": "Article",
      "@id": `${canonicalUrl}/#article`,
      "isPartOf": {
        "@id": websiteId
      },
      "headline": resolvedTitle,
      "description": seoDescription,
      "datePublished": datePublished || (manifestEntry ? manifestEntry.lastmod : new Date().toISOString().split('T')[0]),
      ...(dateModified ? { "dateModified": dateModified } : {}),
      "author": {
        "@id": orgId
      },
      "publisher": {
        "@id": orgId
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <Helmet htmlAttributes={{ lang: 'de' }}>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Energie Alemi" />
      <meta name="robots" content={robotsContent} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:image" content={`${baseUrl}/about-hero-image.webp`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${baseUrl}/about-hero-image.webp`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
