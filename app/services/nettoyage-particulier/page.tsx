import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Nettoyage particulier PACA - Devis gratuit',
  'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage particulier en PACA. Entretien résidentiel, grand ménage. Devis gratuit et personnalisé.',
  '/plomberie.png',
  '/services/nettoyage-particulier'
);

export default function NettoyageParticulierPage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Nettoyage particulier PACA - Devis gratuit',
    description: 'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage particulier en PACA. Entretien résidentiel, grand ménage. Devis gratuit et personnalisé.',
    keywords: [
      'nettoyage particulier PACA',
      'entretien résidentiel 13090',
      'grand ménage PACA',
      'devis nettoyage gratuit',
      'ménage particulier PACA',
      'entrepreneur nettoyage PACA'
    ],
    
    // Contenu principal
    serviceName: 'Nettoyage particulier',
    heroImage: '/plomberie.png',
    heroTitle: 'Nettoyage particulier en PACA',
    heroSubtitle: 'Expert en entretien résidentiel et grand ménage. Service professionnel pour particuliers avec solutions personnalisées. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Nettoyage professionnel',
    location: 'PACA',
    
    // Contenu détaillé
    mainDescription: 'DOBRE TUDOREL SILVIAN est votre spécialiste du nettoyage particulier en région PACA. Nous proposons des services d\'entretien résidentiel adaptés à vos besoins : grand ménage, entretien régulier, nettoyage de printemps. Notre expertise nous permet de vous offrir un service de qualité avec des résultats impeccables. Nous utilisons des produits professionnels respectueux de l\'environnement pour garantir la propreté et l\'hygiène de votre domicile.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Grand ménage',
        description: 'Nettoyage complet et approfondi de votre domicile : toutes pièces'
      },
      {
        title: 'Entretien régulier',
        description: 'Service d\'entretien hebdomadaire ou mensuel selon vos besoins'
      },
      {
        title: 'Nettoyage de printemps',
        description: 'Nettoyage saisonnier complet pour un nouveau départ'
      },
      {
        title: 'Nettoyage vitres',
        description: 'Nettoyage professionnel des vitres intérieures et extérieures'
      },
      {
        title: 'Entretien sols',
        description: 'Nettoyage adapté : parquet, carrelage, moquette, lino'
      },
      {
        title: 'Nettoyage cuisine',
        description: 'Dégraissage et nettoyage complet de la cuisine et électroménager'
      },
      {
        title: 'Nettoyage salle de bain',
        description: 'Désinfection et nettoyage des sanitaires et faïences'
      },
      {
        title: 'Dépoussiérage mobilier',
        description: 'Nettoyage et dépoussiérage de tous les meubles et objets'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Personnel qualifié et de confiance',
      'Produits écologiques et efficaces',
      'Flexibilité des horaires',
      'Garantie de satisfaction',
      'Service personnalisé selon vos besoins',
      'Respect de votre intimité',
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
