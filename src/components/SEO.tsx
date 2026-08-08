import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function SEO({ title, description, keywords, url, faqs }: SEOProps) {
  
  // Natural keyword optimization for German energy market
  const defaultTitle = 'Energie Alemi - Stromtarife und Gasvergleich';
  const defaultDescription = 'Vergleichen Sie jetzt kostenlos Strom- und Gastarife mit Energie Alemi. Finden Sie den günstigsten Energieanbieter, wechseln Sie unkompliziert und sparen Sie bares Geld.';
  
  const seoTitle = title ? `${title} | Energie Alemi` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || "Stromvergleich, Gasvergleich, Gastarife vergleichen, Stromanbieter wechseln, günstiger Stromtarif, Energieanbieter vergleichen, Energie Alemi";
  
  // Dynamic Base URL
  const baseUrl = import.meta.env.VITE_SITE_URL || 'PRODUCTION_DOMAIN';
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;

  // Base Structured Data
  const graph: any[] = [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": `${baseUrl}/`,
      "name": "Energie Alemi",
      "description": "Kostenloser Vergleich für Strom, Gas und Internet.",
      "inLanguage": "de-DE"
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Energie Alemi",
      "url": `${baseUrl}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.webp`
      },
      "description": "Unabhängiger Berater für Energie- und Telekommunikationstarife in Deutschland."
    }
  ];

  // Breadcrumb Schema
  if (url && url !== '/') {
    const parts = url.split('/').filter(Boolean);
    const breadcrumbItems = parts.map((part, index) => {
      const isLast = index === parts.length - 1;
      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1),
        "item": isLast ? undefined : `${baseUrl}/${parts.slice(0, index + 1).join('/')}`
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

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faq`,
      "mainEntity": faqs.map(faq => ({
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
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Energie Alemi" />
      <meta name="robots" content="index, follow" />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/favicon.webp`} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${baseUrl}/favicon.webp`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
