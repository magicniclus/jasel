import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const charpenteConfig = {
  // SEO et métadonnées
  title: "Charpente Traditionnelle et Industrielle - Île de France et Sarthe",
  description: "LCCM, spécialiste charpente traditionnelle et industrielle en Île de France et Sarthe. Devis gratuit et personnalisé. Expertise artisanale, matériaux de qualité.",
  keywords: ["charpente Île de France", "charpente Sarthe", "charpente traditionnelle", "charpente industrielle", "devis charpente gratuit", "charpentier Île de France", "LCCM charpente"],
  
  // Contenu principal
  serviceName: "Charpente",
  heroImage: "/about-1.png",
  heroTitle: "Charpente Traditionnelle et Industrielle",
  heroSubtitle: "Conception et réalisation de charpentes sur mesure par des artisans experts",
  
  // Localisation
  sector: "BTP - Charpente",
  location: "Île de France et Sarthe",
  
  // Description détaillée
  mainDescription: "LCCM est votre spécialiste en charpente traditionnelle et industrielle en Île de France et Sarthe. Notre équipe d'artisans charpentiers met son expertise au service de vos projets de construction et rénovation. Nous concevons et réalisons des charpentes sur mesure, alliant techniques traditionnelles et innovations modernes pour garantir la solidité et la durabilité de vos structures.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Charpente Traditionnelle",
      description: "Conception et réalisation de charpentes en bois massif selon les techniques ancestrales, assemblages tenons-mortaises"
    },
    {
      title: "Charpente Industrielle",
      description: "Structures préfabriquées et fermettes industrielles pour constructions modernes et économiques"
    },
    {
      title: "Rénovation de Charpente",
      description: "Restauration et renforcement de charpentes anciennes, traitement des bois, remplacement de pièces défaillantes"
    },
    {
      title: "Surélévation",
      description: "Extension verticale de votre habitation avec création de nouvelle charpente adaptée"
    },
    {
      title: "Charpente Apparente",
      description: "Mise en valeur de la charpente avec finitions soignées pour un aspect décoratif"
    },
    {
      title: "Traitement du Bois",
      description: "Protection contre les insectes xylophages et champignons, traitement préventif et curatif"
    },
    {
      title: "Isolation sous Toiture",
      description: "Pose d'isolants thermiques et phoniques adaptés à votre charpente"
    },
    {
      title: "Expertise et Diagnostic",
      description: "Évaluation de l'état de votre charpente et conseils pour l'entretien ou la rénovation"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Expertise artisanale reconnue",
    "Matériaux de qualité certifiés",
    "Respect des délais convenus",
    "Garantie décennale sur tous travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et durables",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Techniques traditionnelles et modernes"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Île de France",
    "Sarthe",
    "Le Mans",
    "Sablé-sur-Sarthe",
    "La Flèche",
    "Mamers",
    "Château-du-Loir",
    "Bonnétable"
  ],
  
  // Contact
  contactInfo: {
    phone: "06 75 87 47 82",
    email: "lccmsarthe@gmail.com",
    address: "Île de France et Sarthe"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  charpenteConfig.serviceName,
  charpenteConfig.location,
  charpenteConfig.description,
  charpenteConfig.keywords
);

export default function CharpentePage() {
  return <ServicePage {...charpenteConfig} />;
}
