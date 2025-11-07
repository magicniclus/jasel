import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';
import { Metadata } from 'next';

// Métadonnées SEO pour la page
export const metadata: Metadata = generateMetadata(
  'Nettoyage de chantier PACA - Devis gratuit',
  'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage de chantier en PACA. Nettoyage après travaux, évacuation gravats. Devis gratuit et personnalisé.',
  '/peinture.png',
  '/services/nettoyage-chantier'
);

export default function NettoyageChantierPage() {
  const serviceData = {
    // SEO et métadonnées
    title: 'Nettoyage de chantier PACA - Devis gratuit',
    description: 'DOBRE TUDOREL SILVIAN, spécialiste du nettoyage de chantier en PACA. Nettoyage après travaux, évacuation gravats. Devis gratuit et personnalisé.',
    keywords: [
      'nettoyage chantier PACA',
      'nettoyage après travaux 13090',
      'nettoyage fin de chantier PACA',
      'devis nettoyage gratuit',
      'évacuation gravats PACA',
      'entrepreneur nettoyage PACA'
    ],
    
    // Contenu principal
    serviceName: 'Nettoyage de chantier',
    heroImage: '/peinture.png',
    heroTitle: 'Nettoyage de chantier en PACA',
    heroSubtitle: 'Expert en nettoyage après travaux et fin de chantier. Service professionnel pour la remise en état complète de vos locaux. Devis gratuit et personnalisé.',
    
    // Secteur d'activité
    sector: 'Nettoyage professionnel',
    location: 'PACA',
    
    // Contenu détaillé
    mainDescription: 'DOBRE TUDOREL SILVIAN est votre spécialiste du nettoyage de chantier en région PACA. Nous intervenons pour le nettoyage professionnel après travaux, l\'enlevèment des gravats et la remise en état complète de vos locaux. Notre expertise nous permet de vous livrer des espaces parfaitement propres et prêts à l\'usage. Nous utilisons des techniques adaptées et des équipements professionnels pour garantir un résultat impeccable.',
    
    // Sous-prestations
    subServices: [
      {
        title: 'Nettoyage après travaux',
        description: 'Nettoyage complet après rénovation : dépoussiérage, lavage des surfaces'
      },
      {
        title: 'Évacuation des gravats',
        description: 'Évacuation et élimination des déchets de chantier et matériaux'
      },
      {
        title: 'Nettoyage de fin de chantier',
        description: 'Remise en état finale pour livraison clé en main'
      },
      {
        title: 'Dépoussiérage professionnel',
        description: 'Élimination complète de la poussière de plâtre et ciment'
      },
      {
        title: 'Nettoyage vitres et menuiseries',
        description: 'Nettoyage des fenêtres, portes et éléments de menuiserie'
      },
      {
        title: 'Nettoyage sols et revêtements',
        description: 'Nettoyage adapté selon le type de sol : carrelage, parquet, béton'
      },
      {
        title: 'Désinfection des locaux',
        description: 'Désinfection complète pour une hygiène parfaite'
      },
      {
        title: 'Nettoyage sanitaires',
        description: 'Nettoyage et désinfection des installations sanitaires'
      }
    ],
    
    // Avantages/Points forts
    advantages: [
      'Devis gratuit et personnalisé',
      'Estimation gratuite et sans engagement',
      'Tarification transparente',
      'Équipements professionnels de pointe',
      'Produits écologiques et efficaces',
      'Respect des délais convenus',
      'Garantie de satisfaction',
      'Conseil personnalisé selon vos besoins',
      'Finitions soignées et durables',
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
