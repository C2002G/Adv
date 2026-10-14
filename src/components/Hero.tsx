import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MessageSquare, Play, Pause, ChevronDown, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT, FIRM_INFO } from '../data/lawFirmConfig';

interface HeroProps {
  onOpenTriage: () => void;
}

export function Hero({ onOpenTriage }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  // Parallax scroll controls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(FIRM_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-[#21242e] bg-[#0b0c10]"
    >
      {/* 
        ========================================================================
        🎬 CAMADA DE VÍDEO & FOTO DE FUNDO (COM PARALLAX SCROLLTRIGGER)
        ========================================================================
        💡 PROGRAMADOR: O link do vídeo e a foto estão em src/data/lawFirmConfig.ts
        no objeto `HERO_CONTENT`. Você pode trocar para um vídeo corporativo
        do seu cliente advogado.
      */}
      <motion.div
        style={{ y: mediaY, scale: mediaScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none"
      >
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_CONTENT.posterImage}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] saturate-[0.85]"
          >
            <source src={HERO_CONTENT.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_CONTENT.posterImage}
            alt="Escritório de Advocacia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08]"
          />
        )}

        {/* Scrim medido e gradientes para contraste e sofisticação */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-[#0b0c10]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0b0c10]/50 to-[#0b0c10]" />
      </motion.div>

      {/* Controle discreto do vídeo no canto inferior */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-3 bg-[#111217]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2b2e3b] text-xs text-[#a0a5b5]">
        <button
          onClick={toggleVideoPlayback}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#dec388]" /> : <Play className="w-3.5 h-3.5 text-[#dec388]" />}
          <span className="text-[11px] font-mono tracking-wide">{isPlaying ? "Vídeo Ativo" : "Pausado"}</span>
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL DO HERO */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center"
      >
        {/* Eyebrow Institucional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#dec388]"
        >
          <span className="w-8 h-[1px] bg-[#c5a880]/60" />
          <span>{HERO_CONTENT.eyebrow}</span>
          <span className="w-8 h-[1px] bg-[#c5a880]/60" />
        </motion.div>

        {/* Título Principal com Typographic Restraint */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.12] font-bold text-[#fcfbf7] tracking-tight max-w-4xl text-balance"
        >
          {HERO_CONTENT.titleMain}{' '}
          <span className="text-gold-gradient font-extrabold block sm:inline">
            {HERO_CONTENT.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtítulo Claro e Sem AI Buzzwords */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#b4bac9] font-normal leading-relaxed max-w-2xl text-balance"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* CTAs de Conversão Rápida */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* CTA Primário - WhatsApp Direto com Sócio */}
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0b0c10] bg-gradient-to-r from-[#dec388] via-[#d0ab5f] to-[#c5a880] hover:from-[#ebdcb9] hover:to-[#dec388] rounded transition-all duration-200 shadow-[0_4px_24px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_30px_rgba(197,168,128,0.4)] active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{HERO_CONTENT.ctaPrimary.text}</span>
          </button>

          {/* CTA Secundário - Diagnóstico Interativo */}
          <button
            onClick={onOpenTriage}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f5f0e3] bg-[#14161f]/80 hover:bg-[#1a1d29] border border-[#c5a880]/30 hover:border-[#c5a880]/70 rounded transition-all duration-200 cursor-pointer"
          >
            <span>Diagnóstico Preliminar</span>
            <ArrowRight className="w-4 h-4 text-[#dec388]" />
          </button>
        </motion.div>

        {/* Trust Badges Quietos (Sem badges de pílula chamativas) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#989eb2]"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Sigilo Absoluto Garantido (NDA)</span>
          </div>
          <span className="hidden sm:inline text-[#353949]">·</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Atuação em Todo o Território Nacional</span>
          </div>
          <span className="hidden sm:inline text-[#353949]">·</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Resposta em até 2 Horas Úteis</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de rolagem suave para baixo */}
      <a
        href="#estatisticas"
        className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#8b91a5] hover:text-[#dec388] transition-colors"
      >
        <span>Rolar para explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a880]" />
      </a>
    </section>
  );
}
