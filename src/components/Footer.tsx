import { MapPin, Phone, Mail, Clock, ArrowUpRight, Shield } from 'lucide-react';
import { FIRM_INFO, OAB_DISCLAIMER } from '../data/lawFirmConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090c] border-t border-[#1a1d26] text-[#959caa] text-xs">
      {/* 
        ========================================================================
        🏛️ RODAPÉ INSTITUCIONAL & CONFORMIDADE OAB
        ========================================================================
        💡 PROGRAMADOR: Os contatos, endereço e número da OAB são puxados de
        `FIRM_INFO` em: `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Coluna 1: Marca & Registro */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-display text-2xl font-bold text-[#fcfbf7] tracking-tight">
                {FIRM_INFO.name.toUpperCase()}
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#a78858] font-medium mt-0.5">
                ADVOCACIA ESTRATÉGICA
              </div>
              <p className="mt-4 text-xs text-[#828899] max-w-sm leading-relaxed">
                {FIRM_INFO.fullName}. Assessoria jurídica empresarial, contencioso de alta complexidade e planejamento sucessório e patrimonial.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#171922] flex items-center gap-2 text-[#b0b6c6]">
              <Shield className="w-4 h-4 text-[#dec388] shrink-0" />
              <span className="font-mono text-[11px]">{FIRM_INFO.oabRegistration}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#dec388] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-[#dec388] transition-colors">O Escritório</a>
              </li>
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#dec388] transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#socios" className="hover:text-[#dec388] transition-colors">Sócios Seniores</a>
              </li>
              <li>
                <a href="#casos-de-sucesso" className="hover:text-[#dec388] transition-colors">Precedentes & Casos</a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#dec388] transition-colors">Diagnóstico Jurídico</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#dec388] transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Endereço & Atendimento */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-[#dec388] font-semibold mb-4">
              Sede e Atendimento
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dec388] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#e1e4ec]">{FIRM_INFO.address.street}</div>
                  <div>{FIRM_INFO.address.suite}</div>
                  <div>{FIRM_INFO.address.city} · CEP {FIRM_INFO.address.cep}</div>
                  <a
                    href={FIRM_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#dec388] hover:underline mt-1 text-[11px]"
                  >
                    <span>Ver no Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#dec388] shrink-0" />
                <span className="text-[#e1e4ec]">{FIRM_INFO.phoneFormatted}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#dec388] shrink-0" />
                <span className="text-[#e1e4ec]">{FIRM_INFO.emailContact}</span>
              </li>

              <li className="flex items-center gap-2.5 text-[#7c8396]">
                <Clock className="w-4 h-4 text-[#dec388] shrink-0" />
                <span>{FIRM_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Aviso de Conformidade OAB */}
        <div className="mt-12 pt-8 border-t border-[#171922] text-[#636879] text-[11px] leading-relaxed">
          <p>{OAB_DISCLAIMER}</p>
        </div>

        {/* Linha Final de Copyright */}
        <div className="mt-6 pt-6 border-t border-[#13151c] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#636879]">
          <div>
            © {currentYear} {FIRM_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#8e95aa]">Template profissional para advocacia de alto padrão</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
