import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import {
  AUTHORS_LINE1,
  AUTHORS_LINE2,
  COURSE_LABEL,
  LOGO_SRC,
} from "@/data/quiz";
import { PageNav } from "@/components/PageNav";
import { SlideShell } from "@/components/SlideShell";

/** Página Parabéns — layout original, compacto para caber no slide */
export default function Final() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 overflow-hidden">
        <div className="bg-white border-4 border-black shadow-lg w-full max-w-2xl px-6 py-6 sm:px-10 sm:py-8 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-black text-black uppercase leading-none mb-3">
            Parabéns!
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Vocês completaram o quiz! 🎉
          </p>

          <img
            src={LOGO_SRC}
            alt="UNIFRAN Logo"
            className="h-20 sm:h-24 object-contain mb-4"
          />

          <div className="bg-white border-2 border-black px-6 py-1.5 mb-3">
            <p className="text-lg sm:text-xl font-black">Dúvidas?</p>
          </div>

          <p className="text-base sm:text-lg font-bold text-gray-700 mb-1">
            {COURSE_LABEL}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-5 leading-tight text-center">
            <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
            <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
          </p>

          <Link href="/quiz">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-base sm:text-lg border-2 border-black">
              <RotateCcw className="mr-2" size={18} />
              Começar de Novo
            </Button>
          </Link>
        </div>
      </div>

      <div className="shrink-0">
        <PageNav
          backHref="/dicas"
          backLabel="Voltar"
          nextHref="/"
          nextLabel="Voltar à Capa"
        />
      </div>
    </SlideShell>
  );
}
