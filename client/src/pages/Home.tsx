import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw, Play } from "lucide-react";

interface Question {
  id: number;
  text: string;
  answer: "Verdade" | "Mito";
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Meninos também podem desenvolver mamas temporariamente durante a puberdade.",
    answer: "Verdade",
    explanation: "Chama-se ginecomastia puberal. Os hormônios ficam desregulados nessa fase e a glândula mamária pode inchar, mas costuma sumir sozinha em até dois anos.",
  },
  {
    id: 2,
    text: "A puberdade começa na mesma idade para todas as pessoas.",
    answer: "Mito",
    explanation: "Cada corpo tem seu próprio 'relógio'. Meninas costumam começar entre 8 e 13 anos, e meninos entre 9 e 14. Genética, alimentação e ambiente influenciam muito!",
  },
  {
    id: 3,
    text: "O ciclo menstrual pode variar de 21 a 36 dias.",
    answer: "Verdade",
    explanation: "Não existe essa história de que precisa ser cravado em 28 dias. Nos primeiros anos após a primeira menstruação, a variação é ainda maior e super normal.",
  },
  {
    id: 4,
    text: "As adolescentes podem continuar crescendo após a primeira menstruação.",
    answer: "Verdade",
    explanation: "A primeira menstruação (menarca) indica que o ritmo de crescimento vai desacelerar, mas a garota ainda costuma crescer de 5 a 7 cm depois disso.",
  },
  {
    id: 5,
    text: "A adolescência é a mesma coisa de puberdade.",
    answer: "Mito",
    explanation: "A puberdade é a transformação física e biológica do corpo. A adolescência é o período social e emocional de transição para a vida adulta.",
  },
  {
    id: 6,
    text: "A partir dos 12 anos, os adolescentes podem receber atendimento médico sem a presença dos pais ou responsáveis.",
    answer: "Verdade",
    explanation: "O Estatuto da Criança e do Adolescente e o Código de Ética Médica garantem o direito à privacidade e sigilo na consulta, salvo se houver risco sério à vida.",
  },
  {
    id: 7,
    text: "É normal a ejaculação involuntária durante o sono.",
    answer: "Verdade",
    explanation: "São as chamadas poluções noturnas. O corpo masculino produz esperma continuamente e usa o sono para liberar o excesso e 'testar' o sistema reprodutor.",
  },
  {
    id: 8,
    text: "Os adolescentes podem apresentar ganho de peso antes do crescimento rápido sem que seja considerado obesidade.",
    answer: "Verdade",
    explanation: "O corpo estoca gordura e energia justamente para ter combustível suficiente para o 'estirão' de crescimento que vem logo em seguida.",
  },
  {
    id: 9,
    text: "As mudanças da puberdade acontecem de forma igual para todas as pessoas.",
    answer: "Mito",
    explanation: "A ordem e a intensidade do aparecimento de pelos, voz grossa ou broto mamário variam completamente de pessoa para pessoa.",
  },
  {
    id: 10,
    text: "Todo mundo cresce exatamente na mesma velocidade.",
    answer: "Mito",
    explanation: "O estirão do crescimento acontece em ritmos e momentos diferentes para cada um. Uns esticam rápido de repente, outros crescem aos poucos.",
  },
  {
    id: 11,
    text: "Apenas os adolescentes têm acne.",
    answer: "Mito",
    explanation: "É mais comum na puberdade devido à explosão hormonal, mas adultos também podem ter acne por estresse, genética, medicação ou fatores hormonais.",
  },
  {
    id: 12,
    text: "É normal o suor ficar com cheiro mais forte durante a puberdade.",
    answer: "Verdade",
    explanation: "As glândulas sudoríparas apócrinas (nas axilas e virilha) 'acordam' na puberdade e produzem um suor especial que, ao entrar em contato com bactérias da pele, geram o odor.",
  },
];

export default function Home() {
  const [step, setStep] = useState<"capa" | "como_funciona" | "quiz" | "dicas_ouro" | "referencias" | "concluido">("capa");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [dicaIndex, setDicaIndex] = useState(0);

  const current = questions[currentIndex];
  const isAnswerCorrect = current.answer === "Verdade";

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    } else {
      setStep("dicas_ouro");
      setDicaIndex(0);
    }
  };

  const handleNextDica = () => {
    if (dicaIndex < 2) {
      setDicaIndex(dicaIndex + 1);
    } else {
      setStep("referencias");
    }
  };

  const handleRestart = () => {
    setStep("capa");
    setCurrentIndex(0);
    setRevealed(false);
    setDicaIndex(0);
  };

  // 1. TELA DE CAPA (Página 1)
  if (step === "capa") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-xl w-full">
          <div className="bg-white border-4 border-black shadow-xl p-8 md:p-10 text-center transform -rotate-1">
            <div className="mb-6">
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-24 mx-auto object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-black mb-3 uppercase tracking-tight leading-tight">
              Puberdade & Adolescência
            </h1>
            
            <p className="text-xl font-bold text-gray-700 mb-6">
              Mitos e Verdades
            </p>

            <div className="mb-8 border-3 border-black p-4 bg-gray-50 text-center transform rotate-1">
              <p className="font-extrabold text-sm text-black mb-1 uppercase tracking-wide">
                MEDICINA UNIFRAN - M16
              </p>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed px-2">
                Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
              </p>
            </div>

            <Button
              onClick={() => setStep("como_funciona")}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-6 text-xl border-3 border-black shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer"
            >
              <Play fill="black" size={24} />
              Iniciar Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 2. TELA COMO FUNCIONA (Página 2)
  if (step === "como_funciona") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-xl p-8 md:p-10 transform rotate-1">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-blue-600 text-white font-black px-4 py-1 text-sm border-2 border-black uppercase transform -rotate-2">
                Como Funciona
              </span>
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-12 object-contain"
              />
            </div>

            <h2 className="text-3xl font-black text-black mb-6 uppercase border-b-2 border-black pb-3">
              Como Funciona a Brincadeira?
            </h2>

            <div className="space-y-4 text-gray-800 text-lg font-semibold leading-relaxed mb-8 bg-gray-50 border-3 border-black p-6 transform -rotate-1">
              <p>• Este quiz interativo aborda mitos e verdades comuns sobre a puberdade e a adolescência.</p>
              <p>• Para cada pergunta apresentada, clique em <strong className="text-black">"Revelar Resposta"</strong> para conferir se a afirmação é Verdade ou Mito, acompanhada de sua respectiva explicação médica.</p>
              <p>• Utilize os botões de navegação para avançar pelas questões e conferir as orientações finais.</p>
            </div>

            <Button
              onClick={() => setStep("quiz")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer"
            >
              Começar o Quiz
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 3. DICAS DE OURO DA MEDICINA UNIFRAN (3 slides)
  if (step === "dicas_ouro") {
    const dicasData = [
      {
        titulo: "Dicas de Ouro da Medicina UNIFRAN (1/3)",
        conteúdo: "Compreender as transformações da puberdade é essencial para acolher os adolescentes com empatia, reduzir mitos, tabus e orientar adequadamente sobre a saúde física e mental nessa fase de transição."
      },
      {
        titulo: "Dicas de Ouro da Medicina UNIFRAN (2/3)",
        conteúdo: "Oferecer um ambiente seguro, com escuta qualificada, respeito ao sigilo médico e orientação clara, fortalecendo a autonomia e o autocuidado do adolescente."
      },
      {
        titulo: "Dicas de Ouro da Medicina UNIFRAN (3/3)",
        conteúdo: "A adolescência e a puberdade são processos plurais e individuais. Cada jovem vivencia seu desenvolvimento em seu próprio ritmo, exigindo suporte familiar e institucional adequado."
      }
    ];

    const dicaAtual = dicasData[dicaIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-xl p-8 md:p-10 transform -rotate-1">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-yellow-400 text-black font-black px-4 py-1 text-sm border-2 border-black uppercase transform rotate-2">
                Dicas de Ouro {dicaIndex + 1} de 3
              </span>
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-12 object-contain"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase border-b-2 border-black pb-3 leading-tight">
              {dicaAtual.titulo}
            </h2>

            <p className="text-gray-800 text-xl font-semibold leading-relaxed mb-8 bg-gray-50 border-3 border-black p-6 transform rotate-1">
              {dicaAtual.conteúdo}
            </p>

            <Button
              onClick={handleNextDica}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer"
            >
              {dicaIndex === 2 ? "Ir para Referências" : "Próxima Dica"}
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 4. REFERÊNCIAS BIBLIOGRÁFICAS
  if (step === "referencias") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-xl p-8 md:p-10 text-center transform rotate-1">
            <div className="mb-6">
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-20 mx-auto object-contain"
              />
            </div>

            <h2 className="text-3xl font-black text-black mb-6 uppercase border-b-2 border-black pb-3">
              Referências Bibliográficas
            </h2>

            <div className="text-left bg-gray-50 border-3 border-black p-6 space-y-3 mb-8 text-sm md:text-base font-semibold text-gray-800 leading-relaxed transform -rotate-1">
              <p>• Ministério da Saúde. Caderneta do Adolescente.</p>
              <p>• Estatuto da Criança e do Adolescente (ECA) - Lei nº 8.069/1990.</p>
              <p>• Código de Ética Médica - Conselho Federal de Medicina (CFM).</p>
              <p>• Sociedade Brasileira de Pediatria (SBP). Diretrizes de Saúde do Adolescente.</p>
            </div>

            <div className="mb-8 border-3 border-black p-4 bg-gray-50 text-center transform rotate-1">
              <p className="font-extrabold text-sm text-black mb-1 uppercase tracking-wide">
                MEDICINA UNIFRAN - M16
              </p>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
              </p>
            </div>

            <Button
              onClick={() => setStep("concluido")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer"
            >
              Finalizar Apresentação
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 5. TELA DE CONCLUSÃO
  if (step === "concluido") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-lg p-12 text-center transform -rotate-1">
            <h1 className="text-6xl font-black text-black mb-6 uppercase">
              Parabéns!
            </h1>
            <p className="text-3xl font-bold text-gray-800 mb-8">
              Você completou o quiz! 🎉
            </p>
            <div className="mb-12">
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-32 mx-auto object-contain"
              />
            </div>
            <div className="mb-8 border-3 border-black p-4 bg-gray-50 text-center transform rotate-1">
              <p className="font-extrabold text-sm text-black mb-1 uppercase tracking-wide">
                MEDICINA UNIFRAN - M16
              </p>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
              </p>
            </div>
            <Button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg border-2 border-black transform hover:scale-105 transition-transform cursor-pointer"
            >
              <RotateCcw className="mr-2" />
              Começar de Novo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 6. TELA DO QUIZ (Perguntas de 1 a 12)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <img
            src="/__manus__/logo-unifran.png"
            alt="UNIFRAN Logo"
            className="h-16 object-contain"
          />
          <div className="text-right">
            <p className="font-bold text-gray-700">Pergunta {currentIndex + 1} de {questions.length}</p>
            <div className="w-64 h-3 bg-gray-300 border-2 border-black mt-2">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Question Card */}
        <div className="bg-white border-4 border-black shadow-xl p-8 mb-8 transform -rotate-1">
          <div className="mb-6">
            <span className="inline-block bg-blue-600 text-white font-black px-4 py-2 border-2 border-black transform rotate-2 mb-4">
              PERGUNTA {currentIndex + 1}
            </span>
          </div>
          <h2 className="text-3xl font-black text-black mb-8 leading-tight">
            {current.text}
          </h2>

          {!revealed ? (
            <div className="flex gap-4">
              <Button
                onClick={handleReveal}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-6 text-xl border-3 border-black shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
              >
                Revelar Resposta
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Answer Badge */}
              <div className={`p-6 border-4 border-black transform -rotate-1 ${
                isAnswerCorrect
                  ? "bg-blue-600 text-white"
                  : "bg-yellow-400 text-black"
              }`}>
                <p className="text-sm font-bold uppercase tracking-wider mb-2">
                  Resposta:
                </p>
                <p className="text-4xl font-black uppercase">
                  {current.answer}!
                </p>
              </div>

              {/* Explanation */}
              <div className="bg-gray-100 border-3 border-black p-6 transform rotate-1">
                <p className="font-black text-black mb-3 uppercase text-lg">
                  Por quê?
                </p>
                <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                  {current.explanation}
                </p>
              </div>

              {/* Next Button */}
              <Button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer"
              >
                {currentIndex === questions.length - 1 ? "Ver Dicas de Ouro" : "Próxima Pergunta"}
                <ChevronRight size={24} />
              </Button>
            </div>
          )}
        </div>

        {/* Tips Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white border-3 border-black p-4 transform rotate-1">
            <p className="font-black text-black text-sm uppercase">💡 Dica</p>
            <p className="text-gray-700 font-semibold text-sm mt-2">
              Clique em "Revelar Resposta" para descobrir se é verdade ou mito!
            </p>
          </div>
          <div className="bg-white border-3 border-black p-4 transform -rotate-1">
            <p className="font-bold text-black text-base uppercase">MEDICINA UNIFRAN - M16</p>
            <p className="text-gray-700 font-semibold text-xs mt-2">
              Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
