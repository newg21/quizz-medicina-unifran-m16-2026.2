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
    explanation: "As glândulas sudoríparas apócrinas (nas axilas e virilha) 'acordam' na puberdade e produzem um suor especial que, ao entrar em contato com bactérias da pele, gera o odor.",
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState(false);

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
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setRevealed(false);
    setCompleted(false);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 text-center transform -rotate-1">
            <div className="mb-6">
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-24 mx-auto object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight leading-tight">
              Puberdade & <br />Adolescência
            </h1>
            
            <p className="text-xl font-bold text-gray-700 mb-8">
              Mitos e Verdades para o 8º Ano
            </p>

            <div className="bg-gray-100 border-2 border-black p-4 mb-8 transform rotate-1 rounded-none text-left">
              <p className="font-bold text-sm text-black mb-1">MEDICINA UNIFRAN - M16</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-black">Integrantes:</strong> Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
              </p>
            </div>

            <Button
              onClick={() => setStarted(true)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-8 text-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play fill="black" size={28} />
              Iniciar Apresentação
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 text-center transform rotate-1">
            <h1 className="text-5xl font-black text-black mb-4 uppercase">
              Parabéns!
            </h1>
            <p className="text-2xl font-bold text-gray-800 mb-8">
              Você completou o quiz interativo! 🎉
            </p>
            
            <div className="mb-8">
              <img
                src="/__manus__/logo-unifran.png"
                alt="UNIFRAN Logo"
                className="h-28 mx-auto object-contain"
              />
            </div>

            <div className="bg-blue-50 border-3 border-black p-6 mb-8 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-blue-900 text-base mb-2 uppercase tracking-wide">
                MEDICINA UNIFRAN - M16
              </p>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                Felipe Gomes, Emiliana Rezende, Juliana Volpe, Clara Prado, Mara Firmino, Vitor Krempel, Rosa Silva
              </p>
            </div>

            <Button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 text-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mx-auto gap-2 cursor-pointer"
            >
              <RotateCcw size={22} />
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/__manus__/logo-unifran.png"
            alt="UNIFRAN Logo"
            className="h-12 object-contain"
          />
          <div className="text-right">
            <p className="font-black text-sm md:text-base text-gray-800">
              Pergunta {currentIndex + 1} de {questions.length}
            </p>
            <div className="w-48 md:w-64 h-3 bg-gray-200 border-2 border-black mt-1">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 mb-6 transform -rotate-1">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white font-black px-4 py-1.5 border-2 border-black text-sm uppercase transform rotate-1">
              Questão {currentIndex + 1}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-black mb-8 leading-snug">
            {current.text}
          </h2>

          {!revealed ? (
            <div className="flex gap-4">
              <Button
                onClick={handleReveal}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-6 text-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:scale-[1.01] transition-transform cursor-pointer"
              >
                Revelar Resposta
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className={`p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 ${
                isAnswerCorrect
                  ? "bg-blue-600 text-white"
                  : "bg-yellow-400 text-black"
              }`}>
                <p className="text-xs font-black uppercase tracking-wider mb-1">
                  Resposta Correta:
                </p>
                <p className="text-4xl font-black uppercase">
                  {current.answer}!
                </p>
              </div>

              <div className="bg-gray-50 border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h3 className="font-black text-black mb-2 uppercase text-base">
                  Explicação Médica:
                </h3>
                <p className="text-gray-900 text-lg leading-relaxed font-medium">
                  {current.explanation}
                </p>
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 cursor-pointer"
              >
                {currentIndex === questions.length - 1 ? "Ver Tela Final" : "Próxima Pergunta"}
                <ChevronRight size={26} />
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <p className="font-black text-black text-xs uppercase">💡 Dica</p>
            <p className="text-gray-700 font-medium text-xs mt-1">
              Discuta com a turma antes de revelar se é verdade ou mito!
            </p>
          </div>
          <div className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <p className="font-black text-black text-xs uppercase">MEDICINA UNIFRAN - M16</p>
            <p className="text-gray-700 font-medium text-[11px] mt-1 leading-snug">
              Felipe, Emiliana, Juliana, Clara, Mara, Vitor, Rosa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
