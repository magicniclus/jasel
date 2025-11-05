import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const plaquisterieConfig = {
  // SEO et métadonnées
  title: "Plaquisterie - Cloisons, Doublages, Faux Plafonds - Île de France et Sarthe",
  description: "LCCM, spécialiste plaquisterie en Île de France et Sarthe. Pose cloisons, doublages, faux plafonds. Devis gratuit et personnalisé. Aménagement intérieur sur mesure.",
  keywords: ["plaquisterie Île de France", "plaquisterie Sarthe", "cloisons placo", "doublages", "faux plafonds", "devis plaquisterie gratuit", "plaquiste Île de France", "LCCM plaquisterie"],
  
  // Contenu principal
  serviceName: "Plaquisterie",
  heroImage: "/about-1.png",
  heroTitle: "Plaquisterie et Aménagement Intérieur",
  heroSubtitle: "Pose de cloisons, doublages et faux plafonds pour vos aménagements",
  
  // Localisation
  sector: "BTP - Plaquisterie",
  location: "Île de France et Sarthe",
  
  // Description détaillée
  mainDescription: "LCCM est votre spécialiste en plaquisterie en Île de France et Sarthe. Notre équipe de plaquistes experts réalise tous vos travaux d'aménagement intérieur : cloisons, doublages, faux plafonds. Nous créons des espaces sur mesure avec des finitions soignées pour transformer et optimiser vos intérieurs.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Cloisons Placo",
      description: "Pose de cloisons en plaques de plâtre pour créer de nouveaux espaces, séparations sur mesure"
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
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Aménagements sur mesure",
    "Matériaux de qualité certifiés",
    "Respect des délais convenus",
    "Garantie décennale sur tous travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et durables",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Isolation thermique et phonique"
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
  plaquisterieConfig.serviceName,
  plaquisterieConfig.location,
  plaquisterieConfig.description,
  plaquisterieConfig.keywords
);

export default function PlaquisteriePage() {
  return <ServicePage {...plaquisterieConfig} />;
}
