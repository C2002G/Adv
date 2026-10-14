import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Shield } from 'lucide-react';
import { FIRM_INFO } from '../data/lawFirmConfig';

interface NavbarProps {
  onOpenTriage: () => void;
}

export function Navbar({ onOpenTriage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "O Escritório", href: "#sobre" },
    { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
    { label: "Sócios", href: "#socios" },
    { label: "Casos & Resultados", href: "#casos-de-sucesso" },
    { label: "Dúvidas Frequentes", href: "#faq" },
  ];

  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(FIRM_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <>
      {/* Top Banner informativo e discreto */}
      <div className="bg-[#12141a] border-b border-[#262833] text-xs text-[#a0a5b5] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-medium tracking-wide text-[#d1d5db]">
              {FIRM_INFO.oabRegistration}
            </span>
            <span className="hidden md:inline text-[#4a5061]">·</span>
            <span className="hidden md:inline">{FIRM_INFO.address.city}</span>
          </div>
          
          <div className="flex items-center gap-4 text-[#8d93a5]">
            <span>{FIRM_INFO.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Header Principal - Top Bar Contract: 3 zonas */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#222530] shadow-2xl py-3.5'
            : 'bg-[#0b0c10]/80 backdrop-blur-sm border-b border-[#1c1f2b] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zona 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#f3f4f6] group-hover:text-[#dec388] transition-colors">
              {FIRM_INFO.name.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a78858] font-medium -mt-0.5">
              ADVOCACIA ESTRATÉGICA
            </span>
          </a>

          {/* Zona 2: Nav Links desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c0c5d2]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#dec388] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a880] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação Primária & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b0c10] bg-gradient-to-r from-[#dec388] to-[#c5a880] hover:from-[#ebdcb9] hover:to-[#dec388] rounded transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d1d5db] hover:text-[#fff] hover:bg-[#1c1f2b] rounded transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0b0c10]/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 border-b border-[#252834] animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#1f222d]">
            <span className="font-display text-xl font-bold text-[#f3f4f6]">
              {FIRM_INFO.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#9ca3af] hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8 text-lg font-medium text-[#d1d5db]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#dec388] transition-colors py-2 border-b border-[#181a23]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0b0c10] bg-[#dec388] hover:bg-[#ebdcb9] rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTriage();
              }}
              className="w-full py-3 text-xs uppercase tracking-wider text-[#dec388] border border-[#c5a880]/30 rounded hover:bg-[#c5a880]/10 transition-colors"
            >
              Diagnóstico Jurídico Rápido
            </button>
          </div>
        </div>
      )}
    </>
  );
}
