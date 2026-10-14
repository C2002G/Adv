import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PARTNERS_CONTENT, FIRM_INFO } from '../data/lawFirmConfig';

export function PartnersSection() {
  const handlePartnerWhatsApp = (partnerName: string) => {
    const msg = `Olá! Gostaria de agendar uma reunião diretamente com o(a) ${partnerName} da Valença & Castro.`;
    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="socios" className="py-20 lg:py-32 bg-[#0b0c10] border-b border-[#1c1f2b] relative">
      {/* 
        ========================================================================
        👥 CORPO JURÍDICO & SÓCIOS SENIORES
        ========================================================================
        💡 PROGRAMADOR: Para alterar as fotos, nomes, OAB e títulos dos sócios,
        edite `PARTNERS_CONTENT` no arquivo: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-3">
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
            <span>LIDERANÇA & REPUTAÇÃO</span>
            <span className="w-6 h-[1.5px] bg-[#c5a880]" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tracking-tight">
            Liderança direta em cada tese e processo.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#8f96a8] leading-relaxed">
            Advogados com formação nas mais prestigiadas academias jurídicas do Brasil e do exterior, combinando tradição doutrinária com visão empresarial arrojada.
          </p>
        </div>

        {/* Grid dos Sócios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {PARTNERS_CONTENT.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#11131b] border border-[#232737] hover:border-[#c5a880]/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
            >
              {/* Foto do Sócio com Efeito de Zoom Suave */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#181a24]">
                <img
                  src={partner.photo}
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: partner.photoPosition }}
                  className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.04] group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131b] via-[#11131b]/30 to-transparent" />
                
                {/* OAB Badge Discreta */}
                <div className="absolute top-4 left-4 bg-[#0e1017]/90 backdrop-blur-md border border-[#2e3244] px-3 py-1 rounded text-[11px] font-mono text-[#dec388] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{partner.oab}</span>
                </div>
              </div>

              {/* Informações Textuais */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfbf7] group-hover:text-[#dec388] transition-colors">
                    {partner.name}
                  </h3>
                  
                  <div className="mt-1 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                    {partner.role}
                  </div>

                  <div className="mt-4 text-xs font-serif-editorial italic text-[#9ba1b4] pb-4 border-b border-[#1c202d]">
                    {partner.degrees}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#8d94a6] leading-relaxed">
                    {partner.bio}
                  </p>
                </div>

                {/* Ações e Contatos com o Sócio */}
                <div className="mt-8 pt-5 border-t border-[#1c202d] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${partner.contactEmail}`}
                      className="p-2 text-[#7f869c] hover:text-[#dec388] bg-[#181a24] hover:bg-[#1f2230] rounded transition-colors"
                      title="Enviar e-mail para o sócio"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#7f869c] hover:text-[#dec388] bg-[#181a24] hover:bg-[#1f2230] rounded transition-colors"
                      title="Perfil no LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => handlePartnerWhatsApp(partner.name)}
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#dec388] hover:text-white transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>Falar com o Sócio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
