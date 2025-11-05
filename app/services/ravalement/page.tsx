import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Ravalement de façades en Bretagne - Devis gratuit',
  'NEWMAN, spécialiste du ravalement de façades en Bretagne. Ravalement de pignons, murs extérieurs. Devis gratuit et personnalisé.',
  '/maison.png',
  '/services/ravalement'
);

export default function RavalementPage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Ravalement de façades en Bretagne - Devis gratuit',
    description: 'NEWMAN, spécialiste du ravalement de façades en Bretagne. Ravalement de pignons, murs extérieurs. Devis gratuit et personnalisé.',
    keywords: [
      'ravalement façade Bretagne',
      'ravalement pignon Bretagne',
      'rénovation façade 29000',
      'devis ravalement gratuit',
      'ravalement Caimpert',
      'entrepreneur ravalement Bretagne'
    ],
    
    // Contenu principal
    serviceName: 'Ravalement',
    heroImage: '/maison.png',
    heroTitle: 'Ravalement de façades en Bretagne',
    heroSubtitle: 'Expert en ravalement de façades, pignons et murs extérieurs. Devis gratuit et personnalisé pour tous vos projets de ravalement en Bretagne.',
    
    // Secteur d'activité
    sector: 'Bâtiment',
    location: 'Bretagne',
    
    // Contenu détaillé
    mainDescription: 'NEWMAN est votre spécialiste du ravalement de façades en Bretagne. Nous intervenons pour le ravalement de façades, pignons et murs extérieurs sur toute la région. Notre expertise nous permet de redonner une seconde jeunesse à vos bâtiments tout en améliorant leur isolation et leur étanchéité. Nous utilisons des matériaux de qualité et des techniques modernes pour garantir un résultat durable et esthétique.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Ravalement de façades',
        description: 'Nettoyage, réparation et finition des façades principales de votre bâtiment avec des matériaux adaptés.'
      },
      {
        title: 'Ravalement de pignons',
        description: 'Traitement spécialisé des murs pignons pour une protection optimale contre les intempéries.'
      },
      {
        title: 'Nettoyage de façades',
        description: 'Nettoyage professionnel pour éliminer salissures, mousses et traces de pollution.'
      },
      {
        title: 'Réparation de fissures',
        description: 'Traitement des fissures et défauts de façade pour assurer l\'étanchéité et la solidité.'
      },
      {
        title: 'Peinture de façade',
        description: 'Application de peintures spécialisées pour une protection et un rendu esthétique optimal.'
      },
      {
        title: 'Isolation par l\'extérieur',
        description: 'Amélioration de l\'isolation thermique lors du ravalement pour optimiser les performances énergétiques.'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Matériaux de qualité professionnelle',
      'Respect des délais convenus',
      'Garantie décennale sur tous nos travaux',
      'Conseil personnalisé selon votre budget',
      'Finitions soignées et durables',
      'Suivi post-travaux inclus',
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
