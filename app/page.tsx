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
      title: "Ravalement",
      subtitle: "Ravalement de façades",
      content: "Ravalement de façades, pignons et murs extérieurs. Expertise en rénovation et embellissement de vos façades en Bretagne.",
      image: "/maison.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/ravalement"
    },
    {
      title: "Couverture",
      subtitle: "Toiture et étanchéité",
      content: "Pose et rénovation de couvertures : tuiles, ardoises. Solutions complètes pour l'étanchéité et la protection de votre toiture.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/couverture"
    },
    {
      title: "Nettoyage de couverture et façade",
      subtitle: "Nettoyage professionnel",
      content: "Nettoyage de toiture, pignon et façade. Service professionnel pour l'entretien et la propreté de vos bâtiments.",
      image: "/peinture.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/nettoyage-chantier"
    },
    {
      title: "Toiture",
      subtitle: "Travaux de toiture",
      content: "Travaux de toiture complète : réparation, entretien et rénovation. Expertise en toiture pour tous types de bâtiments.",
      image: "/about-1.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c",
      href: "/services/toiture"
    }
  ];



  const contactInfo = {
    address: "Bretagne (29000)\nIntervention dans toute la région\nCaimpert et alentours",
    phone: "06 45 61 01 78",
    email: "diamantalive.fr@live.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bretagne,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de ravalement, couverture ou nettoyage de chantier en Bretagne"
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
