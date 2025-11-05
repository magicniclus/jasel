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
  title: "NEWMAN - Entrepreneur du bâtiment, ravalement, couverture en Bretagne",
  description: "NEWMAN, entrepreneur du bâtiment spécialisé en ravalement, couverture et nettoyage de chantier. Devis gratuit en Bretagne.",
  keywords: [
    "ravalement Bretagne",
    "couverture Bretagne",
    "nettoyage chantier Bretagne",
    "entrepreneur bâtiment Bretagne",
    "ravalement façade",
    "couverture toiture",
    "nettoyage toiture",
    "pignon façade",
    "travaux toiture",
    "devis gratuit",
    "NEWMAN",
    "Reinard",
    "entrepreneur bâtiment",
    "29000",
    "Caimpert"
  ],
  author: "Reinard",
  siteUrl: "https://newman.fr",
  siteName: "NEWMAN - Entrepreneur du bâtiment",
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
  "name": "NEWMAN",
  "legalName": "Newman - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Reinard"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Caimpert",
    "postalCode": "29000",
    "addressRegion": "Bretagne",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33645610178",
    "contactType": "customer service",
    "email": "diamantalive.fr@live.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Bretagne"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Finistère"
    },
    {
      "@type": "City",
      "name": "Caimpert"
    }
  ],
  "serviceType": [
    "Ravalement",
    "Couverture", 
    "Nettoyage de chantier",
    "Toiture",
    "Travaux de toiture"
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
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de ravalement et couverture",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ravalement",
          "description": "Ravalement de façades, pignons et murs extérieurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Couverture",
          "description": "Pose et rénovation de couvertures, travaux de toiture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Nettoyage de chantier",
          "description": "Nettoyage de toiture, pignon et façade"
        }
      }
    ]
  }
};
