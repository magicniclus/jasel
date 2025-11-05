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
      title: "Charpente Traditionnelle",
      subtitle: "Charpente sur mesure",
      content: "Conception et réalisation de charpentes traditionnelles en bois. Expertise artisanale pour structures durables et esthétiques.",
      image: "/placo.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/toiture-charpente"
    },
    {
      title: "Couverture",
      subtitle: "Toiture et étanchéité",
      content: "Pose et rénovation de couvertures : tuiles, ardoises, zinc. Solutions complètes pour l'étanchéité et l'isolation de votre toiture.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/toiture-charpente"
    },
    {
      title: "Zinguerie",
      subtitle: "Évacuation des eaux",
      content: "Installation et réparation de systèmes de zinguerie : gouttières, chéneaux, descentes. Expertise en évacuation des eaux pluviales.",
      image: "/plomberie.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/toiture-charpente"
    },
    {
      title: "Plaquisterie",
      subtitle: "Cloisons et doublages",
      content: "Pose de cloisons, doublages et faux plafonds. Aménagement intérieur avec finitions soignées pour tous vos espaces.",
      image: "/mur.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c",
      href: "/services/renovation-interieure"
    }
  ];



  const contactInfo = {
    address: "Île de France et Sarthe\nIntervention dans toute la région\nHors Paris intramuros",
    phone: "06 75 87 47 82",
    email: "lccmsarthe@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Sarthe,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de charpente, couverture, zinguerie ou plaquisterie en Île de France et Sarthe"
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
