import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Briefcase, 
  Shield, 
  Building2, 
  Users, 
  FileCheck, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea, FIRM_INFO } from '../data/lawFirmConfig';

export function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-[#dec388]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#dec388]" />;
      case 'Shield': return <Shield className="w-6 h-6 text-[#dec388]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#dec388]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#dec388]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#dec388]" />;
      default: return <Scale className="w-6 h-6 text-[#dec388]" />;
    }
  };

  const handleConsultArea = (area: PracticeArea) => {
    const msg = `Olá! Tenho uma demanda na área de *${area.title}* e gostaria de agendar uma consulta com o advogado especialista da Valença & Castro.`;
    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="areas-de-atuacao" className="py-20 lg:py-32 bg-[#0e1017] border-b border-[#1c1f2b] relative">
      {/* 
        ========================================================================
        ⚖️ ÁREAS DE ATUAÇÃO JURÍDICA
        ========================================================================
        💡 PROGRAMADOR: Para adicionar, remover ou editar ramos do direito,
        vá em `PRACTICE_AREAS` no arquivo: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#212430]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-3">
              <span className="w-6 h-[1.5px] bg-[#c5a880]" />
              <span>ESPECIALIDADES CORPORATIVAS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tracking-tight max-w-2xl">
              Atuação cirúrgica nos ramos mais críticos do direito.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8f96a8] max-w-md leading-relaxed">
            Nossa equipe é dividida em núcleos de alta especialização, garantindo teses jurídicas fundamentadas na jurisprudência mais recente.
          </p>
        </div>

        {/* Grid de Áreas de Atuação */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedArea(area)}
              className="group relative bg-[#13151e] border border-[#232635] hover:border-[#c5a880]/50 rounded-sm p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded bg-[#1b1e2a] border border-[#2b2f42] flex items-center justify-center group-hover:border-[#c5a880]/40 transition-colors">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="text-[#646b80] group-hover:text-[#dec388] transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#fcfbf7] group-hover:text-[#dec388] transition-colors leading-snug">
                  {area.title}
                </h3>

                <p className="mt-1 text-xs text-[#c5a880] font-medium">
                  {area.subtitle}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[#8f96a8] line-clamp-3 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1d202d] flex items-center justify-between text-xs">
                <span className="text-[#a0a5b8] font-mono tracking-tight font-medium">
                  {area.highlightStat}
                </span>
                <span className="text-[#dec388] group-hover:underline font-semibold tracking-wide uppercase text-[11px]">
                  Ver detalhes
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal / Drawer com Detalhes da Área Selecionada */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b0c10]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#12141c] border border-[#303445] shadow-2xl rounded-sm p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-5 right-5 p-2 text-[#8b91a3] hover:text-white transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-[#1b1e2a] border border-[#2b2f42] flex items-center justify-center">
                  {getIcon(selectedArea.iconName)}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#dec388] font-semibold">
                    {selectedArea.subtitle}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfbf7]">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#b4bac9] leading-relaxed">
                {selectedArea.description}
              </p>

              {/* Lista de Entregas & Serviços */}
              <div className="mt-6 pt-6 border-t border-[#202330]">
                <h4 className="text-xs uppercase tracking-wider text-[#dec388] font-semibold mb-4">
                  Escopo de Atuação e Serviços Principais:
                </h4>
                <div className="space-y-3">
                  {selectedArea.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#d1d5db]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Ação Direta */}
              <div className="mt-8 pt-6 border-t border-[#202330] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#8f96a8]">
                  <span className="font-medium text-[#f3f4f6]">Resultado do núcleo: </span>
                  {selectedArea.highlightStat}
                </div>
                
                <button
                  onClick={() => handleConsultArea(selectedArea)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b0c10] bg-[#dec388] hover:bg-[#ebdcb9] rounded transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Advogado Desta Área</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
