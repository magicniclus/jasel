import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page carrelage
const carrelageConfig = {
  // SEO et métadonnées
  title: "Carrelage PACA - Aix-en-Provence",
  description: "AYA PRO, spécialiste pose de carrelage en région PACA. Carrelage sol, faïence murale, mosaïque. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "carrelage PACA",
    "pose carrelage Aix-en-Provence",
    "faïence salle de bain",
    "devis carrelage gratuit",
    "carrelage sol PACA",
    "mosaïque Aix",
    "entrepreneur carreleur",
    "pose carrelage professionnel",
    "carrelage pierre naturelle"
  ],
  
  // Contenu principal
  serviceName: "Carrelage",
  heroImage: "/mur.png",
  heroTitle: "Pose de Carrelage Professionnelle",
  heroSubtitle: "Expert en pose de carrelage, faïence et mosaïque en région PACA. Finitions parfaites avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Carrelage",
  location: "PACA",
  
  // Contenu détaillé
  mainDescription: "AYA PRO, entrepreneur spécialisé en carrelage en région PACA, vous propose ses services de pose de carrelage pour tous vos projets. Que ce soit pour votre salle de bain, cuisine, salon ou terrasse, nous maîttrisons tous les types de revêtements céramiques. Notre savoir-faire dans le secteur du BTP nous permet de vous garantir une pose professionnelle avec des finitions impeccables et une étanchéité parfaite.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Carrelage sol intérieur",
      description: "Pose de carrelage pour sols de cuisine, salon, entrée avec finitions soignées"
    },
    {
      title: "Faïence murale",
      description: "Revêtement mural pour salle de bain, cuisine, crédence avec étanchéité garantie"
    },
    {
      title: "Mosaïque décorative",
      description: "Pose de mosaïque en verre, céramique ou pierre pour créer des ambiances uniques"
    },
    {
      title: "Pierre naturelle",
      description: "Installation de carrelage en pierre naturelle : travertin, marbre, ardoise"
    },
    {
      title: "Grès cérame",
      description: "Pose de carrelage grand format en grès cérame pour un rendu moderne"
    },
    {
      title: "Étanchéité",
      description: "Mise en œuvre de l'étanchéité sous carrelage pour pièces humides"
    },
    {
      title: "Joints et finitions",
      description: "Réalisation de joints parfaits et pose de profilés de finition"
    },
    {
      title: "Ragréage",
      description: "Préparation et ragréage des sols pour une pose parfaite du carrelage"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Pose professionnelle garantie",
    "Matériaux haut de gamme",
    "Étanchéité parfaite assurée",
    "Finitions impeccables",
    "Conseil design personnalisé",
    "Devis gratuit et personnalisé",
    "Respect du planning convenu",
    "Garantie sur tous les travaux",
    "Tarification transparente",
    "Estimation gratuite et sans engagement"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Aix-en-Provence",
    "Région PACA",
    "Bouches-du-Rhône",
    "Marseille",
    "Salon-de-Provence",
    "Gardanne",
    "Vitrolles",
    "50 km autour d'Aix"
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "06 68 92 45 79",
    email: "mraihi_7777@yahoo.com",
    address: "Aix-en-Provence, PACA"
  }
  
  // Pas de section pricing selon les instructions
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  carrelageConfig.serviceName,
  carrelageConfig.location,
  carrelageConfig.description,
  carrelageConfig.keywords
);

export default function CarrelagePage() {
  return <ServicePage {...carrelageConfig} />;
}
