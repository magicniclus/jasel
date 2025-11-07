'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Nettoyage de chantier",
      subtitle: "Nettoyage après travaux",
      content: "Nettoyage professionnel de chantiers après travaux. Évacuation des gravats, dépoussiérage et remise en état complète de vos locaux en région PACA.",
      image: "/maison.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/nettoyage-chantier"
    },
    {
      title: "Nettoyage particulier",
      subtitle: "Entretien résidentiel",
      content: "Services de nettoyage pour particuliers : entretien régulier, grand ménage, nettoyage de printemps. Solutions personnalisées pour votre domicile.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/nettoyage-particulier"
    },
    {
      title: "Nettoyage à domicile",
      subtitle: "Service à domicile",
      content: "Nettoyage à domicile professionnel : ménage, repassage, entretien. Service personnalisé et de qualité directement chez vous en PACA.",
      image: "/peinture.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/nettoyage-domicile"
    },
    {
      title: "Nettoyage commercial",
      subtitle: "Locaux professionnels",
      content: "Nettoyage de locaux commerciaux et professionnels : bureaux, magasins, entrepôts. Entretien régulier et ponctuel pour entreprises.",
      image: "/about-1.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c",
      href: "/services/nettoyage-commercial"
    }
  ];



  const contactInfo = {
    address: "13090, Provence-Alpes-Côte d'Azur\nIntervention dans toute la région PACA\nNettoyage professionnel",
    phone: "07 59 37 19 21",
    email: "dcezar978@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=13090,Provence-Alpes-Côte+d'Azur,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de nettoyage de chantier, nettoyage particulier ou nettoyage à domicile en région PACA"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
