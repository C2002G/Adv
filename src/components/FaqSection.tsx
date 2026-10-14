import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CONTENT } from '../data/lawFirmConfig';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0e1017] border-b border-[#1c1f2b]">
      {/* 
        ========================================================================
        ❓ PERGUNTAS FREQUENTES (FAQ JURÍDICO)
        ========================================================================
        💡 PROGRAMADOR: Para alterar as perguntas e respostas, edite
        `FAQ_CONTENT` no arquivo: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-3">
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
            <span>TRANSPARÊNCIA & ORIENTAÇÃO</span>
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#8f96a8]">
            Entenda como funciona nossa metodologia de atendimento e contratação.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_CONTENT.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#12141c] border border-[#232737] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#161822] transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#fcfbf7] tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#dec388] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-xs sm:text-sm text-[#a2a8ba] leading-relaxed border-t border-[#1a1d28] mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
