import { useState } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES, CASE_STUDIES_HEADER_MEDIA } from '../data/lawFirmConfig';

export function CaseStudiesSection() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="casos-de-sucesso" className="py-20 lg:py-32 bg-[#0e1017] border-b border-[#1c1f2b]">
      {/* 
        ========================================================================
        🏆 CASOS DE SUCESSO & JURISPRUDÊNCIA RELEVANTE
        ========================================================================
        💡 PROGRAMADOR: Para alterar os casos de sucesso ou valores defendidos,
        edite `CASE_STUDIES` e `CASE_STUDIES_HEADER_MEDIA` no arquivo:
        `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Banner de Cabeçalho com Vídeo de Fundo e Alta Legibilidade */}
        <div className="relative overflow-hidden rounded-sm border border-[#2b2f42] bg-[#0c0e15] p-8 sm:p-12 lg:p-14 mb-14 shadow-2xl">
          {/* Vídeo de fundo temático com foco em contratos corporativos */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {!videoFailed ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={CASE_STUDIES_HEADER_MEDIA.posterImage}
                onError={() => setVideoFailed(true)}
                className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-[1.18] saturate-[0.75]"
              >
                <source src={CASE_STUDIES_HEADER_MEDIA.videoUrl} type="video/mp4" />
              </video>
            ) : (
              <img
                src={CASE_STUDIES_HEADER_MEDIA.posterImage}
                alt="Precedentes Jurídicos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-[1.18]"
              />
            )}
            
            {/* Scrims de proteção visual: garantem que as letras tenham leitura 100% nítida e confortável */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/90 to-[#0b0c10]/75" />
            <div className="absolute inset-0 bg-[#0b0c10]/35 backdrop-blur-[1px]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Conteúdo em primeiro plano com contraste e hierarquia impecáveis */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#dec388] mb-3">
                <span className="w-6 h-[1.5px] bg-[#c5a880]" />
                <span>PRECEDENTES & RESULTADOS COMPROVADOS</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tracking-tight max-w-2xl text-balance">
                Estratégias que transformaram litígios de alto risco em vitórias.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-[#cbd1df] leading-relaxed">
                Casos emblemáticos conduzidos por nossa equipe, resguardando o sigilo contratual e destacando a tese jurídica vitoriosa.
              </p>
              <div className="mt-3.5 flex items-center gap-2 text-[11px] text-[#dec388] font-mono tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dec388]" />
                <span>Precedentes perante STJ, STF e Tribunais Regionais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de Casos de Sucesso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.clientIndustry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#12141c] border border-[#232737] hover:border-[#c5a880]/40 rounded-sm p-7 flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#dec388] mb-3">
                  {study.tag}
                </div>

                <h3 className="font-display text-lg font-bold text-[#fcfbf7] mb-4">
                  {study.clientIndustry}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#6d7488] font-medium block uppercase text-[10px] tracking-wider mb-1">
                      Desafio Inicial:
                    </span>
                    <p className="text-[#9ea4b6] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-[#6d7488] font-medium block uppercase text-[10px] tracking-wider mb-1">
                      Estratégia Jurídica Adotada:
                    </span>
                    <p className="text-[#9ea4b6] leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1d202d] bg-[#161823] -mx-7 -mb-7 p-6 rounded-b-sm border-t-[#252838]">
                <span className="text-[#dec388] font-semibold block uppercase text-[10px] tracking-wider mb-1">
                  Resultado Conquistado:
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#fcfbf7] leading-relaxed">
                  {study.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
