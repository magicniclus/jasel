import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const zinguerieConfig = {
  // SEO et métadonnées
  title: "Zinguerie - Gouttières, Chéneaux, Évacuation Eaux - Île de France et Sarthe",
  description: "LCCM, spécialiste zinguerie en Île de France et Sarthe. Installation gouttières, chéneaux, descentes. Devis gratuit et personnalisé. Évacuation des eaux pluviales.",
  keywords: ["zinguerie Île de France", "zinguerie Sarthe", "gouttières", "chéneaux", "évacuation eaux pluviales", "devis zinguerie gratuit", "zingueur Île de France", "LCCM zinguerie"],
  
  // Contenu principal
  serviceName: "Zinguerie",
  heroImage: "/about-1.png",
  heroTitle: "Zinguerie et Évacuation des Eaux",
  heroSubtitle: "Installation et réparation de systèmes d'évacuation des eaux pluviales",
  
  // Localisation
  sector: "BTP - Zinguerie",
  location: "Île de France et Sarthe",
  
  // Description détaillée
  mainDescription: "LCCM est votre spécialiste en zinguerie en Île de France et Sarthe. Notre équipe d'experts réalise tous vos travaux de zinguerie : installation et réparation de gouttières, chéneaux, descentes d'eaux pluviales. Nous garantissons une évacuation efficace des eaux pour protéger votre bâtiment des infiltrations et de l'humidité.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Gouttières",
      description: "Pose et réparation de gouttières zinc, PVC, aluminium, sur mesure selon votre toiture"
    },
    {
      title: "Chéneaux",
      description: "Installation de chéneaux pour toitures plates ou à faible pente, étanchéité parfaite"
    },
    {
      title: "Descentes d'Eau",
      description: "Pose de descentes d'eaux pluviales, raccordement au réseau d'évacuation"
    },
    {
      title: "Habillage de Toiture",
      description: "Habillage de rives, bandeaux, planches de rive pour finitions esthétiques et protection"
    },
    {
      title: "Solins et Noues",
      description: "Réalisation de solins d'étanchéité, noues pour jonctions entre toitures"
    },
    {
      title: "Réparation Zinguerie",
      description: "Réparation de fuites, remplacement d'éléments défaillants, remise en état"
    },
    {
      title: "Entretien Préventif",
      description: "Nettoyage, débouchage, vérification du bon écoulement des eaux"
    },
    {
      title: "Zinguerie sur Mesure",
      description: "Fabrication et pose d'éléments de zinguerie sur mesure selon vos besoins spécifiques"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Évacuation des eaux garantie",
    "Matériaux résistants et durables",
    "Respect des délais convenus",
    "Garantie décennale sur tous travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et esthétiques",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Fabrication sur mesure possible"
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
  zinguerieConfig.serviceName,
  zinguerieConfig.location,
  zinguerieConfig.description,
  zinguerieConfig.keywords
);

export default function ZingueriePage() {
  return <ServicePage {...zinguerieConfig} />;
}
