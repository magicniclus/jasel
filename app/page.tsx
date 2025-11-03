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
      title: "Rénovation Intérieure",
      subtitle: "Aménagement et rénovation",
      content: "Rénovation complète de vos espaces intérieurs. Intervention professionnelle pour transformer et moderniser votre habitat selon vos besoins.",
      image: "/placo.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/renovation-interieure"
    },
    {
      title: "Peinture",
      subtitle: "Travaux de peinture",
      content: "Travaux de peinture intérieure et extérieure. Application professionnelle pour donner une nouvelle vie à vos murs et façades.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/peinture"
    },
    {
      title: "Plomberie",
      subtitle: "Installation et réparation",
      content: "Services de plomberie complets : installation, réparation et maintenance. Solutions adaptées pour tous vos besoins en plomberie.",
      image: "/maison-work.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/plomberie"
    },
    {
      title: "Toiture & Charpente",
      subtitle: "Couverture et structure",
      content: "Travaux de toiture et charpente. Expertise professionnelle pour la réfection, réparation et entretien de votre couverture.",
      image: "/mur.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107",
      href: "/services/toiture-charpente"
    }
  ];



  const contactInfo = {
    address: "Aix-en-Provence\nRégion PACA\nRayon d'intervention : 50 km autour d'Aix",
    phone: "06 68 92 45 79",
    email: "mraihi_7777@yahoo.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Aix-en-Provence,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de rénovation intérieure, peinture, plomberie ou toiture en région PACA"
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
