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
      title: "Peinture intérieure",
      subtitle: "Rénovation et décoration",
      content: "Peinture intérieure professionnelle : murs, plafonds, boiseries. Préparation des surfaces, application de peintures de qualité et finitions soignées en Auvergne-Rhône-Alpes.",
      image: "/maison.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/peinture"
    },
    {
      title: "Pose de parquet",
      subtitle: "Revêtement de sol",
      content: "Pose de parquet professionnel : parquet massif, contrecollé, stratifié. Installation soignée et finitions parfaites pour tous types de parquets.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/parquet"
    },
    {
      title: "Toile décorative",
      subtitle: "Décoration murale",
      content: "Pose de toile décorative et papier peint : préparation des murs, pose soignée et finitions parfaites. Décoration personnalisée pour votre intérieur.",
      image: "/peinture.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/toile-decorative"
    },
    {
      title: "Rénovation intérieure",
      subtitle: "Projet complet",
      content: "Rénovation intérieure complète : peinture, parquet, toile. Projet clé en main avec finitions haut de gamme pour transformer votre intérieur.",
      image: "/about-1.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c",
      href: "/services/renovation-interieure"
    }
  ];



  const contactInfo = {
    address: "01150, Auvergne-Rhône-Alpes\nIntervention dans toute la région\nPeinture et parquet",
    phone: "06 87 18 47 96",
    email: "mehtapmurat@hotmail.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=01150,Auvergne-Rhône-Alpes,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de peinture intérieure, pose de parquet ou toile décorative en Auvergne-Rhône-Alpes"
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
