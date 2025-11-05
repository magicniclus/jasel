import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

// Configuration de la page rénovation intérieure
const renovationInterieurConfig = {
  // SEO et métadonnées
  title: "Aménagement Intérieur et Plaquisterie - Île de France et Sarthe",
  description: "LCCM, spécialiste aménagement intérieur et plaquisterie en Île de France et Sarthe. Cloisons, doublages, faux plafonds. Devis gratuit et personnalisé.",
  keywords: [
    "aménagement intérieur Île de France",
    "plaquisterie Sarthe",
    "cloisons placo",
    "devis gratuit aménagement",
    "doublages murs",
    "faux plafonds Le Mans",
    "entrepreneur plaquiste",
    "LCCM plaquisterie",
    "aménagement sur mesure"
  ],
  
  // Contenu principal
  serviceName: "Aménagement Intérieur",
  heroImage: "/placo.png",
  heroTitle: "Aménagement Intérieur et Plaquisterie",
  heroSubtitle: "Transformation et aménagement de vos espaces intérieurs en Île de France et Sarthe. Spécialiste cloisons et doublages avec devis gratuit.",
  
  // Secteur d'activité
  sector: "BTP - Aménagement Intérieur",
  location: "Île de France et Sarthe",
  
  // Contenu détaillé
  mainDescription: "LCCM, entrepreneur du bâtiment spécialisé en aménagement intérieur et plaquisterie en Île de France et Sarthe, vous accompagne dans tous vos projets de transformation d'espaces. Que vous souhaitiez créer de nouvelles pièces, aménager vos combles ou moderniser votre intérieur avec des cloisons, nous vous proposons une prestation complète et sur mesure. Notre expertise en plaquisterie nous permet de réaliser des aménagements durables et esthétiques.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Cloisons Placo",
      description: "Création de cloisons en plaques de plâtre pour créer de nouveaux espaces, séparations sur mesure"
    },
    {
      title: "Doublages Muraux",
      description: "Doublage de murs pour isolation thermique et phonique, amélioration du confort"
    },
    {
      title: "Faux Plafonds",
      description: "Installation de faux plafonds suspendus, intégration d'éclairages et ventilation"
    },
    {
      title: "Isolation Intérieure",
      description: "Pose d'isolants thermiques et phoniques dans cloisons et doublages"
    },
    {
      title: "Finitions et Joints",
      description: "Réalisation des joints, ponçage, préparation pour peinture ou revêtements"
    },
    {
      title: "Aménagement Combles",
      description: "Aménagement de combles avec cloisons et doublages adaptés aux contraintes"
    },
    {
      title: "Réparation Placo",
      description: "Réparation de fissures, trous, remise en état de cloisons existantes"
    },
    {
      title: "Pose d'Huisseries",
      description: "Intégration de portes, fenêtres dans les cloisons, finitions soignées"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Projet clé en main de A à Z",
    "Devis gratuit et détaillé",
    "Matériaux de qualité professionnelle",
    "Respect des délais convenus",
    "Garantie sur tous les travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et durables",
    "Suivi post-travaux assuré",
    "Tarification transparente",
    "Estimation gratuite et sans engagement"
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
  
  // Informations de contact
  contactInfo: {
    phone: "06 75 87 47 82",
    email: "lccmsarthe@gmail.com",
    address: "Île de France et Sarthe"
  }
  
  // Pas de section pricing selon les instructions
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  renovationInterieurConfig.serviceName,
  renovationInterieurConfig.location,
  renovationInterieurConfig.description,
  renovationInterieurConfig.keywords
);

export default function RenovationInterieurePage() {
  return <ServicePage {...renovationInterieurConfig} />;
}
