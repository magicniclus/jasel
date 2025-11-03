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
  title: "AYA PRO - Rénovation Intérieure et Extérieure en PACA",
  description: "AYA PRO, entrepreneur du bâtiment spécialisé en rénovation intérieure, peinture, plomberie, toiture et charpente. Devis gratuit en région PACA, Aix-en-Provence.",
  keywords: [
    "rénovation intérieure PACA",
    "peinture Aix-en-Provence",
    "plomberie région PACA",
    "toiture charpente Aix",
    "entrepreneur bâtiment PACA",
    "rénovation maison Aix-en-Provence",
    "travaux peinture intérieure",
    "aménagement intérieur",
    "rénovation complète",
    "travaux toiture",
    "devis gratuit",
    "AYA PRO",
    "Mossaddak Mraihi",
    "rénovation PACA",
    "entrepreneur bâtiment"
  ],
  author: "Mossaddak Mraihi",
  siteUrl: "https://ayapro.fr",
  siteName: "AYA PRO - Rénovation",
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
  "name": "AYA PRO",
  "legalName": "Aya pro - Entreprise de rénovation",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Mossaddak Mraihi"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Aix-en-Provence",
    "postalCode": "13100",
    "addressRegion": "PACA",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33668924579",
    "contactType": "customer service",
    "email": "mraihi_7777@yahoo.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "PACA"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Bouches-du-Rhône"
    },
    {
      "@type": "City",
      "name": "Aix-en-Provence"
    }
  ],
  "serviceType": [
    "Rénovation intérieure",
    "Peinture", 
    "Plomberie",
    "Toiture et charpente",
    "Travaux de rénovation"
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
    "name": "Services de rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rénovation intérieure",
          "description": "Rénovation complète de vos espaces intérieurs, aménagement et modernisation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Peinture et plomberie",
          "description": "Travaux de peinture intérieure et extérieure, services de plomberie complets"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Toiture et charpente",
          "description": "Travaux de toiture, réfection et entretien de charpente"
        }
      }
    ]
  }
};
