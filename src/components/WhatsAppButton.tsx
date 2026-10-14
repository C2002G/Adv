import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { FIRM_INFO } from '../data/lawFirmConfig';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const encoded = encodeURIComponent(FIRM_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip discreto */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-[#12141c] border border-[#c5a880]/30 px-3 py-1.5 rounded-full shadow-2xl text-xs text-[#f1f3f7] animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
          <span>Plantão Jurídico: Atendimento com Sócio</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#7f869c] hover:text-white p-0.5 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Botão de WhatsApp */}
      <button
        onClick={handleClick}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1b8755] to-[#25d366] hover:from-[#1eb86a] hover:to-[#2ee073] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Falar no WhatsApp"
        title="Falar diretamente com um advogado sócio no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
      </button>
    </div>
  );
}
