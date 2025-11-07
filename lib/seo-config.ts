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
  title: "DOBRE TUDOREL SILVIAN - Entreprise de nettoyage, nettoyage chantier PACA",
  description: "DOBRE TUDOREL SILVIAN, entrepreneur du bâtiment spécialisé en nettoyage de chantier, nettoyage particulier et nettoyage à domicile. Devis gratuit en région PACA.",
  keywords: [
    "nettoyage chantier PACA",
    "nettoyage particulier PACA",
    "nettoyage domicile PACA",
    "entrepreneur bâtiment PACA",
    "nettoyage commercial",
    "nettoyage professionnel",
    "entreprise nettoyage",
    "nettoyage après travaux",
    "entretien locaux",
    "devis gratuit",
    "DOBRE TUDOREL SILVIAN",
    "Dobre Tudorel Silvian",
    "entrepreneur bâtiment",
    "13090",
    "Provence-Alpes-Côte d'Azur"
  ],
  author: "Dobre Tudorel Silvian",
  siteUrl: "https://dobre-tudorel-silvian.fr",
  siteName: "DOBRE TUDOREL SILVIAN - Entreprise de nettoyage",
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
  "name": "DOBRE TUDOREL SILVIAN",
  "legalName": "Dobre Tudorel Silvian - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Dobre Tudorel Silvian"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "13090",
    "postalCode": "13090",
    "addressRegion": "Provence-Alpes-Côte d'Azur",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33759371921",
    "contactType": "customer service",
    "email": "dcezar978@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "PACA"
    },
    {
      "@type": "City",
      "name": "13090"
    }
  ],
  "serviceType": [
    "Nettoyage de chantier",
    "Nettoyage particulier", 
    "Nettoyage à domicile",
    "Nettoyage commercial",
    "Nettoyage professionnel"
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
  "serviceType": "Cleaning Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de nettoyage professionnel",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nettoyage de chantier",
          "description": "Nettoyage après travaux, nettoyage de chantiers de construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Nettoyage particulier",
          "description": "Services de nettoyage pour particuliers, entretien régulier"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Nettoyage à domicile",
          "description": "Nettoyage à domicile, entretien ménager professionnel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Nettoyage commercial",
          "description": "Nettoyage de locaux commerciaux et professionnels"
        }
      }
    ]
  }
};
