import { FileText, CircleHelp, Lightbulb } from "lucide-react";
import { PageNav } from "@/components/PageNav";
import { SlideShell } from "@/components/SlideShell";

export default function HowItWorks() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="bg-yellow-400 border-[3px] border-black px-5 py-3 w-full shadow-md shrink-0">
        <h1 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
          Como funciona a brincadeira?
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0 overflow-hidden">
        <div className="bg-blue-600 text-white border-[3px] border-black p-4 flex flex-col items-center text-center overflow-hidden shadow-md">
          <span className="text-5xl font-black leading-none mb-2">1</span>
          <p className="font-black uppercase text-base sm:text-lg leading-snug flex-1 flex items-center">
            Vamos apresentar afirmações sobre o corpo.
          </p>
          <FileText className="mt-2 shrink-0" size={32} strokeWidth={2} />
        </div>

        <div className="bg-white text-black border-[3px] border-black p-4 flex flex-col items-center text-center overflow-hidden shadow-md">
          <span className="text-5xl font-black leading-none mb-2">2</span>
          <p className="font-black uppercase text-base sm:text-lg leading-snug flex-1 flex items-center">
            Vocês decidem: é verdade ou mito?
          </p>
          <CircleHelp className="mt-2 shrink-0" size={32} strokeWidth={2} />
        </div>

        <div className="bg-yellow-400 text-black border-[3px] border-black p-4 flex flex-col items-center text-center overflow-hidden shadow-md">
          <span className="text-5xl font-black leading-none mb-2">3</span>
          <p className="font-black uppercase text-base sm:text-lg leading-snug flex-1 flex items-center">
            Revelamos a resposta e explicamos o porquê!
          </p>
          <Lightbulb className="mt-2 shrink-0" size={32} strokeWidth={2} />
        </div>
      </div>

      <PageNav
        backHref="/"
        backLabel="Voltar"
        nextHref="/quiz"
        nextLabel="Próximo"
      />
    </SlideShell>
  );
}
