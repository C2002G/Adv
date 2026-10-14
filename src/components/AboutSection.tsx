import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, FIRM_INFO } from '../data/lawFirmConfig';

interface AboutSectionProps {
  onOpenTriage: () => void;
}

export function AboutSection({ onOpenTriage }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax displacement on the media cards
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const photo1Y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const photo2Y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#0b0c10] border-b border-[#1c1f2b] overflow-hidden"
    >
      {/* 
        ========================================================================
        🏛️ SEÇÃO SOBRE / POSICIONAMENTO ESTRATÉGICO COM PARALLAX
        ========================================================================
        💡 PROGRAMADOR: Para alterar as fotos ou textos da história do escritório,
        edite `ABOUT_CONTENT` em: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto Editorial & Pilares */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-4">
              <span className="w-6 h-[1.5px] bg-[#c5a880]" />
              <span>{ABOUT_CONTENT.tag}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] leading-[1.18] tracking-tight">
              {ABOUT_CONTENT.heading}
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#b4bac9] leading-relaxed">
              <p>{ABOUT_CONTENT.leadParagraph}</p>
              <p>{ABOUT_CONTENT.secondaryParagraph}</p>
            </div>

            {/* Pilares Institucionais */}
            <div className="mt-8 pt-8 border-t border-[#1f222d] space-y-6">
              {ABOUT_CONTENT.pillars.map((pillar) => (
                <div key={pillar.number} className="flex gap-4 group">
                  <span className="font-display text-lg font-bold text-[#c5a880] shrink-0 pt-0.5">
                    {pillar.number}.
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#f1f3f7] group-hover:text-[#dec388] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#8f96a8] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenTriage}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0b0c10] bg-[#dec388] hover:bg-[#ebdcb9] rounded transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Solicitar Avaliação de Caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Coluna Direita: Composição Fotográfica com Parallax */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Foto Principal com Parallax */}
              <motion.div
                style={{ y: photo1Y }}
                className="relative z-10 rounded-sm overflow-hidden border border-[#2c303f] shadow-2xl bg-[#14161f]"
              >
                <img
                  src={ABOUT_CONTENT.primaryImage}
                  alt="Estratégia Jurídica Corporativa"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-[0.92] contrast-[1.05] hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#d1d5db] font-serif-editorial italic">
                  Reunião de alinhamento estratégico com o comitê deliberativo
                </div>
              </motion.div>

              {/* Foto Secundária Flutuante com Parallax Invertido */}
              <motion.div
                style={{ y: photo2Y }}
                className="hidden sm:block absolute -bottom-10 -right-6 z-20 w-3/5 rounded-sm overflow-hidden border-2 border-[#373a4d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#111217]"
              >
                <img
                  src={ABOUT_CONTENT.boardroomImage}
                  alt="Conselho do Escritório"
                  referrerPolicy="no-referrer"
                  className="w-full h-[220px] object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 to-transparent pointer-events-none" />
              </motion.div>

              {/* Selo de Fundação e Tradição */}
              <div className="absolute -top-6 -left-4 z-30 bg-[#161822] border border-[#c5a880]/40 p-4 rounded-sm shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#dec388]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9ba1b4]">Desde {FIRM_INFO.foundationYear}</div>
                  <div className="text-xs font-bold text-[#fcfbf7] font-display">Excelência & Tradição</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
