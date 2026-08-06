import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    explanation: "A primeira menstruação (menarca) indica que o ritmo de crescimento vai desacelerar, mas a garota ainda costuma crescer entre 4 a 6 cm depois disso.",
  },
  {
    id: 5,
    text: "A adolescência é a mesma coisa de puberdade.",
    answer: "Mito",
    explanation: "A puberdade é a transformação física e biológica do corpo. Já a adolescência é o período social e emocional de transição para a vida adulta (dos 10 aos 20 anos).",
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
  const [, navigate] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
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
    setCurrentIndex(0);
    setRevealed(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white border-4 border-black shadow-lg p-12 text-center">
            <h1 className="text-6xl font-black text-black mb-6 uppercase">
              Parabéns!
            </h1>
            <p className="text-3xl font-bold text-gray-800 mb-8">
              Vocês completaram o quiz! 🎉
            </p>
            <div className="mb-12">
              <img
                src="/manus-storage/unifran-logo_10c6e59e.png"
                alt="UNIFRAN Logo"
                className="h-32 mx-auto object-contain"
              />
            </div>
            <div className="text-center mb-8">
              <p className="text-xl font-bold text-gray-700 mb-2">
                Medicina UNIFRAN - M16
              </p>
              <p className="text-sm font-semibold text-gray-700">
                Felipe Gomes, Mara Firmino, Emiliana Rezende, Juliana Volpe,<br />
                Clara Prado, Vitor Krempel, Rosa Silva
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate("/tips")}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 px-6 text-lg border-3 border-black"
              >
                Dicas de Ouro
              </Button>
              <Button
                onClick={handleRestart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-6 text-lg border-3 border-black"
              >
                Recomeçar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-3">
        <div className="flex items-center justify-between mb-6">
          <img
            src="/manus-storage/unifran-logo_10c6e59e.png"
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
        <div className="bg-white border-4 border-black shadow-xl p-5 mb-3">
          <div className="mb-2">
            <span className="inline-block bg-blue-600 text-white font-black px-4 py-2 border-2 border-black mb-4">
              PERGUNTA {currentIndex + 1}
            </span>
          </div>
          <h2 className="text-2xl font-black text-black mb-3 leading-tight">
            {current.text}
          </h2>

          {!revealed ? (
            <div className="flex gap-4 mt-2">
              <Button
                onClick={handleReveal}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 px-6 text-lg border-3 border-black shadow-lg transform hover:scale-105 transition-transform"
              >
                Revelar Resposta
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Answer Badge */}
              <div className={`p-3 border-4 border-black ${
                isAnswerCorrect
                  ? "bg-blue-600 text-white"
                  : "bg-yellow-400 text-black"
              }`}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1">
                  Resposta:
                </p>
                <p className="text-3xl font-black uppercase">
                  {current.answer}!
                </p>
              </div>

              {/* Explanation */}
              <div className="bg-gray-100 border-3 border-black p-3">
                <h3 className="font-black text-black mb-1 uppercase text-sm">
                  Por quê?
                </h3>
                <p className="text-gray-800 text-sm leading-snug font-semibold">
                  {current.explanation}
                </p>
              </div>

              {/* Next Button */}
              <Button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
              >
                {currentIndex === questions.length - 1 ? "Finalizar" : "Próxima Pergunta"}
                <ChevronRight size={24} />
              </Button>

              {/* Back Button */}
              {currentIndex > 0 && (
                <Button
                  onClick={() => {
                    setCurrentIndex(currentIndex - 1);
                    setRevealed(false);
                  }}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={24} />
                  Pergunta Anterior
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Tips Footer */}
        <div className="mb-2">
          <div className="bg-white border-3 border-black p-4">
            <p className="font-black text-black text-sm uppercase">💡 Dica</p>
            <p className="text-gray-700 font-semibold text-sm mt-2">
              Clique em "Revelar Resposta" para descobrir se é verdade ou mito!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
