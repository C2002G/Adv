import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/lawFirmConfig';

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0b0c10] border-b border-[#1c1f2b]">
      {/* 
        ========================================================================
        💬 DEPOIMENTOS DE CLIENTES CORPORATIVOS
        ========================================================================
        💡 PROGRAMADOR: Para alterar os depoimentos, edite `TESTIMONIALS` no
        arquivo: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-3">
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
            <span>CONFIANÇA INSTITUCIONAL</span>
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tracking-tight">
            A opinião de quem confiou o futuro da sua empresa à nossa banca.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#12141c] border border-[#232737] hover:border-[#c5a880]/30 rounded-sm p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl text-[#dec388]/40 leading-none select-none block mb-2">
                  “
                </span>
                <p className="text-xs sm:text-sm text-[#b8bece] font-serif-editorial italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1e212f]">
                <div className="font-display text-sm font-bold text-[#fcfbf7]">
                  {t.author}
                </div>
                <div className="text-xs text-[#c5a880] font-medium">
                  {t.role} · {t.company}
                </div>
                <div className="text-[11px] text-[#71778c]">
                  {t.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
