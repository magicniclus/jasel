import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Couverture toiture en Bretagne - Devis gratuit',
  'NEWMAN, spécialiste de la couverture toiture en Bretagne. Pose et rénovation tuiles, ardoises. Devis gratuit et personnalisé.',
  '/plomberie.png',
  '/services/couverture'
);

export default function CouverturePage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Couverture toiture en Bretagne - Devis gratuit',
    description: 'NEWMAN, spécialiste de la couverture toiture en Bretagne. Pose et rénovation tuiles, ardoises. Devis gratuit et personnalisé.',
    keywords: [
      'couverture Bretagne',
      'toiture Bretagne',
      'couvreur 29000',
      'devis couverture gratuit',
      'rénovation toiture Caimpert',
      'entrepreneur couverture Bretagne'
    ],
    
    // Contenu principal
    serviceName: 'Couverture',
    heroImage: '/plomberie.png',
    heroTitle: 'Couverture et Toiture en Bretagne',
    heroSubtitle: 'Expert en couverture et toiture. Pose, rénovation et réparation avec étanchéité garantie. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Bâtiment',
    location: 'Bretagne',
    
    // Contenu détaillé
    mainDescription: 'NEWMAN est votre spécialiste en couverture et toiture en Bretagne. Notre équipe de couvreurs experts réalise tous vos travaux de couverture : pose, rénovation, réparation. Nous travaillons avec tous types de matériaux (tuiles, ardoises) pour garantir l\'étanchéité parfaite et la durabilité de votre toiture en Bretagne.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Couverture Tuiles',
        description: 'Pose et rénovation de toitures en tuiles terre cuite, béton, canal ou plates selon vos besoins'
      },
      {
        title: 'Couverture Ardoises',
        description: 'Installation et restauration de toitures en ardoises naturelles, finitions soignées'
      },
      {
        title: 'Rénovation de Toiture',
        description: 'Réfection complète ou partielle de votre couverture, remplacement des éléments défaillants'
      },
      {
        title: 'Étanchéité Toiture',
        description: 'Traitement de l\'étanchéité, protection contre les infiltrations d\'eau'
      },
      {
        title: 'Réparation d\'Urgence',
        description: 'Intervention rapide pour fuites, tuiles cassées, réparations d\'urgence après intempéries'
      },
      {
        title: 'Entretien et Maintenance',
        description: 'Nettoyage, démoussage, vérification périodique de votre couverture pour sa longévité'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Étanchéité garantie',
      'Matériaux de qualité professionnelle',
      'Respect des délais convenus',
      'Garantie décennale sur tous nos travaux',
      'Conseil personnalisé selon votre budget',
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
