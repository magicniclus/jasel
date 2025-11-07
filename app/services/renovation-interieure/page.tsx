import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page rénovation intérieure
const renovationInterieurConfig = {
  // SEO et métadonnées
  title: "Rénovation intérieure Auvergne-Rhône-Alpes - JASEL",
  description: "JASEL, spécialiste rénovation intérieure en Auvergne-Rhône-Alpes. Peinture, parquet, toile décorative. Projet clé en main avec devis gratuit et personnalisé.",
  keywords: [
    "rénovation intérieure Auvergne-Rhône-Alpes",
    "rénovation 01150",
    "projet clé en main",
    "devis gratuit rénovation",
    "peinture parquet toile",
    "rénovation complète",
    "entrepreneur rénovation",
    "JASEL rénovation",
    "aménagement sur mesure"
  ],
  
  // Contenu principal
  serviceName: "Rénovation intérieure",
  heroImage: "/about-1.png",
  heroTitle: "Rénovation Intérieure Complète",
  heroSubtitle: "Rénovation intérieure en Auvergne-Rhône-Alpes. Projet clé en main avec peinture, parquet et toile décorative. Devis gratuit.",
  
  // Secteur d'activité
  sector: "BTP - Rénovation",
  location: "Auvergne-Rhône-Alpes",
  
  // Contenu détaillé
  mainDescription: "JASEL, entrepreneur du bâtiment spécialisé en rénovation intérieure en Auvergne-Rhône-Alpes, vous accompagne dans tous vos projets de transformation d'espaces. Que vous souhaitiez rénover entièrement votre intérieur avec peinture, parquet et toile décorative, nous vous proposons une prestation complète et clé en main. Notre expertise dans le secteur du BTP nous permet de réaliser des rénovations durables et esthétiques avec des finitions haut de gamme.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture complète",
      description: "Peinture intérieure de tous les murs et plafonds avec préparation et finitions"
    },
    {
      title: "Pose de parquet",
      description: "Installation de parquet massif, contrecollé ou stratifié selon vos préférences"
    },
    {
      title: "Toile décorative",
      description: "Pose de papier peint et toile décorative pour personnaliser vos espaces"
    },
    {
      title: "Préparation surfaces",
      description: "Préparation minutieuse de tous les supports avant application des finitions"
    },
    {
      title: "Coordination travaux",
      description: "Coordination de tous les corps de métier pour un projet clé en main"
    },
    {
      title: "Finitions soignées",
      description: "Finitions haut de gamme avec attention aux détails et à la qualité"
    },
    {
      title: "Conseil décoration",
      description: "Conseils personnalisés pour harmoniser couleurs, matériaux et styles"
    },
    {
      title: "Suivi projet",
      description: "Suivi complet du projet de A à Z avec respect des délais convenus"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Devis gratuit et personnalisé",
    "Projet clé en main de A à Z",
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
    "01150",
    "Auvergne-Rhône-Alpes",
    "Ain",
    "Région Auvergne-Rhône-Alpes",
    "Communes environnantes",
    "Intervention locale"
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "06 87 18 47 96",
    email: "mehtapmurat@hotmail.fr",
    address: "01150, Auvergne-Rhône-Alpes"
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
