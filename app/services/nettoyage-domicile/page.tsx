import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Nettoyage à domicile PACA - Devis gratuit',
  'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage à domicile en PACA. Ménage, repassage, entretien. Devis gratuit et personnalisé.',
  '/peinture.png',
  '/services/nettoyage-domicile'
);

export default function NettoyageDomicilePage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Nettoyage à domicile PACA - Devis gratuit',
    description: 'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage à domicile en PACA. Ménage, repassage, entretien. Devis gratuit et personnalisé.',
    keywords: [
      'nettoyage domicile PACA',
      'ménage domicile 13090',
      'repassage domicile PACA',
      'devis nettoyage gratuit',
      'entretien ménager PACA',
      'entrepreneur nettoyage PACA'
    ],
    
    // Contenu principal
    serviceName: 'Nettoyage à domicile',
    heroImage: '/peinture.png',
    heroTitle: 'Nettoyage à domicile en PACA',
    heroSubtitle: 'Expert en services ménagers à domicile. Ménage, repassage et entretien personnalisé directement chez vous. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Nettoyage professionnel',
    location: 'PACA',
    
    // Contenu détaillé
    mainDescription: 'DOBRE TUDOREL SILVIAN est votre spécialiste du nettoyage à domicile en région PACA. Nous vous proposons des services ménagers complets directement chez vous : ménage régulier, repassage, entretien personnalisé. Notre équipe qualifiée intervient selon vos disponibilités pour vous faire gagner du temps. Nous utilisons des produits et équipements professionnels pour garantir un service de qualité irréprochable.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Ménage régulier',
        description: 'Service de ménage hebdomadaire ou bi-mensuel selon vos besoins'
      },
      {
        title: 'Repassage à domicile',
        description: 'Service de repassage professionnel directement chez vous'
      },
      {
        title: 'Entretien personnalisé',
        description: 'Services adaptés à vos besoins spécifiques et contraintes'
      },
      {
        title: 'Nettoyage express',
        description: 'Intervention rapide pour remise en ordre avant événements'
      },
      {
        title: 'Entretien cuisine',
        description: 'Nettoyage et entretien régulier de votre cuisine'
      },
      {
        title: 'Entretien sanitaires',
        description: 'Nettoyage et désinfection des salles de bain et WC'
      },
      {
        title: 'Aspirateur et sols',
        description: 'Aspiration et lavage de tous types de sols'
      },
      {
        title: 'Dépoussiérage',
        description: 'Dépoussiérage complet du mobilier et objets déco'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Personnel de confiance et discret',
      'Produits écologiques fournis',
      'Horaires flexibles adaptés',
      'Garantie de satisfaction',
      'Service sur mesure',
      'Suivi qualité régulier',
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
