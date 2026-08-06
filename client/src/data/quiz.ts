export interface Question {
  id: number;
  text: string;
  answer: "Verdade" | "Mito";
  explanation: string;
}

export const AUTHORS_LINE1 =
  "Felipe Gomes, Mara Firmino, Emiliana Rezende, Juliana Volpe,";
export const AUTHORS_LINE2 = "Clara Prado, Vitor Krempel, Rosa Silva.";
export const AUTHORS = `${AUTHORS_LINE1}\n${AUTHORS_LINE2}`;

export const COURSE_LABEL = "MEDICINA UNIFRAN - M16";

export const LOGO_SRC = "/unifran-logo.png";

export const questions: Question[] = [
  {
    id: 1,
    text: "Meninos também podem desenvolver mamas temporariamente durante a puberdade.",
    answer: "Verdade",
    explanation:
      "Chama-se ginecomastia puberal. Os hormônios ficam desregulados nessa fase e a glândula mamária pode inchar, mas costuma sumir sozinha em até dois anos.",
  },
  {
    id: 2,
    text: "A puberdade começa na mesma idade para todas as pessoas.",
    answer: "Mito",
    explanation:
      'Cada corpo tem seu próprio "relógio". Meninas costumam começar entre 8 e 13 anos, e meninos entre 9 e 14. Genética, alimentação e ambiente influenciam muito!',
  },
  {
    id: 3,
    text: "O ciclo menstrual pode variar de 21 a 36 dias.",
    answer: "Verdade",
    explanation:
      "Não existe essa história de que precisa ser cravado em 28 dias. Nos primeiros anos após a primeira menstruação, a variação é ainda maior e super normal.",
  },
  {
    id: 4,
    text: "As adolescentes podem continuar crescendo após a primeira menstruação.",
    answer: "Verdade",
    explanation:
      "A primeira menstruação (menarca) indica que o ritmo de crescimento vai desacelerar, mas a garota ainda costuma crescer de 5 a 7 cm depois disso.",
  },
  {
    id: 5,
    text: "A adolescência é a mesma coisa de puberdade.",
    answer: "Mito",
    explanation:
      "A puberdade é a transformação física e biológica do corpo. A adolescência é o período social e emocional de transição para a vida adulta.",
  },
  {
    id: 6,
    text: "A partir dos 12 anos, os adolescentes podem receber atendimento médico sem a presença dos pais ou responsáveis.",
    answer: "Verdade",
    explanation:
      "O Estatuto da Criança e do Adolescente e o Código de Ética Médica garantem o direito à privacidade e sigilo na consulta, salvo se houver risco sério à vida.",
  },
  {
    id: 7,
    text: "É normal a ejaculação involuntária durante o sono.",
    answer: "Verdade",
    explanation:
      'São as chamadas poluções noturnas. O corpo masculino produz esperma continuamente e usa o sono para liberar o excesso e "testar" o sistema reprodutor.',
  },
  {
    id: 8,
    text: "Os adolescentes podem apresentar ganho de peso antes do crescimento rápido sem que seja considerado obesidade.",
    answer: "Verdade",
    explanation:
      'O corpo estoca gordura e energia justamente para ter combustível suficiente para o "estirão" de crescimento que vem logo em seguida.',
  },
  {
    id: 9,
    text: "As mudanças da puberdade acontecem de forma igual para todas as pessoas.",
    answer: "Mito",
    explanation:
      "A ordem e a intensidade do aparecimento de pelos, voz grossa ou broto mamário variam completamente de pessoa para pessoa.",
  },
  {
    id: 10,
    text: "Todo mundo cresce exatamente na mesma velocidade.",
    answer: "Mito",
    explanation:
      "O estirão do crescimento acontece em ritmos e momentos diferentes para cada um. Uns esticam rápido de repente, outros crescem aos poucos.",
  },
  {
    id: 11,
    text: "Apenas os adolescentes têm acne.",
    answer: "Mito",
    explanation:
      "É mais comum na puberdade devido à explosão hormonal, mas adultos também podem ter acne por estresse, genética, medicação ou fatores hormonais.",
  },
  {
    id: 12,
    text: "É normal o suor ficar com cheiro mais forte durante a puberdade.",
    answer: "Verdade",
    explanation:
      "As glândulas sudoríparas apócrinas (nas axilas e virilha) 'acordam' na puberdade e produzem um suor especial que, ao entrar em contato com bactérias da pele, gera o odor.",
  },
];

export const tips = [
  {
    title: "ALIMENTAÇÃO",
    text: "Seu corpo precisa de combustível de qualidade para o crescimento. Priorize frutas, vegetais e muita água!",
    icon: "apple" as const,
  },
  {
    title: "HIGIENE",
    text: "O suor mudou? É normal! Hora de reforçar o banho e usar um desodorante que você se sinta confortável.",
    icon: "droplets" as const,
  },
  {
    title: "RESPEITE SEU TEMPO",
    text: "Não se compare com os amigos. Cada corpo tem seu próprio relógio biológico e ritmo de mudança.",
    icon: "clock" as const,
  },
  {
    title: "BUSQUE AJUDA",
    text: "Tem dúvidas ou algo te incomoda? Converse com seus pais, professores ou um profissional de saúde.",
    icon: "scale" as const,
  },
];
