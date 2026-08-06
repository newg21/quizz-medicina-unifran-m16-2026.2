import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { RotateCcw, ChevronLeft } from "lucide-react";

/** Página final — mesma proporção visual da tela de Parabéns do quiz */
export default function Final() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white border-4 border-black shadow-lg px-10 py-8 text-center">
          <h1 className="text-5xl font-black text-black mb-3 uppercase">
            Parabéns!
          </h1>

          <p className="text-2xl font-bold text-gray-800 mb-5">
            Vocês completaram o quiz! 🎉
          </p>

          <div className="mb-5">
            <img
              src="/manus-storage/unifran-logo_10c6e59e.png"
              alt="UNIFRAN Logo"
              className="h-24 mx-auto object-contain"
            />
          </div>

          <div className="bg-blue-600 text-white border-4 border-black px-5 py-3 mb-5 text-center">
            <h2 className="text-lg font-black uppercase mb-1">Dúvidas?</h2>
            <p className="text-sm font-bold leading-snug">
              Converse com seus pais, professores ou procure um profissional de
              saúde.
              <br />
              Estamos aqui para ajudar! 💙
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg font-bold text-gray-700 mb-1">
              Medicina UNIFRAN - M16
            </p>
            <p className="text-sm font-semibold text-gray-700">
              Felipe Gomes, Mara Firmino, Emiliana Rezende, Juliana Volpe,
              <br />
              Clara Prado, Vitor Krempel, Rosa Silva
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/tips")}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-black py-3 px-6 text-lg border-3 border-black"
            >
              <ChevronLeft size={22} className="mr-1" />
              Voltar
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-6 text-lg border-3 border-black"
            >
              <RotateCcw size={22} className="mr-1" />
              Início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
