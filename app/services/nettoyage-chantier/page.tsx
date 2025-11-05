import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Nettoyage de couverture et façade en Bretagne - Devis gratuit',
  'NEWMAN, spécialiste du nettoyage de couverture et façade en Bretagne. Nettoyage de toiture, pignon et façade. Devis gratuit et personnalisé.',
  '/peinture.png',
  '/services/nettoyage-chantier'
);

export default function NettoyageChantierPage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Nettoyage de couverture et façade en Bretagne - Devis gratuit',
    description: 'NEWMAN, spécialiste du nettoyage de couverture et façade en Bretagne. Nettoyage de toiture, pignon et façade. Devis gratuit et personnalisé.',
    keywords: [
      'nettoyage chantier Bretagne',
      'nettoyage toiture Bretagne',
      'nettoyage façade 29000',
      'devis nettoyage gratuit',
      'nettoyage pignon Caimpert',
      'entrepreneur nettoyage Bretagne'
    ],
    
    // Contenu principal
    serviceName: 'Nettoyage de couverture et façade',
    heroImage: '/peinture.png',
    heroTitle: 'Nettoyage de couverture et façade en Bretagne',
    heroSubtitle: 'Expert en nettoyage de toiture, pignon et façade. Service professionnel pour l\'entretien et la propreté de vos bâtiments. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Bâtiment',
    location: 'Bretagne',
    
    // Contenu détaillé
    mainDescription: 'NEWMAN est votre spécialiste du nettoyage de couverture et façade en Bretagne. Nous intervenons pour le nettoyage professionnel de toiture, pignon et façade sur toute la région. Notre expertise nous permet de redonner une propreté optimale à vos bâtiments tout en préservant leurs matériaux. Nous utilisons des techniques adaptées et des produits respectueux de l\'environnement pour garantir un résultat durable.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Nettoyage de toiture',
        description: 'Nettoyage complet des toitures : démoussage, élimination des lichens et salissures'
      },
      {
        title: 'Nettoyage de façades',
        description: 'Nettoyage professionnel des façades pour éliminer pollution, mousses et traces'
      },
      {
        title: 'Nettoyage de pignons',
        description: 'Traitement spécialisé des murs pignons pour une propreté optimale'
      },
      {
        title: 'Démoussage',
        description: 'Élimination des mousses et lichens sur toutes surfaces extérieures'
      },
      {
        title: 'Nettoyage haute pression',
        description: 'Nettoyage à haute pression adapté selon le type de surface et matériau'
      },
      {
        title: 'Nettoyage fin de chantier',
        description: 'Nettoyage complet après travaux pour une finition parfaite'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Techniques respectueuses des matériaux',
      'Produits écologiques et efficaces',
      'Respect des délais convenus',
      'Garantie de satisfaction',
      'Conseil personnalisé selon vos besoins',
      'Finitions soignées et durables',
      'Intervention rapide en Bretagne'
    ],
    
    // Zone d'intervention
    serviceArea: [
      'Bretagne (29000)',
      'Caimpert et alentours',
      'Finistère',
      'Toute la région Bretagne'
    ],
    
    // Informations de contact
    contactInfo: {
      phone: '06 45 61 01 78',
      email: 'diamantalive.fr@live.fr',
      address: 'Bretagne (29000), Caimpert'
    }
  };

  return <ServicePage {...serviceData} />;
}
