import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  AUTHORS_LINE1,
  AUTHORS_LINE2,
  COURSE_LABEL,
  LOGO_SRC,
  questions,
} from "@/data/quiz";
import { PageNav } from "@/components/PageNav";
import { SlideShell } from "@/components/SlideShell";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current = questions[currentIndex];
  const isVerdade = current.answer === "Verdade";

  const handleReveal = () => setRevealed(true);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setRevealed(false);
    } else {
      setLocation("/como-funciona");
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    } else {
      setLocation("/dicas");
    }
  };

  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <header className="flex items-center justify-between gap-4 mb-4 shrink-0 w-full">
        <img
          src={LOGO_SRC}
          alt="UNIFRAN Logo"
          className="h-12 sm:h-14 object-contain"
        />
        <div className="text-right">
          <p className="font-bold text-gray-700 text-sm sm:text-base">
            Pergunta {currentIndex + 1} de {questions.length}
          </p>
          <div className="w-52 sm:w-64 h-2.5 bg-gray-300 border-2 border-black mt-1 ml-auto">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      <section className="bg-white border-4 border-black shadow-xl px-5 py-5 sm:px-6 sm:py-6 mb-3 flex-1 min-h-0 flex flex-col overflow-hidden w-full">
        {/* Pergunta + resposta juntas no topo, com distância fixa — sem “buraco” no meio */}
        <div className="shrink-0 flex flex-col gap-4">
          <div>
            <span className="inline-block bg-blue-600 text-white font-black px-3 py-1.5 border-2 border-black mb-3 w-fit text-sm">
              PERGUNTA {currentIndex + 1}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[1.7rem] font-black text-black leading-snug w-full">
              {current.text}
            </h2>
          </div>

          {!revealed ? (
            <Button
              onClick={handleReveal}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 text-xl border-2 border-black shadow-lg"
            >
              Revelar Resposta
            </Button>
          ) : (
            <div className="flex flex-col gap-3">
              <div
                className={`w-full px-4 py-3 border-4 border-black ${
                  isVerdade
                    ? "bg-blue-600 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider">
                  Resposta:
                </p>
                <p className="text-2xl sm:text-3xl font-black uppercase leading-none mt-0.5">
                  {current.answer}!
                </p>
              </div>

              <div className="w-full bg-gray-100 border-2 border-black px-4 py-3">
                <h3 className="font-black text-black mb-1 uppercase text-sm">
                  Por quê?
                </h3>
                <p className="text-gray-800 text-sm sm:text-base leading-snug font-semibold">
                  {current.explanation}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 min-h-0" aria-hidden />
      </section>

      <div className="mb-2 shrink-0 w-full flex justify-center">
        <div className="bg-white border-2 border-black px-4 py-2.5 w-fit text-center">
          <p className="font-black text-black text-sm uppercase tracking-wide">
            {COURSE_LABEL}
          </p>
          <p className="text-gray-800 font-semibold text-[12px] sm:text-[13px] mt-1 leading-tight">
            <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
            <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
          </p>
        </div>
      </div>

      <footer className="shrink-0 w-full">
        <PageNav
          onBack={handleBack}
          backLabel="Voltar"
          onNext={handleNext}
          nextLabel={
            currentIndex === questions.length - 1 ? "Finalizar" : "Próximo"
          }
        />
      </footer>
    </SlideShell>
  );
}
