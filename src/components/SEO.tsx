import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  
  // Use fallback text if translation is missing (or add to translations)
  const defaultTitle = 'Energie Alemi - Strom, Gas & Internet';
  const defaultDescription = 'Kostenloser Vergleich für Strom, Gas und Internet. Wir finden die besten Tarife für Privat- und Geschäftskunden. Jetzt unverbindlich beraten lassen!';
  
  const seoTitle = title ? `${title} | Energie Alemi` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || "Stromvergleich, Gasvergleich, Internetvergleich, Energieberatung, Energie Alemi";

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Energie Alemi" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://energie-alemi.de/favicon.webp" />
      <meta property="og:url" content="https://energie-alemi.de/" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="https://energie-alemi.de/favicon.webp" />
    </Helmet>
  );
}
