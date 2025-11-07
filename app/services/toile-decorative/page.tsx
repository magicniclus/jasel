import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page toile décorative
const toileDecorativeConfig = {
  // SEO et métadonnées
  title: "Toile décorative Auvergne-Rhône-Alpes - JASEL",
  description: "JASEL, spécialiste toile décorative en Auvergne-Rhône-Alpes. Papier peint, toile murale, décoration personnalisée. Devis gratuit et personnalisé.",
  keywords: [
    "toile décorative Auvergne-Rhône-Alpes",
    "papier peint 01150",
    "toile murale",
    "décoration murale",
    "devis toile décorative gratuit",
    "pose papier peint Auvergne-Rhône-Alpes",
    "entrepreneur décoration",
    "revêtement mural",
    "décoration intérieure"
  ],
  
  // Contenu principal
  serviceName: "Toile décorative",
  heroImage: "/peinture.png",
  heroTitle: "Toile Décorative et Papier Peint",
  heroSubtitle: "Toile décorative en Auvergne-Rhône-Alpes. Pose experte avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Décoration",
  location: "Auvergne-Rhône-Alpes",
  
  // Contenu détaillé
  mainDescription: "JASEL, entrepreneur du bâtiment spécialisé en toile décorative en Auvergne-Rhône-Alpes, vous accompagne dans tous vos projets de décoration murale. Que vous souhaitiez poser du papier peint, de la toile murale ou créer une décoration personnalisée, nous vous proposons une prestation complète avec des finitions soignées. Notre expertise dans le secteur du BTP nous permet de vous conseiller sur le choix des matériaux et des motifs adaptés à vos goûts.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Papier peint",
      description: "Pose de papier peint traditionnel et moderne avec finitions parfaites"
    },
    {
      title: "Toile murale",
      description: "Installation de toile décorative haut de gamme pour un rendu unique"
    },
    {
      title: "Toile de verre",
      description: "Pose de toile de verre pour un revêtement résistant et décoratif"
    },
    {
      title: "Préparation murs",
      description: "Préparation minutieuse des supports pour une pose parfaite"
    },
    {
      title: "Raccords motifs",
      description: "Raccordement précis des motifs pour un rendu harmonieux"
    },
    {
      title: "Finitions angles",
      description: "Finitions soignées dans les angles et autour des ouvertures"
    },
    {
      title: "Conseil décoration",
      description: "Aide au choix des motifs et couleurs pour votre décoration"
    },
    {
      title: "Entretien",
      description: "Conseils d'entretien pour préserver votre décoration murale"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Devis gratuit et personnalisé",
    "Pose professionnelle garantie",
    "Matériaux de qualité supérieure",
    "Finitions parfaites et durables",
    "Conseil personnalisé en décoration",
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
  toileDecorativeConfig.serviceName,
  toileDecorativeConfig.location,
  toileDecorativeConfig.description,
  toileDecorativeConfig.keywords
);

export default function ToileDecorativePage() {
  return <ServicePage {...toileDecorativeConfig} />;
}
