import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import routesManifest from '../routes-manifest.json';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  isArticle?: boolean;
  datePublished?: string;
  dateModified?: string;
  faqs?: any;
}

export default function SEO({ title, description, url, image, isArticle, datePublished, dateModified, faqs }: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'de';

  const ogLocaleMap: Record<string, string> = {
    de: 'de_DE',
    en: 'en_US',
    ar: 'ar_AE',
    fa: 'fa_IR'
  };
  const ogLocale = ogLocaleMap[lang] || 'de_DE';

  // Determine current manifest entry if url is provided
  const manifestEntry = url ? routesManifest.find(route => route.path === url) : undefined;

  const defaultTitle = 'Energie Alemi - Stromtarife und Gasvergleich';
  const defaultDescription = 'Vergleichen Sie jetzt kostenlos Strom- und Gastarife mit Energie Alemi. Finden Sie günstige Energieanbieter, wechseln Sie unkompliziert und sparen Sie bares Geld.';

  // Resolve values (explicit prop > manifest value > default value)
  const resolvedTitle = title || (manifestEntry ? manifestEntry.title : defaultTitle);
  const resolvedDescription = description || (manifestEntry ? manifestEntry.description : defaultDescription);
  
  
    const enTitles: Record<string, string> = {
    '/contact': 'Contact | Energie Alemi – Tariff Advice for Electricity, Gas & Internet Aachen',
    '/faq': 'FAQ | Energie Alemi',
    '/about': 'About Us | Energie Alemi – Tariff Advice Aachen',
    '/electricity': 'Compare Electricity Tariffs & Switch Provider | Energie Alemi',
    '/gas': 'Compare Gas Tariffs & Switch Provider | Energie Alemi',
    '/internet': 'Compare Internet Providers | DSL, Cable, Fibre | Energie Alemi',
    '/internetanbieter-aachen': 'Compare Internet Providers in Aachen | Energie Alemi',
    '/internetanbieter-wuerselen': 'Compare Internet Tariffs in Würselen | Energie Alemi',
    '/internetanbieter-stolberg': 'Compare Internet Tariffs in Stolberg | Energie Alemi',
    '/internetanbieter-eschweiler': 'Compare Internet Tariffs in Eschweiler | Energie Alemi',
    '/internetanbieter-herzogenrath': 'Compare Internet Tariffs in Herzogenrath | Energie Alemi'
  };
  
  const finalResolvedTitle = (lang === 'en' && url && enTitles[url]) ? enTitles[url] : resolvedTitle;

  const seoTitle = (finalResolvedTitle.includes('Energie Alemi') || finalResolvedTitle.includes('ALEMI')) ? finalResolvedTitle : `${finalResolvedTitle} | Energie Alemi`;
// || resolvedTitle.includes('ALEMI')) ? resolvedTitle : `${resolvedTitle} | Energie Alemi`;
  const seoDescription = resolvedDescription;

  // Dynamic Base URL
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://www.energie-alemi.de';
  const canonicalUrl = url ? `${baseUrl}${url.replace(/\/$/, '')}` : baseUrl;
  
  // Resolve image
  const resolvedImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`) : `${baseUrl}/about-hero-image.webp`;

  // Strict check on environment variable to prevent staging indexation
  const allowIndexing = import.meta.env.VITE_ALLOW_INDEXING === "true" && url !== '/404';
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
            "description": "Free comparison for electricity, gas, and internet.",
    "inLanguage": lang === 'de' ? 'de-DE' : lang,
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
            "description": "Consultant for energy and telecommunications tariffs in Aachen and all of Germany.",
    "telephone": "+4917665949390",
    "email": "info@energie-alemi.de",
    "priceRange": "Kostenlose Beratung",
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

  graph.push({
    "@type": "Organization",
    "@id": `${baseUrl}/#organization_entity`,
    "name": "Energie Alemi",
    "url": `${baseUrl}/`,
    "logo": `${baseUrl}/favicon.webp`,
    "telephone": "+49 176 65949390",
    "email": "info@energie-alemi.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alexianergraben 9",
      "addressLocality": "Aachen",
      "postalCode": "52064",
      "addressCountry": "Germany"
    }
  });

  if (url === '/electricity' || url === '/gas' || url === '/internet' || url === '/energieberater-aachen' || url === '/energievertrag-wechseln-lassen' || (url && url.match(/^\/(strom|gas|internet)anbieter-(.+)$/))) {
    let serviceName = '';
    let areaType = 'City';
    let areaName = 'Deutschland';
    
    if (url === '/electricity') {
      serviceName = 'Stromtarifvergleich & Wechselhilfe';
      areaType = 'Country';
    } else if (url === '/gas') {
      serviceName = 'Gastarifvergleich & Wechselhilfe';
      areaType = 'Country';
    } else if (url === '/internet') {
      serviceName = 'Internettarifvergleich & Wechselhilfe';
      areaType = 'Country';
    } else if (url === '/energieberater-aachen') {
      serviceName = 'Tarifberatung & Wechselhilfe';
      areaName = 'Aachen';
    } else if (url === '/energievertrag-wechseln-lassen') {
      serviceName = 'Tarifvergleich & Wechselservice';
      areaName = 'Aachen';
    } else {
      const match = url.match(/^\/(strom|gas|internet)anbieter-(.+)$/);
      if (match) {
        const serviceTypeRaw = match[1];
        const serviceNames: Record<string, string> = {
          'strom': 'Stromtarifvergleich & Wechselhilfe',
          'gas': 'Gastarifvergleich & Wechselhilfe',
          'internet': 'Internettarifvergleich & Wechselhilfe'
        };
        serviceName = serviceNames[serviceTypeRaw];
        areaName = match[2].charAt(0).toUpperCase() + match[2].slice(1);
        if (areaName === 'Wuerselen') areaName = 'Würselen';
      }
    }

    if (serviceName) {
      graph.push({
        "@type": "Service",
        "name": serviceName,
        "provider": {
          "@id": orgId
        },
        "areaServed": {
          "@type": areaType,
          "name": areaName
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Kostenlose Tarifberatung"
        }
      });
    }
  }

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

  // 4. FAQPage Schema
  if (faqs && Array.isArray(faqs) && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": canonicalUrl,
      "mainEntity": faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="author" content="Energie Alemi" />
      <meta name="robots" content={robotsContent} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
