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
      <header className="flex items-center justify-between gap-3 shrink-0 w-full">
        <img
          src={LOGO_SRC}
          alt="UNIFRAN Logo"
          className="h-11 sm:h-12 object-contain"
        />
        <div className="text-right">
          <p className="font-bold text-gray-700 text-sm sm:text-base">
            Pergunta {currentIndex + 1} de {questions.length}
          </p>
          <div className="w-48 sm:w-56 h-2.5 bg-gray-300 border-2 border-black mt-1 ml-auto">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      <section className="bg-white border-[3px] border-black shadow-lg px-5 py-4 sm:px-6 sm:py-5 flex-1 min-h-0 flex flex-col overflow-hidden w-full">
        <span className="inline-block bg-blue-600 text-white font-black px-3 py-1 border-2 border-black mb-2.5 w-fit text-xs sm:text-sm shrink-0">
          PERGUNTA {currentIndex + 1}
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-black leading-snug shrink-0 mb-3">
          {current.text}
        </h2>

        <div className="flex flex-col gap-2.5 shrink-0">
          {!revealed ? (
            <Button
              onClick={handleReveal}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 text-lg border-2 border-black shadow-md"
            >
              Revelar Resposta
            </Button>
          ) : (
            <>
              <div
                className={`w-full px-4 py-2.5 border-[3px] border-black ${
                  isVerdade
                    ? "bg-blue-600 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-wider">
                  Resposta:
                </p>
                <p className="text-2xl sm:text-[1.75rem] font-black uppercase leading-none mt-0.5">
                  {current.answer}!
                </p>
              </div>

              <div className="w-full bg-gray-100 border-2 border-black px-4 py-2.5">
                <h3 className="font-black text-black mb-1 uppercase text-sm">
                  Por quê?
                </h3>
                <p className="text-gray-800 text-sm sm:text-base leading-snug font-semibold">
                  {current.explanation}
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-auto pt-3 shrink-0 flex justify-center">
          <div className="bg-white border-2 border-black px-3 py-1.5 w-fit text-center">
            <p className="font-black text-black text-xs uppercase tracking-wide">
              {COURSE_LABEL}
            </p>
            <p className="text-gray-700 font-semibold text-[11px] sm:text-xs mt-0.5 leading-tight">
              <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
              <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
            </p>
          </div>
        </div>
      </section>

      <PageNav
        onBack={handleBack}
        backLabel="Voltar"
        onNext={handleNext}
        nextLabel={
          currentIndex === questions.length - 1 ? "Finalizar" : "Próximo"
        }
      />
    </SlideShell>
  );
}
