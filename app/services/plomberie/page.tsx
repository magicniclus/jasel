import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

// Configuration de la page plomberie
const plomberieConfig = {
  // SEO et métadonnées
  title: "Plomberie - Installation et Réparation - Île de France et Sarthe",
  description: "LCCM, services de plomberie professionnels en Île de France et Sarthe. Installation, réparation, dépannage urgent. Devis gratuit et intervention rapide.",
  keywords: [
    "plomberie Île de France",
    "plomberie Sarthe",
    "plombier Le Mans",
    "dépannage plomberie",
    "installation sanitaire",
    "réparation fuite",
    "plomberie urgence",
    "devis plomberie gratuit",
    "entrepreneur plombier",
    "LCCM plomberie"
  ],
  
  // Contenu principal
  serviceName: "Plomberie",
  heroImage: "/plomberie.png",
  heroTitle: "Services de Plomberie Professionnels",
  heroSubtitle: "Installation, réparation et dépannage de tous vos équipements de plomberie en Île de France et Sarthe. Intervention rapide et devis gratuit.",
  
  // Secteur d'activité
  sector: "BTP - Plomberie",
  location: "Île de France et Sarthe",
  
  // Contenu détaillé
  mainDescription: "LCCM vous propose ses services de plomberie en Île de France et Sarthe. Fort de plusieurs années d'expérience dans le secteur du BTP, nous intervenons pour tous vos travaux de plomberie, de l'installation neuve au dépannage d'urgence. Notre expertise couvre l'ensemble des équipements sanitaires et de chauffage pour particuliers et professionnels.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Installation sanitaire",
      description: "Pose de lavabos, éviers, WC, douches, baignoires et tous équipements sanitaires"
    },
    {
      title: "Réparation de fuites",
      description: "Détection et réparation de fuites d'eau, joints défaillants, robinetterie"
    },
    {
      title: "Dépannage d'urgence",
      description: "Intervention rapide 7j/7 pour tous problèmes de plomberie urgents"
    },
    {
      title: "Installation chauffe-eau",
      description: "Pose et remplacement de chauffe-eau électrique, gaz ou thermodynamique"
    },
    {
      title: "Canalisation",
      description: "Installation, réparation et débouchage de canalisations et évacuations"
    },
    {
      title: "Robinetterie",
      description: "Installation et réparation de robinets, mitigeurs, vannes d'arrêt"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Intervention rapide sous 24h",
    "Devis gratuit et personnalisé",
    "Matériaux de qualité professionnelle",
    "Garantie sur tous les travaux",
    "Tarification transparente",
    "Artisan expérimenté et qualifié",
    "Respect des normes en vigueur",
    "Service après-vente assuré",
    "Estimation gratuite et sans engagement",
    "Conseil personnalisé"
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
  },
  
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  plomberieConfig.serviceName,
  plomberieConfig.location,
  plomberieConfig.description,
  plomberieConfig.keywords
);

export default function PlomberiePage() {
  return <ServicePage {...plomberieConfig} />;
}
