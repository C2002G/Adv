import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ArrowRight, ArrowLeft, MessageSquare, Check, X, Building, AlertCircle } from 'lucide-react';
import { TRIAGE_CONFIG, FIRM_INFO } from '../data/lawFirmConfig';

interface ConsultationTriageProps {
  isModal?: boolean;
  onClose?: () => void;
}

export function ConsultationTriage({ isModal = false, onClose }: ConsultationTriageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submittedForm, setSubmittedForm] = useState(false);

  const handleSelectOption = (option: string) => {
    const stepKey = TRIAGE_CONFIG.steps[currentStep].id;
    setAnswers(prev => ({ ...prev, [stepKey]: option }));
    if (currentStep < TRIAGE_CONFIG.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(TRIAGE_CONFIG.steps.length); // Final step
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setSubmittedForm(false);
  };

  const sendToWhatsApp = () => {
    const formatted = `Olá! Realizei o Diagnóstico Jurídico Preliminar no site:
• *Perfil:* ${answers.perfil || 'Não informado'}
• *Área:* ${answers.area || 'Não informado'}
• *Urgência:* ${answers.urgencia || 'Não informado'}
${name ? `• *Nome/Empresa:* ${name}` : ''}
${details ? `• *Breve resumo:* ${details}` : ''}

Gostaria de falar com o sócio responsável para agendar uma consulta.`;

    window.open(`https://wa.me/${FIRM_INFO.whatsappNumber}?text=${encodeURIComponent(formatted)}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmittedForm(true);
  };

  const content = (
    <div className={`relative ${isModal ? 'bg-[#12141c] p-6 sm:p-8 rounded-sm border border-[#2b2f40] shadow-2xl max-w-2xl w-full mx-auto' : 'bg-[#13151f] border border-[#232737] rounded-sm p-8 sm:p-12'}`}>
      
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7f869c] hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Cabeçalho */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dec388] mb-2">
          <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>TRIAGEM CONFIDENCIAL</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfbf7]">
          {TRIAGE_CONFIG.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#8c92a5]">
          {TRIAGE_CONFIG.subtitle}
        </p>

        {/* Barra de Progresso */}
        <div className="mt-5 w-full bg-[#1e212d] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#dec388] to-[#c5a880] h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / (TRIAGE_CONFIG.steps.length + 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Conteúdo dos Passos */}
      {currentStep < TRIAGE_CONFIG.steps.length ? (
        <div>
          <div className="text-xs uppercase tracking-wider text-[#7e8599] font-medium mb-1">
            Etapa {currentStep + 1} de {TRIAGE_CONFIG.steps.length}
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-[#f1f3f7] mb-6">
            {TRIAGE_CONFIG.steps[currentStep].question}
          </h4>

          <div className="space-y-3">
            {TRIAGE_CONFIG.steps[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-4 rounded-sm border transition-all duration-200 flex items-center justify-between text-xs sm:text-sm ${
                  answers[TRIAGE_CONFIG.steps[currentStep].id] === option
                    ? 'bg-[#1b1e2c] border-[#dec388] text-[#fcfbf7]'
                    : 'bg-[#171a25] border-[#252837] hover:border-[#c5a880]/50 text-[#cfd3df]'
                }`}
              >
                <span>{option}</span>
                <ArrowRight className="w-4 h-4 text-[#dec388] shrink-0 ml-2" />
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <div className="mt-6 flex justify-start">
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-xs text-[#8f96a8] hover:text-[#dec388] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar etapa</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Etapa Final: Resultado e Contato */
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {!submittedForm ? (
            <div>
              <div className="bg-[#171a25] border border-[#2b2f42] p-5 rounded-sm mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#dec388] mb-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#dec388]" />
                  <span>Resumo do Diagnóstico Gerado</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#a0a5b8]">
                  <div><strong className="text-[#e2e5ef]">Perfil:</strong> {answers.perfil}</div>
                  <div><strong className="text-[#e2e5ef]">Área:</strong> {answers.area}</div>
                  <div><strong className="text-[#e2e5ef]">Urgência:</strong> {answers.urgencia}</div>
                </div>
              </div>

              {/* Botão de Envio Imediato via WhatsApp */}
              <button
                onClick={sendToWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0b0c10] bg-[#dec388] hover:bg-[#ebdcb9] rounded transition-colors shadow-lg cursor-pointer mb-6"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Caso Diretamente no WhatsApp do Sócio</span>
              </button>

              <div className="relative flex items-center justify-center my-6">
                <span className="absolute inset-x-0 h-[1px] bg-[#222533]" />
                <span className="relative bg-[#13151f] px-3 text-[11px] uppercase tracking-wider text-[#63697e]">
                  ou preencha para contato formal
                </span>
              </div>

              {/* Formulário Tradicional com Validação */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8f96a8] mb-1.5">
                      Nome Completo / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Roberto Silva (Diretor)"
                      className="w-full bg-[#171a25] border border-[#282b3a] focus:border-[#c5a880] focus:outline-none px-3.5 py-2.5 rounded text-xs sm:text-sm text-[#f1f3f7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8f96a8] mb-1.5">
                      WhatsApp ou Celular *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#171a25] border border-[#282b3a] focus:border-[#c5a880] focus:outline-none px-3.5 py-2.5 rounded text-xs sm:text-sm text-[#f1f3f7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8f96a8] mb-1.5">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contato@suaempresa.com.br"
                    className="w-full bg-[#171a25] border border-[#282b3a] focus:border-[#c5a880] focus:outline-none px-3.5 py-2.5 rounded text-xs sm:text-sm text-[#f1f3f7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8f96a8] mb-1.5">
                    Breve resumo da demanda (Opcional & Confidencial)
                  </label>
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva brevemente o problema, valores envolvidos ou datas limites..."
                    className="w-full bg-[#171a25] border border-[#282b3a] focus:border-[#c5a880] focus:outline-none px-3.5 py-2.5 rounded text-xs sm:text-sm text-[#f1f3f7]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-[#747b8f] hover:text-[#c5a880] transition-colors"
                  >
                    Refazer diagnóstico
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#dec388] border border-[#c5a880]/40 hover:bg-[#c5a880]/15 rounded transition-colors"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-[#dec388]" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#fcfbf7]">
                Solicitação Recebida com Sucesso
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#a2a8b9] max-w-md mx-auto leading-relaxed">
                Nossos sócios seniores receberam as informações e entrarão em contato confidencial pelo número informado em até 2 horas úteis.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={sendToWhatsApp}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b0c10] bg-[#dec388] rounded"
                >
                  Falar agora pelo WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs text-[#a0a5b8] hover:text-white"
                >
                  Nova Consulta
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Nota de Sigilo OAB */}
      <div className="mt-6 pt-4 border-t border-[#1e212d] flex items-center gap-2 text-[11px] text-[#6e7488]">
        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#c5a880]" />
        <span>Garantia de sigilo profissional OAB e conformidade com a LGPD.</span>
      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0c10]/85 backdrop-blur-md overflow-y-auto">
        {content}
      </div>
    );
  }

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-[#0b0c10] border-b border-[#1c1f2b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {content}
      </div>
    </section>
  );
}
