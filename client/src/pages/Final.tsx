import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { RotateCcw, ChevronLeft } from "lucide-react";

export default function Final() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="bg-white border-4 border-black shadow-xl p-4 text-center mb-4">
          <div className="mb-3">
            <div className="bg-yellow-400 border-4 border-black p-2 inline-block mb-2">
              <h1 className="text-3xl font-black text-black uppercase">
                Parabéns!
              </h1>
            </div>
          </div>

          <p className="text-lg font-black text-black mb-3 uppercase">
            Você completou o quiz! 🎉
          </p>

          <div className="mb-4">
            <img
              src="/manus-storage/unifran-logo_10c6e59e.png"
              alt="UNIFRAN Logo"
              className="h-20 mx-auto object-contain"
            />
          </div>

          <div className="bg-blue-600 text-white border-4 border-black p-3 mb-3 text-center">
            <h2 className="text-xs font-black uppercase mb-1">Dúvidas?</h2>
            <p className="text-xs font-bold leading-tight">
              Converse com seus pais, professores ou procure um profissional de saúde.<br />
              Estamos aqui para ajudar! 💙
            </p>
          </div>

          <div className="text-center pt-2">
            <p className="text-sm font-black text-gray-700 mb-1 uppercase">
              Medicina UNIFRAN - M16
            </p>
            <p className="text-xs font-semibold text-gray-700">
              Felipe Gomes, Mara Firmino, Emiliana Rezende, Juliana Volpe,<br />
              Clara Prado, Vitor Krempel, Rosa Silva
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <Button
            onClick={() => navigate("/tips")}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            <ChevronLeft size={24} />
            Voltar
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw size={24} />
            Início
          </Button>
        </div>
      </div>
    </div>
  );
}
