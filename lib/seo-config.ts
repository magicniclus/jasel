import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "JASEL - Entreprise de peinture intérieure et parquet Auvergne-Rhône-Alpes",
  description: "JASEL, entrepreneur du bâtiment spécialisé en peinture intérieure, pose de parquet et toile décorative. Devis gratuit en Auvergne-Rhône-Alpes.",
  keywords: [
    "peinture intérieure Auvergne-Rhône-Alpes",
    "pose parquet Auvergne-Rhône-Alpes",
    "toile décorative Auvergne-Rhône-Alpes",
    "entrepreneur bâtiment Auvergne-Rhône-Alpes",
    "rénovation intérieure",
    "peinture professionnelle",
    "entreprise peinture",
    "parquet massif",
    "papier peint",
    "devis gratuit",
    "JASEL",
    "Avuclu Selcuk",
    "entrepreneur bâtiment",
    "01150",
    "Auvergne-Rhône-Alpes"
  ],
  author: "Avuclu Selcuk",
  siteUrl: "https://jasel.fr",
  siteName: "JASEL - Entreprise de peinture et parquet",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "JASEL",
  "legalName": "Jasel - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Avuclu Selcuk"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "01150",
    "postalCode": "01150",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33687184796",
    "contactType": "customer service",
    "email": "mehtapmurat@hotmail.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Auvergne-Rhône-Alpes"
    },
    {
      "@type": "City",
      "name": "01150"
    }
  ],
  "serviceType": [
    "Peinture intérieure",
    "Pose de parquet", 
    "Toile décorative",
    "Rénovation intérieure",
    "Peinture professionnelle"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Improvement Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de peinture et parquet professionnel",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peinture intérieure",
          "description": "Peinture intérieure professionnelle, murs, plafonds, boiseries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Pose de parquet",
          "description": "Pose de parquet massif, contrecollé, stratifié"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Toile décorative",
          "description": "Pose de toile décorative et papier peint"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation intérieure",
          "description": "Rénovation intérieure complète, projet clé en main"
        }
      }
    ]
  }
};
