import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page peinture
const peintureConfig = {
  // SEO et métadonnées
  title: "Peinture intérieure Auvergne-Rhône-Alpes - JASEL",
  description: "JASEL, spécialiste peinture intérieure en Auvergne-Rhône-Alpes. Peinture murs, plafonds, boiseries. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "peinture intérieure Auvergne-Rhône-Alpes",
    "peintre 01150",
    "peinture murs",
    "peinture plafonds",
    "devis peinture gratuit",
    "travaux peinture Auvergne-Rhône-Alpes",
    "entrepreneur peintre",
    "peinture boiseries",
    "rénovation peinture"
  ],
  
  // Contenu principal
  serviceName: "Peinture intérieure",
  heroImage: "/maison.png",
  heroTitle: "Peinture Intérieure Professionnelle",
  heroSubtitle: "Peinture intérieure en Auvergne-Rhône-Alpes. Application professionnelle avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Peinture",
  location: "Auvergne-Rhône-Alpes",
  
  // Contenu détaillé
  mainDescription: "JASEL, entrepreneur du bâtiment spécialisé en peinture intérieure en Auvergne-Rhône-Alpes, vous accompagne dans tous vos projets de peinture. Que vous souhaitiez rafraîchir vos murs, peindre vos plafonds ou rénover vos boiseries, nous vous proposons une prestation complète avec des finitions soignées. Notre expertise dans le secteur du BTP nous permet de vous conseiller sur le choix des couleurs et des finitions adaptées à vos besoins.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture murs",
      description: "Peinture professionnelle des murs intérieurs avec préparation et finitions soignées"
    },
    {
      title: "Peinture plafonds",
      description: "Application experte sur plafonds avec techniques anti-traces et finition parfaite"
    },
    {
      title: "Peinture boiseries",
      description: "Peinture de portes, fenêtres, plinthes et tous éléments en bois"
    },
    {
      title: "Préparation surfaces",
      description: "Ponçage, rebouchage, lessivage et préparation minutieuse des supports"
    },
    {
      title: "Peinture décorative",
      description: "Effets décoratifs et techniques spéciales pour personnaliser vos intérieurs"
    },
    {
      title: "Conseil couleurs",
      description: "Aide au choix des couleurs et harmonies pour créer l'ambiance souhaitée"
    },
    {
      title: "Finitions qualité",
      description: "Application de peintures haut de gamme avec finitions parfaites"
    },
    {
      title: "Protection chantier",
      description: "Bâchage soigné et protection de vos meubles et sols pendant les travaux"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Devis gratuit et personnalisé",
    "Application professionnelle garantie",
    "Matériaux de qualité supérieure",
    "Finitions parfaites et durables",
    "Conseil personnalisé en couleurs",
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
  peintureConfig.serviceName,
  peintureConfig.location,
  peintureConfig.description,
  peintureConfig.keywords
);

export default function PeinturePage() {
  return <ServicePage {...peintureConfig} />;
}
