import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Cover() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Side - Title */}
          <div>
            <div className="bg-yellow-400 border-4 border-black p-4 md:p-6 mb-4 md:mb-6 shadow-xl">
              <h1 className="text-3xl md:text-5xl font-black text-black uppercase leading-snug">
                Puberdade &<br />Adolescência
              </h1>
            </div>
            <div className="bg-white border-4 border-black p-4 md:p-6 shadow-lg mb-6 md:mb-8">
              <p className="text-2xl md:text-3xl font-black text-black uppercase">
                Verdade ou Mito?
              </p>
            </div>
            <Button
              onClick={() => navigate("/como-funciona")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 md:py-4 px-6 text-base md:text-lg border-3 border-black shadow-lg flex items-center justify-center gap-2"
            >
              Começar
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-center justify-center order-first md:order-none">
            <div className="bg-white border-4 border-black p-5 md:p-8 shadow-xl">
              <img
                src="/manus-storage/unifran-logo_10c6e59e.png"
                alt="UNIFRAN Logo"
                className="h-40 md:h-64 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="font-black text-gray-700 text-base md:text-lg uppercase">
            Medicina UNIFRAN - M16
          </p>
          <p className="font-semibold text-gray-600 text-xs md:text-sm mt-2 px-2">
            Felipe Gomes, Mara Firmino, Emiliana Rezende, Juliana Volpe,<br />
            Clara Prado, Vitor Krempel, Rosa Silva
          </p>
        </div>
      </div>
    </div>
  );
}
