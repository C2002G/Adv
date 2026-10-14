import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PARALLAX_BREAK_CONTENT } from '../data/lawFirmConfig';

export function ParallaxQuoteVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden border-y border-[#232736] bg-[#0b0c10]"
    >
      {/* 
        ========================================================================
        🎥 SEÇÃO PARALLAX COM VÍDEO CINEMATOGRÁFICO DE INTERRUPÇÃO
        ========================================================================
        💡 PROGRAMADOR: Para trocar este vídeo ou a frase de impacto, edite
        `PARALLAX_BREAK_CONTENT` no arquivo: `src/data/lawFirmConfig.ts`.
      */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0 pointer-events-none"
      >
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={PARALLAX_BREAK_CONTENT.posterImage}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
          >
            <source src={PARALLAX_BREAK_CONTENT.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={PARALLAX_BREAK_CONTENT.posterImage}
            alt="Ambiente Jurídico"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
          />
        )}

        {/* Gradientes e scrim para alta legibilidade */}
        <div className="absolute inset-0 bg-[#0b0c10]/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10]" />
      </motion.div>

      {/* Conteúdo da Citação */}
      <motion.div
        style={{ scale: textScale }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center"
      >
        <span className="font-serif text-5xl sm:text-6xl text-[#dec388]/40 leading-none select-none">
          “
        </span>
        <blockquote className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#f5f0e3] italic font-normal leading-relaxed text-balance -mt-4">
          {PARALLAX_BREAK_CONTENT.quote}
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#c5a880]/60" />
          <cite className="font-display text-xs sm:text-sm uppercase tracking-[0.2em] text-[#dec388] not-italic font-semibold">
            {PARALLAX_BREAK_CONTENT.author}
          </cite>
          <span className="w-8 h-[1px] bg-[#c5a880]/60" />
        </div>
      </motion.div>
    </section>
  );
}
