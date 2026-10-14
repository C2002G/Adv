Arquivo Central de Configuração:
src/data/lawFirmConfig.ts

Copiar Caminho
1. Como trocar o WhatsApp e dados do cliente:
Abra src/data/lawFirmConfig.ts e edite o objeto FIRM_INFO:

export const FIRM_INFO = {
  name: "Nome do Escritório",
  whatsappNumber: "5511999999999", // DDI + DDD + Celular do advogado
  whatsappDefaultMessage: "Olá! Gostaria de agendar uma consulta...",
  oabRegistration: "OAB/SP nº 00.000",
  // ...
};
2. Como trocar o vídeo de fundo (Hero e Parallax):
Você pode usar qualquer link MP4 de alta velocidade ou colocar seu arquivo de vídeo na pasta src/assets/videos/ e alterar em HERO_CONTENT.videoUrl e PARALLAX_BREAK_CONTENT.videoUrl:

export const HERO_CONTENT = {
  videoUrl: "https://seu-cdn-ou-servidor.com/video-institucional.mp4",
  posterImage: "/src/assets/images/foto_escritorio.jpg",
  // ...
};
3. Como colocar as fotos reais dos advogados:
Basta salvar as fotos dos sócios em src/assets/images/ e indicar o caminho na propriedade photo do sócio correspondente em PARTNERS_CONTENT.

export const PARTNERS_CONTENT = [
  {
    name: "Dr. Nome do Advogado",
    role: "Sócio Titular de Direito Tributário",
    oab: "OAB/SP 123.456",
    photo: "/src/assets/images/foto_rodrigo.jpg", // 👈 COLOQUE AQUI A FOTO
    // ...
  }
];
4. Animações e ScrollTrigger:
Todas as animações de scroll e parallax usam motion/react com propriedades do compositor (y, opacity, scale) para desempenho perfeito de 60 FPS tanto em celulares quanto em monitores 4K.

5. Como trocar o vídeo do banner de Casos de Sucesso:
No arquivo src/data/lawFirmConfig.ts, altere o objeto CASE_STUDIES_HEADER_MEDIA:

export const CASE_STUDIES_HEADER_MEDIA = {
  videoUrl: "https://seu-cdn-ou-servidor.com/video-contratos.mp4",
  posterImage: "/src/assets/images/law_firm_court_strategy.jpg"
};