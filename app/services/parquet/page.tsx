import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page parquet
const parquetConfig = {
  // SEO et métadonnées
  title: "Pose de parquet Auvergne-Rhône-Alpes - JASEL",
  description: "JASEL, spécialiste pose de parquet en Auvergne-Rhône-Alpes. Parquet massif, contrecollé, stratifié. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "pose parquet Auvergne-Rhône-Alpes",
    "parquet 01150",
    "parquet massif",
    "parquet contrecollé",
    "devis parquet gratuit",
    "pose parquet Auvergne-Rhône-Alpes",
    "entrepreneur parquet",
    "parquet stratifié",
    "rénovation sol"
  ],
  
  // Contenu principal
  serviceName: "Pose de parquet",
  heroImage: "/plomberie.png",
  heroTitle: "Pose de Parquet Professionnelle",
  heroSubtitle: "Pose de parquet en Auvergne-Rhône-Alpes. Installation experte avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Revêtement de sol",
  location: "Auvergne-Rhône-Alpes",
  
  // Contenu détaillé
  mainDescription: "JASEL, entrepreneur du bâtiment spécialisé en pose de parquet en Auvergne-Rhône-Alpes, vous accompagne dans tous vos projets de revêtement de sol. Que vous souhaitiez installer du parquet massif, contrecollé ou stratifié, nous vous proposons une prestation complète avec des finitions soignées. Notre expertise dans le secteur du BTP nous permet de vous conseiller sur le choix du parquet adapté à vos besoins et à votre budget.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Parquet massif",
      description: "Pose de parquet massif traditionnel avec finitions haut de gamme"
    },
    {
      title: "Parquet contrecollé",
      description: "Installation de parquet contrecollé pour un excellent rapport qualité-prix"
    },
    {
      title: "Parquet stratifié",
      description: "Pose de parquet stratifié résistant et facile d'entretien"
    },
    {
      title: "Préparation sol",
      description: "Ragréage, nivellement et préparation minutieuse du support"
    },
    {
      title: "Pose clouée",
      description: "Technique traditionnelle de pose clouée pour parquet massif"
    },
    {
      title: "Pose collée",
      description: "Pose collée professionnelle pour une stabilité optimale"
    },
    {
      title: "Pose flottante",
      description: "Installation flottante rapide et efficace pour parquet contrecollé"
    },
    {
      title: "Finitions",
      description: "Plinthes, barres de seuil et finitions soignées pour un rendu parfait"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Devis gratuit et personnalisé",
    "Pose professionnelle garantie",
    "Matériaux de qualité supérieure",
    "Finitions parfaites et durables",
    "Conseil personnalisé sur le choix",
    "Respect des délais convenus",
    "Protection soignée de vos biens",
    "Garantie sur tous les travaux",
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
  parquetConfig.serviceName,
  parquetConfig.location,
  parquetConfig.description,
  parquetConfig.keywords
);

export default function ParquetPage() {
  return <ServicePage {...parquetConfig} />;
}
