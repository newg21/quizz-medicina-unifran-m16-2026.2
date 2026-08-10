import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Tips() {
  const [, navigate] = useLocation();

  const tips = [
    {
      icon: "🍎",
      title: "Alimentação",
      description: "Seu corpo precisa de combustível de qualidade para o crescimento. Priorize frutas, vegetais e muita água!",
    },
    {
      icon: "🧼",
      title: "Higiene",
      description: "O suor mudou? É normal! Hora de reforçar o banho e usar um desodorante que você se sinta confortável.",
    },
    {
      icon: "⏰",
      title: "Respeite seu Tempo",
      description: "Não se compare com os amigos. Cada corpo tem seu próprio relógio biológico e ritmo de mudança.",
    },
    {
      icon: "👨‍⚕️",
      title: "Busque Ajuda",
      description: "Tem dúvidas ou algo te incomoda? Converse com seus pais, professores ou um profissional de saúde.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-5">
      <div className="max-w-4xl mx-auto">
        {/* Header with Logo — no mobile: logo em cima; no desktop: igual */}
        <div className="flex flex-col-reverse md:flex-row items-start md:justify-between gap-3 mb-4 md:mb-5">
          <div className="bg-yellow-400 border-4 border-black p-2.5 md:p-3 shadow-lg inline-block max-w-full">
            <h1 className="text-lg md:text-2xl font-black text-black uppercase leading-snug">
              Dicas de Ouro da Medicina UNIFRAN
            </h1>
          </div>
          <img
            src="/manus-storage/unifran-logo_10c6e59e.png"
            alt="UNIFRAN Logo"
            className="h-12 md:h-16 object-contain mx-auto md:mx-0 md:ml-auto md:mr-8"
          />
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-3 md:p-4 shadow-lg"
            >
              <div className="text-3xl mb-2">{tip.icon}</div>
              <h3 className="text-sm font-black text-black uppercase mb-1">
                {tip.title}
              </h3>
              <p className="text-xs font-semibold leading-snug">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Message */}
        <div className="bg-blue-600 text-white border-4 border-black p-3 md:p-4 shadow-lg mb-4">
          <h2 className="text-sm font-black uppercase mb-1">Lembre-se:</h2>
          <p className="text-xs font-bold leading-snug">
            A puberdade é uma fase normal e natural da vida. Cada pessoa passa por mudanças diferentes em tempos diferentes. 
            Não há pressa! Se tiver dúvidas ou preocupações, sempre procure um adulto de confiança ou um profissional de saúde.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <Button
            onClick={() => navigate("/quiz")}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} />
            Voltar ao Quiz
          </Button>
          <Button
            onClick={() => navigate("/final")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            Finalizar
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
