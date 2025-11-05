import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Travaux de toiture en Bretagne - Devis gratuit',
  'NEWMAN, spécialiste des travaux de toiture en Bretagne. Réparation, entretien et rénovation de toiture. Devis gratuit et personnalisé.',
  '/about-1.png',
  '/services/toiture'
);

export default function ToiturePage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Travaux de toiture en Bretagne - Devis gratuit',
    description: 'NEWMAN, spécialiste des travaux de toiture en Bretagne. Réparation, entretien et rénovation de toiture. Devis gratuit et personnalisé.',
    keywords: [
      'travaux toiture Bretagne',
      'réparation toiture Bretagne',
      'entretien toiture 29000',
      'devis toiture gratuit',
      'rénovation toiture Caimpert',
      'entrepreneur toiture Bretagne'
    ],
    
    // Contenu principal
    serviceName: 'Toiture',
    heroImage: '/about-1.png',
    heroTitle: 'Travaux de toiture en Bretagne',
    heroSubtitle: 'Expert en travaux de toiture complète : réparation, entretien et rénovation. Expertise pour tous types de bâtiments. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Bâtiment',
    location: 'Bretagne',
    
    // Contenu détaillé
    mainDescription: 'NEWMAN est votre spécialiste des travaux de toiture en Bretagne. Nous intervenons pour tous types de travaux de toiture : réparation, entretien, rénovation complète sur toute la région. Notre expertise nous permet de traiter tous les problèmes de toiture avec des solutions durables et adaptées. Nous garantissons des interventions de qualité pour protéger efficacement votre bâtiment.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Réparation de toiture',
        description: 'Réparation de fuites, remplacement de tuiles cassées, traitement des infiltrations'
      },
      {
        title: 'Entretien de toiture',
        description: 'Entretien préventif : nettoyage, vérification, maintenance pour prolonger la durée de vie'
      },
      {
        title: 'Rénovation complète',
        description: 'Rénovation totale de toiture : structure, couverture, isolation, étanchéité'
      },
      {
        title: 'Inspection de toiture',
        description: 'Diagnostic complet de l\'état de votre toiture avec rapport détaillé'
      },
      {
        title: 'Traitement préventif',
        description: 'Application de traitements pour protéger votre toiture contre les intempéries'
      },
      {
        title: 'Urgence toiture',
        description: 'Intervention d\'urgence pour bâchage et réparations temporaires'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Diagnostic complet inclus',
      'Solutions durables et adaptées',
      'Respect des délais convenus',
      'Garantie décennale sur tous nos travaux',
      'Conseil personnalisé selon votre budget',
      'Finitions soignées et durables',
      'Intervention rapide en urgence'
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
