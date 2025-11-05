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
  title: "LCCM - Charpentier, Couvreur, Zingueur Plaquiste en Île de France et Sarthe",
  description: "LCCM, entrepreneur du bâtiment spécialisé en charpente, couverture, zinguerie et plaquisterie. Devis gratuit en Île de France et Sarthe.",
  keywords: [
    "charpente Île de France",
    "couverture Sarthe",
    "zinguerie Île de France",
    "plaquisterie Sarthe",
    "entrepreneur bâtiment Île de France",
    "charpente traditionnelle",
    "couverture tuiles ardoises",
    "zinguerie gouttières",
    "plaquisterie cloisons",
    "travaux toiture",
    "devis gratuit",
    "LCCM",
    "Leroux",
    "charpentier couvreur",
    "entrepreneur bâtiment"
  ],
  author: "Leroux",
  siteUrl: "https://lccm.fr",
  siteName: "LCCM - Charpente Couverture",
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
  "name": "LCCM",
  "legalName": "LCCM - Charpentier, couvreur, zingueur plaquiste",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Leroux"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sarthe",
    "postalCode": "72000",
    "addressRegion": "Île de France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33675874782",
    "contactType": "customer service",
    "email": "lccmsarthe@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île de France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Sarthe"
    },
    {
      "@type": "City",
      "name": "Le Mans"
    }
  ],
  "serviceType": [
    "Charpente",
    "Couverture", 
    "Zinguerie",
    "Plaquisterie",
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
    "name": "Services de charpente et couverture",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Charpente",
          "description": "Conception et réalisation de charpentes traditionnelles et industrielles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Couverture et zinguerie",
          "description": "Pose et rénovation de couvertures, installation de systèmes de zinguerie"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Plaquisterie",
          "description": "Pose de cloisons, doublages et faux plafonds"
        }
      }
    ]
  }
};
