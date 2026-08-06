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

export default function Final() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
        <div className="bg-white border-[3px] border-black shadow-lg w-full max-w-3xl mx-auto px-6 py-6 sm:px-8 sm:py-7 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-black text-black uppercase leading-none mb-2">
            Parabéns!
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Vocês completaram o quiz! 🎉
          </p>

          <img
            src={LOGO_SRC}
            alt="UNIFRAN Logo"
            className="h-20 sm:h-24 object-contain mb-3"
          />

          <div className="bg-white border-2 border-black px-5 py-1.5 mb-3">
            <p className="text-lg font-black">Dúvidas?</p>
          </div>

          <p className="text-base font-bold text-gray-700 mb-0.5">
            {COURSE_LABEL}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-4 leading-tight text-center">
            <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
            <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
          </p>

          <Link href="/quiz">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-7 text-base border-2 border-black">
              <RotateCcw className="mr-2" size={16} />
              Começar de Novo
            </Button>
          </Link>
        </div>
      </div>

      <PageNav
        backHref="/dicas"
        backLabel="Voltar"
        nextHref="/"
        nextLabel="Voltar à Capa"
      />
    </SlideShell>
  );
}
