import { FileText, CircleHelp, Lightbulb } from "lucide-react";
import { PageNav } from "@/components/PageNav";
import { SlideShell } from "@/components/SlideShell";

export default function HowItWorks() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="bg-yellow-400 border-4 border-black px-6 py-4 mb-5 w-full shadow-lg shrink-0">
        <h1 className="text-3xl sm:text-4xl font-black uppercase text-black tracking-tight">
          Como funciona a brincadeira?
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0 mb-5 overflow-hidden">
        <div className="bg-blue-600 text-white border-4 border-black p-6 flex flex-col items-center text-center overflow-hidden shadow-lg">
          <span className="text-6xl sm:text-7xl font-black leading-none mb-4">
            1
          </span>
          <p className="font-black uppercase text-lg sm:text-2xl leading-snug flex-1 flex items-center">
            Vamos apresentar afirmações sobre o corpo.
          </p>
          <FileText className="mt-4 shrink-0" size={42} strokeWidth={2} />
        </div>

        <div className="bg-white text-black border-4 border-black p-6 flex flex-col items-center text-center overflow-hidden shadow-lg">
          <span className="text-6xl sm:text-7xl font-black leading-none mb-4">
            2
          </span>
          <p className="font-black uppercase text-lg sm:text-2xl leading-snug flex-1 flex items-center">
            Vocês decidem: é verdade ou mito?
          </p>
          <CircleHelp className="mt-4 shrink-0" size={42} strokeWidth={2} />
        </div>

        <div className="bg-yellow-400 text-black border-4 border-black p-6 flex flex-col items-center text-center overflow-hidden shadow-lg">
          <span className="text-6xl sm:text-7xl font-black leading-none mb-4">
            3
          </span>
          <p className="font-black uppercase text-lg sm:text-2xl leading-snug flex-1 flex items-center">
            Revelamos a resposta e explicamos o porquê!
          </p>
          <Lightbulb className="mt-4 shrink-0" size={42} strokeWidth={2} />
        </div>
      </div>

      <div className="shrink-0">
        <PageNav
          backHref="/"
          backLabel="Voltar"
          nextHref="/quiz"
          nextLabel="Próximo"
        />
      </div>
    </SlideShell>
  );
}
