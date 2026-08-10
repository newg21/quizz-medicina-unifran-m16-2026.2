import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <img
            src="/manus-storage/unifran-logo_10c6e59e.png"
            alt="UNIFRAN Logo"
            className="h-10 md:h-12 object-contain mb-2 mx-auto md:mx-0"
          />
          <div className="bg-yellow-400 border-4 border-black p-2.5 md:p-3 shadow-lg inline-block max-w-full">
            <h1 className="text-xl md:text-2xl font-black text-black uppercase leading-snug">
              Como Funciona a Brincadeira?
            </h1>
          </div>
        </div>

        {/* Three Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {/* Panel 1 */}
          <div className="bg-blue-600 text-white border-4 border-black shadow-lg p-3">
            <div className="text-3xl md:text-4xl font-black mb-2">1</div>
            <p className="text-sm font-black uppercase mb-2">Vamos apresentar afirmações sobre o corpo.</p>
            <div className="text-3xl">📄</div>
          </div>

          {/* Panel 2 */}
          <div className="bg-white border-4 border-black shadow-lg p-3">
            <div className="text-3xl md:text-4xl font-black text-black mb-2">2</div>
            <p className="text-sm font-black text-black uppercase mb-2">Vocês decidem: é VERDADE ou MITO?</p>
            <div className="text-3xl">❓</div>
          </div>

          {/* Panel 3 */}
          <div className="bg-yellow-400 border-4 border-black shadow-lg p-3">
            <div className="text-3xl md:text-4xl font-black text-black mb-2">3</div>
            <p className="text-sm font-black text-black uppercase mb-2">Revelamos a resposta e explicamos!</p>
            <div className="text-3xl">💡</div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white border-4 border-black p-3 shadow-lg mb-3">
          <h2 className="text-base md:text-lg font-black text-black uppercase mb-2">O que você vai aprender:</h2>
          <ul className="space-y-1 text-sm font-bold text-gray-800">
            <li>✓ Fatos sobre puberdade e adolescência</li>
            <li>✓ Mudanças normais do corpo</li>
            <li>✓ Dicas de saúde e bem-estar</li>
            <li>✓ Informações baseadas em ciência médica</li>
          </ul>
        </div>

        {/* Footer */}
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} />
            Voltar
          </Button>
          <Button
            onClick={() => navigate("/quiz")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-2 px-4 text-sm border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            Começar Quiz
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
