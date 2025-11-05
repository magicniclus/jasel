import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const couvertureConfig = {
  // SEO et métadonnées
  title: "Couverture Toiture - Tuiles, Ardoises, Zinc - Île de France et Sarthe",
  description: "LCCM, spécialiste couverture toiture en Île de France et Sarthe. Pose et rénovation tuiles, ardoises, zinc. Devis gratuit et personnalisé. Étanchéité garantie.",
  keywords: ["couverture Île de France", "couverture Sarthe", "toiture tuiles", "toiture ardoises", "couverture zinc", "devis couverture gratuit", "couvreur Île de France", "LCCM couverture"],
  
  // Contenu principal
  serviceName: "Couverture",
  heroImage: "/about-1.png",
  heroTitle: "Couverture et Toiture Professionnelle",
  heroSubtitle: "Pose et rénovation de couvertures avec étanchéité garantie",
  
  // Localisation
  sector: "BTP - Couverture",
  location: "Île de France et Sarthe",
  
  // Description détaillée
  mainDescription: "LCCM est votre spécialiste en couverture et toiture en Île de France et Sarthe. Notre équipe de couvreurs experts réalise tous vos travaux de couverture : pose, rénovation, réparation. Nous travaillons avec tous types de matériaux (tuiles, ardoises, zinc) pour garantir l'étanchéité parfaite et la durabilité de votre toiture.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Couverture Tuiles",
      description: "Pose et rénovation de toitures en tuiles terre cuite, béton, canal ou plates selon vos besoins"
    },
    {
      title: "Couverture Ardoises",
      description: "Installation et restauration de toitures en ardoises naturelles ou synthétiques, finitions soignées"
    },
    {
      title: "Couverture Zinc",
      description: "Pose de couvertures zinc, bac acier, solutions modernes et durables pour tous types de bâtiments"
    },
    {
      title: "Rénovation de Toiture",
      description: "Réfection complète ou partielle de votre couverture, remplacement des éléments défaillants"
    },
    {
      title: "Étanchéité Toiture",
      description: "Traitement de l'étanchéité, pose d'écrans sous-toiture, protection contre les infiltrations"
    },
    {
      title: "Isolation Toiture",
      description: "Isolation thermique et phonique sous couverture pour améliorer les performances énergétiques"
    },
    {
      title: "Réparation d'Urgence",
      description: "Intervention rapide pour fuites, tuiles cassées, réparations d'urgence après intempéries"
    },
    {
      title: "Entretien et Maintenance",
      description: "Nettoyage, démoussage, vérification périodique de votre couverture pour sa longévité"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Étanchéité garantie 10 ans",
    "Matériaux de qualité certifiés",
    "Respect des délais convenus",
    "Garantie décennale sur tous travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et durables",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Intervention rapide en urgence"
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
  couvertureConfig.serviceName,
  couvertureConfig.location,
  couvertureConfig.description,
  couvertureConfig.keywords
);

export default function CouverturePage() {
  return <ServicePage {...couvertureConfig} />;
}
