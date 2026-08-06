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

/** Página Parabéns — preenchendo bem a tela para projeção */
export default function Final() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
        <div className="bg-white border-4 border-black shadow-xl w-full px-8 py-8 sm:px-12 sm:py-10 text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black uppercase leading-none mb-4">
            Parabéns!
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Vocês completaram o quiz! 🎉
          </p>

          <img
            src={LOGO_SRC}
            alt="UNIFRAN Logo"
            className="h-24 sm:h-28 object-contain mb-5"
          />

          <div className="bg-white border-2 border-black px-8 py-2 mb-4">
            <p className="text-xl sm:text-2xl font-black">Dúvidas?</p>
          </div>

          <p className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
            {COURSE_LABEL}
          </p>
          <p className="text-sm sm:text-base font-semibold text-gray-600 mb-6 leading-tight text-center">
            <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
            <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
          </p>

          <Link href="/quiz">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 text-lg sm:text-xl border-2 border-black">
              <RotateCcw className="mr-2" size={20} />
              Começar de Novo
            </Button>
          </Link>
        </div>
      </div>

      <div className="shrink-0 mt-4">
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
