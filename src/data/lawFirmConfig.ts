/**
 * ==============================================================================================
 * 📌 GUIA DE CUSTOMIZAÇÃO PARA O PROGRAMADOR (COMO EDITAR ESTE SITE PARA SEUS CLIENTES)
 * ==============================================================================================
 * 
 * Caro programador,
 * Este arquivo foi planejado para que você tenha TOTAL AUTONOMIA para alterar qualquer conteúdo,
 * foto, vídeo, dados de contato e áreas jurídicas em menos de 5 minutos antes de entregar
 * para o seu cliente advogado.
 * 
 * 🔍 ONDE ALTERAR O QUE:
 * 1. DADOS DO ESCRITÓRIO E WHATSAPP:
 *    -> Vá em `FIRM_INFO` logo abaixo. Altere nome, telefone, número de WhatsApp e OAB.
 * 
 * 2. VÍDEO E FOTOS DO HERO (TOPO):
 *    -> Vá em `HERO_CONTENT`. Você pode trocar o `videoUrl` por um link MP4 ou arquivo local
 *       em `/src/assets/videos/...` e o `posterImage` pela foto de capa.
 * 
 * 3. FOTOS DOS SÓCIOS E ADVOGADOS:
 *    -> Vá em `PARTNERS_CONTENT`. Troque a propriedade `photo` de cada sócio pelo caminho da foto.
 * 
 * 4. NÚMEROS E ESTATÍSTICAS:
 *    -> Vá em `STATS_CONTENT`. Mude valores como valor recuperado, anos de atuação, etc.
 * 
 * 5. ÁREAS DE ATUAÇÃO JURÍDICA:
 *    -> Vá em `PRACTICE_AREAS`. Adicione ou remova ramos do direito (Tributário, Trabalhista, etc.).
 * 
 * 6. CASOS DE SUCESSO / JURISPRUDÊNCIA:
 *    -> Vá em `CASE_STUDIES`.
 * 
 * 7. FAQ (PERGUNTAS FREQUENTES):
 *    -> Vá em `FAQ_CONTENT`.
 * ==============================================================================================
 */

import heroLawOfficeImage from '../assets/images/hero_law_office_1791926157858.jpg';
import lawFirmCourtStrategyImage from '../assets/images/law_firm_court_strategy_1791926159931.jpg';
import managingPartnerFemaleImage from '../assets/images/managing_partner_female_1791926159592.jpg';
import seniorPartnerLawyerImage from '../assets/images/senior_partner_lawyer_1791926159516.jpg';

// ----------------------------------------------------------------------------------------------
// 1. INFORMAÇÕES GERAIS, CONTATOS E COMPLIANCE OAB
// ----------------------------------------------------------------------------------------------
export const FIRM_INFO = {
  name: "Valença & Castro",
  fullName: "Valença, Castro & Associados Advocacia Estratégica",
  tagline: "Advocacia de Alta Performance & Soluções Jurídicas Corporativas",
  oabRegistration: "OAB/SP nº 48.912 | Registro de Sociedade nº 12.840",
  foundationYear: 2002,
  
  // 📲 CONTATO RÁPIDO (WhatsApp com mensagem pronta de conversão)
  whatsappNumber: "5511998765432", // Formato internacional: DDI + DDD + Número (ex: 5511998765432)
  whatsappDefaultMessage: "Olá! Gostaria de agendar uma consulta estratégica com um advogado especialista da Valença & Castro.",
  phoneFormatted: "+55 (11) 3280-9400",
  emailContact: "atendimento@valencacastro.adv.br",
  
  // 📍 LOCALIZAÇÃO FÍSICA
  address: {
    street: "Av. Salvador França, 1234",
    suite: "18º andar - Itaim Bibi",
    city: "Porto Alegre - RS",
    cep: "04538-133",
    googleMapsUrl: "https://maps.app.goo.gl/FfpAq5booTVQNvmc7"
  },
  
  workingHours: "Segunda a Sexta, das 09h às 19h",
  
  // 🌐 REDES SOCIAIS
  socialLinks: {
    linkedin: "https://linkedin.com/company/valenca-castro-advocacia",
    instagram: "https://instagram.com/valencacastro.adv",
    jusbrasil: "https://valencacastro.jusbrasil.com.br"
  }
};

// ----------------------------------------------------------------------------------------------
// 2. HERO PRINCIPAL (VÍDEO DE FUNDO + IMAGEM POSTER + TEXTOS DE IMPACTO)
// ----------------------------------------------------------------------------------------------
export const HERO_CONTENT = {
  eyebrow: "EXCELÊNCIA JURÍDICA COMPROVADA",
  titleMain: "Protegendo o patrimônio e a sustentabilidade",
  titleHighlight: "dos maiores negócios do país.",
  subtitle: "Aliamos rigor técnico a soluções jurídicas inovadoras em direito tributário, empresarial e contencioso estratégico de alta complexidade perante tribunais superiores.",
  
  /* ✏️ CONFIGURE AQUI O VÍDEO DO HERO:
   * Dica: Pode ser um link MP4 de alta velocidade (Mixkit, Pexels, AWS S3) ou um arquivo em /src/assets/
   * Caso o vídeo demore a carregar no mobile, a `posterImage` é exibida imediatamente sem travamento.
   */
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-with-glass-facade-at-sunset-41603-large.mp4",
  posterImage: heroLawOfficeImage,

  ctaPrimary: {
    text: "Falar com Advogado Sócio",
    action: "whatsapp"
  },
  ctaSecondary: {
    text: "Conhecer Áreas de Atuação",
    targetId: "areas-de-atuacao"
  }
};

// ----------------------------------------------------------------------------------------------
// 3. ESTATÍSTICAS E MÉTRICAS DE IMPACTO (ANIMADAS NO SCROLL)
// ----------------------------------------------------------------------------------------------
export const STATS_CONTENT = [
  {
    value: 480,
    prefix: "R$ ",
    suffix: "M+",
    label: "Patrimônio Economizado",
    description: "Em teses tributárias e acordos societários complexos"
  },
  {
    value: 98,
    prefix: "",
    suffix: ".6%",
    label: "Taxa de Êxito",
    description: "Em recursos extraordinários perante STJ e STF"
  },
  {
    value: 22,
    prefix: "+",
    suffix: " Anos",
    label: "Histórico de Atuação",
    description: "Dedicados exclusivamente à advocacia corporativa"
  },
  {
    value: 1600,
    prefix: "+",
    suffix: "",
    label: "Empresas Atendidas",
    description: "Grupos nacionais, multinacionais e holdings familiares"
  }
];

// ----------------------------------------------------------------------------------------------
// 4. SOBRE O ESCRITÓRIO & POSICIONAMENTO ESTRATÉGICO
// ----------------------------------------------------------------------------------------------
export const ABOUT_CONTENT = {
  tag: "POSICIONAMENTO INSTITUCIONAL",
  heading: "Uma advocacia sob medida para quem não pode correr riscos desnecessários.",
  leadParagraph: "Fundada em 2002 na capital paulista, a Valença & Castro nasceu com uma premissa clara: substituir o modelo tradicional de advocacia massificada por uma atuação artesanal, cirúrgica e orientada a resultados mensuráveis.",
  secondaryParagraph: "Nossos clientes são acompanhados diretamente por sócios seniores. Tratamos cada processo societário, fiscal ou cível como um tabuleiro estratégico onde a preservação do capital e da reputação é inegociável.",
  
  /* ✏️ CONFIGURE AQUI AS FOTOS DA SEÇÃO INSTITUCIONAL */
  primaryImage: lawFirmCourtStrategyImage,
  boardroomImage: heroLawOfficeImage,

  pillars: [
    {
      number: "01",
      title: "Atendimento Direto por Sócios Seniores",
      description: "Sem intermediários ou estagiários liderando sua demanda: sua estratégia é traçada pelos sócios mais experientes."
    },
    {
      number: "02",
      title: "Blindagem e Inteligência Preventiva",
      description: "Antecipamos riscos regulatórios e contratuais antes que se convertam em litígios onerosos."
    },
    {
      number: "03",
      title: "Presença Ativa nos Tribunais de Brasília",
      description: "Sustentações orais e acompanhamento próximo perante os ministros do STF, STJ e TST."
    }
  ]
};

// ----------------------------------------------------------------------------------------------
// 5. ÁREAS DE ATUAÇÃO (COM DETALHES COMPLETOS PARA CLIENTES)
// ----------------------------------------------------------------------------------------------
export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
  highlightStat: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-tributario",
    title: "Direito Tributário & Recuperação de Créditos",
    subtitle: "Planejamento fiscal estratégico e defesa contenciosa",
    description: "Estruturação fiscal avançada para reduzir legalmente a carga tributária da sua operação e recuperação administrativa e judicial de tributos indevidamente recolhidos.",
    features: [
      "Recuperação de créditos de PIS, COFINS, ICMS e IRPJ",
      "Defesa contra autos de infração da Receita Federal e SEFAZ",
      "Planejamento tributário nacional e internacional",
      "Sustentação perante o CARF e Tribunais Regionais"
    ],
    iconName: "Scale",
    highlightStat: "+R$ 180M em créditos restituídos"
  },
  {
    id: "direito-societario",
    title: "Direito Societário, M&A & Fusões",
    subtitle: "Segurança jurídica em transações e governança",
    description: "Assessoria completa em acordos de acionistas, reorganizações societárias, aquisição de empresas (due diligence jurídica) e resolução amigável ou litigiosa de conflitos societários.",
    features: [
      "Due Diligence em fusões e aquisições (M&A)",
      "Redação e blindagem de acordos de quotistas/acionistas",
      "Estruturação de investimentos seed, Series A e private equity",
      "Dissolução de sociedades e apuração de haveres"
    ],
    iconName: "Briefcase",
    highlightStat: "70+ operações de M&A concluídas"
  },
  {
    id: "contencioso-estrategico",
    title: "Contencioso Cível de Alta Complexidade",
    subtitle: "Atuação decisiva em disputas de grande repercussão",
    description: "Patrocínio de causas milionárias com análise profunda de jurisprudência, elaboração de teses customizadas e acompanhamento minucioso em todas as instâncias judiciais.",
    features: [
      "Disputas contratuais corporativas e indenizatórias",
      "Medidas cautelares e tutelas de urgência",
      "Recursos especiais e extraordinários no STJ e STF",
      "Arbitragem e mediação empresarial confidencial"
    ],
    iconName: "Shield",
    highlightStat: "98% de decisões favoráveis mantidas"
  },
  {
    id: "planejamento-patrimonial",
    title: "Planejamento Sucessório & Holding Familiar",
    subtitle: "Proteção de bens e continuidade de dinastias",
    description: "Estruturação jurídica de holdings patrimoniais para salvaguardar o patrimônio familiar, reduzir custos com inventário e assegurar transição societária pacífica.",
    features: [
      "Criação de holdings puras, operacionais e imobiliárias",
      "Cláusulas de inalienabilidade, incomunicabilidade e impenhorabilidade",
      "Planejamento tributário de ITCMD e doações em vida",
      "Protocolos familiares de governança intergeracional"
    ],
    iconName: "Building2",
    highlightStat: "240+ famílias patrimonialmente blindadas"
  },
  {
    id: "trabalhista-empresarial",
    title: "Trabalhista Estratégico & Sindical",
    subtitle: "Mitigação de passivos e defesa patronal",
    description: "Defesa combativa de empresas em reclamações trabalhistas de altos executivos, negociações coletivas com sindicatos e auditorias de conformidade com a CLT.",
    features: [
      "Defesa patronal em reclamações de executivos e gerentes",
      "Negociação de Acordos e Convenções Coletivas",
      "Auditoria preventiva de compliance trabalhista",
      "Gestão de terceirizações e prestadores PJ"
    ],
    iconName: "Users",
    highlightStat: "-65% de redução em passivos trabalhistas"
  },
  {
    id: "compliance-lgpd",
    title: "Compliance, LGPD & Riscos Corporativos",
    subtitle: "Adequação regulatória e governança íntegra",
    description: "Implementação de programas de conformidade à Lei Geral de Proteção de Dados, políticas anticorrupção e manuais de conduta ética para atender fundos e clientes internacionais.",
    features: [
      "Adequação integral à LGPD e relatórios de impacto à ANPD",
      "Canal de denúncias independente e investigações internas",
      "Auditoria de contratos com fornecedores e terceiros",
      "Gestão de crises e resposta a incidentes de vazamento"
    ],
    iconName: "FileCheck",
    highlightStat: "100% de conformidade perante órgãos fiscalizadores"
  }
];

// ----------------------------------------------------------------------------------------------
// 6. SÓCIOS E CORPO JURÍDICO (FOTOS E CREDENCIAIS)
// ----------------------------------------------------------------------------------------------
export const PARTNERS_CONTENT = [
  {
    name: "Dr. Rodrigo Valença",
    role: "Sócio Fundador & Head de Tributário e Societário",
    oab: "OAB/SP 142.980",
    degrees: "Doutor em Direito Econômico pela USP • Mestre em Tributação Internacional (LL.M.) pela Universidade de Coimbra",
    bio: "Mais de 25 anos de experiência liderando reestruturações societárias e defesas tributárias de grande vulto para indústrias, construtoras e holdings do agronegócio.",
    /* ✏️ FOTO DO SÓCIO: Altere para a foto do seu cliente */
    photo: seniorPartnerLawyerImage,
    photoPosition: "center top",
    linkedin: "https://linkedin.com",
    contactEmail: "r.valenca@valencacastro.adv.br"
  },
  {
    name: "Dra. Helena Castro",
    role: "Sócia Administradora & Head de Contencioso Estratégico",
    oab: "OAB/SP 198.341",
    degrees: "Mestre em Processo Civil pela PUC-SP • Especialista em Arbitragem Empresarial pela FGV Direito",
    bio: "Atuação combativa perante Tribunais de Justiça e Tribunais Superiores (STJ e STF). Referência nacional em disputas contratuais complexas e recuperação patrimonial.",
    /* ✏️ FOTO DA SÓCIA: Altere para a foto da sua cliente */
    photo: managingPartnerFemaleImage,
    photoPosition: "center 40%",
    linkedin: "https://linkedin.com",
    contactEmail: "h.castro@valencacastro.adv.br"
  }
];

// ----------------------------------------------------------------------------------------------
// 7. SEÇÃO PARALLAX / VÍDEO DE INTERRUPÇÃO VISUAL (AWWWARDS STYLE)
// ----------------------------------------------------------------------------------------------
export const PARALLAX_BREAK_CONTENT = {
  quote: "“No tribunal, a técnica decide o caso. Nos bastidores, a antecipação define a vitória.”",
  author: "Banca Valença & Castro",
  
  /* ✏️ VÍDEO DE FUNDO DO PARALLAX (pode ser substituído facilmente): */
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-city-view-at-night-with-skyscrapers-41604-large.mp4",
  posterImage: lawFirmCourtStrategyImage
};

// ----------------------------------------------------------------------------------------------
// 8. CASOS DE SUCESSO & JURISPRUDÊNCIA RECENTE
// ----------------------------------------------------------------------------------------------
/* ✏️ CONFIGURE AQUI O VÍDEO DO CABEÇALHO DE CASOS DE SUCESSO:
 * Vídeo elegante com temática jurídica/corporativa para o banner de precedentes
 */
export const CASE_STUDIES_HEADER_MEDIA = {
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-business-people-signing-a-contract-42805-large.mp4",
  posterImage: lawFirmCourtStrategyImage
};

export const CASE_STUDIES = [
  {
    clientIndustry: "Indústria Farmacêutica Multinacional",
    challenge: "Autuação fiscal de R$ 94 milhões por suposta divergência de créditos acumulados de ICMS e IPI interestadual.",
    strategy: "Desenvolvimento de tese inovadora de desoneração da cadeia logística combinada com medida cautelar suspensiva.",
    outcome: "Anulação integral do débito fiscal pelo Tribunal e liberação de R$ 32M em garantias judiciais prévias.",
    tag: "Direito Tributário"
  },
  {
    clientIndustry: "Grupo Varejista com 180 Lojas",
    challenge: "Disputa societária fratricida com risco iminente de bloqueio de contas operacionais e paralisação das atividades.",
    strategy: "Mediação jurídica em regime confidencial com cisão não proporcional de ativos e acordo com credores bancários.",
    outcome: "Preservação da operação com 4.200 empregos mantidos e transição pacífica de controle societário.",
    tag: "Societário & Recuperação"
  },
  {
    clientIndustry: "Family Office / Agronegócio",
    challenge: "Patrimônio imobiliário de R$ 220 milhões vulnerável a inventário judicial oneroso e riscos de responsabilidade cruzada.",
    strategy: "Instituição de Holding Familiar com cláusulas de incomunicabilidade, doação com reserva de usufruto e governança.",
    outcome: "Economia tributária de mais de 72% sobre os custos de transmissão e total blindagem patrimonial da família.",
    tag: "Planejamento Sucessório"
  }
];

// ----------------------------------------------------------------------------------------------
// 9. TRIAGEM DE CONSULTA / QUALIFICADOR DE LEADS (INTERATIVO)
// ----------------------------------------------------------------------------------------------
export const TRIAGE_CONFIG = {
  title: "Diagnóstico Jurídico Preliminar",
  subtitle: "Responda a 3 perguntas em menos de 1 minuto para direcionarmos sua demanda ao sócio especialista correto.",
  steps: [
    {
      id: "perfil",
      question: "Qual o perfil da sua demanda?",
      options: [
        "Pessoa Jurídica (Empresa / Grupo Corporativo)",
        "Holding Familiar / Produtor Rural",
        "Sócio / Executivo em Conflito",
        "Pessoa Física com Causa Estratégica"
      ]
    },
    {
      id: "area",
      question: "Qual o tema central da questão?",
      options: [
        "Tributário / Fiscal / Autos de Infração",
        "Societário / Fusões / Disputa entre Sócios",
        "Processo Judicial de Alto Valor (Cível/Contratos)",
        "Blindagem Patrimonial & Herança / Sucessão",
        "Trabalhista Patronal / Sindicatos",
        "Outro Tema Complexo"
      ]
    },
    {
      id: "urgencia",
      question: "Qual o nível de urgência?",
      options: [
        "Urgente (Prazo judicial correndo / Notificação recente)",
        "Intermediário (Pretensão de fechar negócio ou processo em curso)",
        "Preventivo (Planejamento e estruturação estratégica)"
      ]
    }
  ]
};

// ----------------------------------------------------------------------------------------------
// 10. DEPOIMENTOS DE CLIENTES CORPORATIVOS
// ----------------------------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    quote: "A atuação da Dra. Helena Castro no Superior Tribunal de Justiça foi exemplar. Conseguimos reverter uma condenação injusta que se arrastava há 7 anos. A segurança que a equipe transmite é ímpar.",
    author: "Marcio Bittencourt",
    role: "Diretor Jurídico Corporativo",
    company: "Grupo Logístico TransBrasil",
    city: "São Paulo, SP"
  },
  {
    quote: "O Dr. Rodrigo e sua equipe redesenharam nossa estrutura tributária em menos de 90 dias. A redução de custo fiscal viabilizou a abertura de 14 novas filiais no mesmo ano com total respaldo legal.",
    author: "Renata Vasconcellos",
    role: "CFO",
    company: "OmniTech Soluções Industriais",
    city: "Campinas, SP"
  },
  {
    quote: "A estruturação da nossa holding familiar foi conduzida com maestria e diplomacia. Conseguiram alinhar os interesses de três gerações sem nenhum atrito, protegendo todo o patrimônio acumulado.",
    author: "Eduardo Silveira Prado",
    role: "Fundador e Conselheiro",
    company: "Agropecuária Monte Verde",
    city: "Ribeirão Preto, SP"
  }
];

// ----------------------------------------------------------------------------------------------
// 11. PERGUNTAS FREQUENTES (FAQ)
// ----------------------------------------------------------------------------------------------
export const FAQ_CONTENT = [
  {
    question: "Como funciona a primeira consulta estratégica?",
    answer: "A consulta inicial pode ser realizada presencialmente em nosso escritório na Faria Lima (São Paulo) ou por videoconferência com link criptografado. Analisamos detalhadamente a documentação prévia, identificamos os riscos e apresentamos um parecer preliminar com as opções de ação antes de qualquer contratação."
  },
  {
    question: "O escritório atende demandas fora do estado de São Paulo?",
    answer: "Sim. Atuamos em âmbito nacional, especialmente em sustentações orais perante os Tribunais Regionais Federais (TRFs) e os Tribunais Superiores em Brasília (STF, STJ e TST). Nossos clientes contam com relatórios em tempo real via sistema seguro."
  },
  {
    question: "Como é resguardado o sigilo das informações e documentos?",
    answer: "O sigilo profissional é um dever sagrado garantido pelo Estatuto da Advocacia e OAB (Lei 8.906/94). Além das garantias legais, nossos sistemas operam com criptografia de ponta a ponta e assinatura de Termo de Confidencialidade (NDA) antes da análise de qualquer documento sensível."
  },
  {
    question: "Como são definidos os honorários advocatícios?",
    answer: "Nossa precificação é transparente e estruturada de acordo com a complexidade da matéria e a Tabela de Honorários da OAB. Trabalhamos com modelos flexíveis: honorários fixos mensais (pro labore), honorários por fase processual e honorários de êxito (quota litis) atrelados ao resultado econômico obtido para o cliente."
  },
  {
    question: "Existe prazo mínimo para resposta em casos urgentes com liminar?",
    answer: "Para situações que envolvem mandados de segurança, bloqueios patrimoniais ou medidas cautelares urgentes, nosso comitê de resposta rápida atua em regime de plantão 24/7 para protocolo imediato das medidas judiciais necessárias."
  }
];

// ----------------------------------------------------------------------------------------------
// 12. TEXTO LEGAL DE RODAPÉ (CONFORMIDADE ÉTICA OAB)
// ----------------------------------------------------------------------------------------------
export const OAB_DISCLAIMER = "Este website tem caráter estritamente informativo e institucional, em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB). Nenhuma informação aqui contida substitui uma consulta jurídica formal e individualizada.";
