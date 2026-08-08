import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export default function SEO({ title, description, keywords, url }: SEOProps) {
  
  // Natural keyword optimization for German energy market
  const defaultTitle = 'Energie Alemi - Stromtarife und Gasvergleich';
  const defaultDescription = 'Vergleichen Sie jetzt kostenlos Strom- und Gastarife mit Energie Alemi. Finden Sie den günstigsten Energieanbieter, wechseln Sie unkompliziert und sparen Sie bares Geld.';
  
  const seoTitle = title ? `${title} | Energie Alemi` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || "Stromvergleich, Gasvergleich, Gastarife vergleichen, Stromanbieter wechseln, günstiger Stromtarif, Energieanbieter vergleichen, Energie Alemi";
  
  const canonicalUrl = url ? `https://energie-alemi.de${url}` : 'https://energie-alemi.de';

  // Structured Data for Organization and WebSite
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://energie-alemi.de/#website",
        "url": "https://energie-alemi.de/",
        "name": "Energie Alemi",
        "description": "Kostenloser Vergleich für Strom, Gas und Internet.",
        "inLanguage": "de-DE"
      },
      {
        "@type": "Organization",
        "@id": "https://energie-alemi.de/#organization",
        "name": "Energie Alemi",
        "url": "https://energie-alemi.de/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://energie-alemi.de/favicon.webp"
        },
        "description": "Unabhängiger Berater für Energie- und Telekommunikationstarife in Deutschland."
      }
    ]
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
      <meta property="og:image" content="https://energie-alemi.de/favicon.webp" />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="https://energie-alemi.de/favicon.webp" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
