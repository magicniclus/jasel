import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Nettoyage commercial PACA - Devis gratuit',
  'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage commercial en PACA. Bureaux, magasins, entrepôts. Devis gratuit et personnalisé.',
  '/about-1.png',
  '/services/nettoyage-commercial'
);

export default function NettoyageCommercialPage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Nettoyage commercial PACA - Devis gratuit',
    description: 'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage commercial en PACA. Bureaux, magasins, entrepôts. Devis gratuit et personnalisé.',
    keywords: [
      'nettoyage commercial PACA',
      'nettoyage bureaux 13090',
      'nettoyage magasins PACA',
      'devis nettoyage gratuit',
      'entretien locaux professionnels',
      'entrepreneur nettoyage PACA'
    ],
    
    // Contenu principal
    serviceName: 'Nettoyage commercial',
    heroImage: '/about-1.png',
    heroTitle: 'Nettoyage commercial en PACA',
    heroSubtitle: 'Expert en nettoyage de locaux professionnels. Bureaux, magasins, entrepôts. Entretien régulier et ponctuel pour entreprises. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Nettoyage professionnel',
    location: 'PACA',
    
    // Contenu détaillé
    mainDescription: 'DOBRE TUDOREL SILVIAN est votre spécialiste du nettoyage commercial en région PACA. Nous proposons des services d\'entretien pour tous types de locaux professionnels : bureaux, magasins, entrepôts, showrooms. Notre équipe expérimentée intervient selon vos contraintes d\'exploitation pour maintenir un environnement de travail propre et professionnel. Nous adaptons nos interventions à votre secteur d\'activité et vos exigences spécifiques.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Nettoyage bureaux',
        description: 'Entretien complet des espaces de travail : bureaux, open-space, salles de réunion'
      },
      {
        title: 'Nettoyage magasins',
        description: 'Entretien des espaces commerciaux : boutiques, showrooms, surfaces de vente'
      },
      {
        title: 'Nettoyage entrepôts',
        description: 'Nettoyage industriel : entrepôts, zones de stockage, espaces logistiques'
      },
      {
        title: 'Nettoyage vitres commerciales',
        description: 'Nettoyage professionnel des vitrines et baies vitrées'
      },
      {
        title: 'Entretien sols professionnels',
        description: 'Nettoyage adapté : moquettes, carrelages, sols industriels'
      },
      {
        title: 'Désinfection espaces de travail',
        description: 'Désinfection complète pour maintenir l\'hygiène des locaux'
      },
      {
        title: 'Nettoyage sanitaires entreprise',
        description: 'Entretien et désinfection des sanitaires et espaces communs'
      },
      {
        title: 'Nettoyage après événements',
        description: 'Remise en état après séminaires, événements, inaugurations'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Équipe professionnelle formée',
      'Produits professionnels adaptés',
      'Interventions hors horaires de travail',
      'Garantie de satisfaction',
      'Contrats d\'entretien flexibles',
      'Respect des normes d\'hygiène',
      'Intervention rapide en région PACA'
    ],
    
    // Zone d'intervention
    serviceArea: [
      '13090 et alentours',
      'Provence-Alpes-Côte d\'Azur',
      'Bouches-du-Rhône',
      'Var',
      'Alpes-Maritimes',
      'Vaucluse',
      'Toute la région PACA'
    ],
    
    // Informations de contact
    contactInfo: {
      phone: '07 59 37 19 21',
      email: 'dcezar978@gmail.com',
      address: '13090, Provence-Alpes-Côte d\'Azur'
    }
  };

  return <ServicePage {...serviceData} />;
}
