/**
 * =========================================================================
 * ⚖️ LANDING PAGE PARA ADVOCACIA DE ALTO PADRÃO (VALENÇA & CASTRO)
 * =========================================================================
 * Desenvolvido com animações scroll-trigger, parallax e design editorial.
 * 
 * 💡 DICA PARA O PROGRAMADOR:
 * Para personalizar os dados, textos, fotos e vídeos para o seu cliente advogado,
 * abra o arquivo: `src/data/lawFirmConfig.ts`.
 * =========================================================================
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { ParallaxQuoteVideo } from './components/ParallaxQuoteVideo';
import { PartnersSection } from './components/PartnersSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ConsultationTriage } from './components/ConsultationTriage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [triageModalOpen, setTriageModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e6e8eb] flex flex-col selection:bg-[#c5a880]/30 selection:text-[#f8f5ee]">
      {/* Barra de Navegação */}
      <Navbar
        onOpenTriage={() => setTriageModalOpen(true)}
      />

      {/* Hero Principal com Parallax & Vídeo */}
      <main className="flex-1">
        <Hero onOpenTriage={() => setTriageModalOpen(true)} />

        {/* Estatísticas e Números Expressivos */}
        <StatsBar />

        {/* Sobre o Escritório e Posicionamento Institucional */}
        <AboutSection onOpenTriage={() => setTriageModalOpen(true)} />

        {/* Áreas de Atuação Jurídica */}
        <PracticeAreas />

        {/* Interrupção Visual com Vídeo Parallax */}
        <ParallaxQuoteVideo />

        {/* Sócios Seniores e Especialistas */}
        <PartnersSection />

        {/* Casos de Sucesso e Teses Vitoriosas */}
        <CaseStudiesSection />

        {/* Triagem Interativa de Demanda / Lead Capture */}
        <ConsultationTriage />

        {/* Depoimentos de Clientes Corporativos */}
        <TestimonialsSection />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Rodapé Completo */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Modal de Triagem Aberto pelos Botões CTA */}
      {triageModalOpen && (
        <ConsultationTriage
          isModal={true}
          onClose={() => setTriageModalOpen(false)}
        />
      )}
    </div>
  );
}
