import { Apple, Clock, Droplets, Scale } from "lucide-react";
import { tips } from "@/data/quiz";
import { PageNav } from "@/components/PageNav";
import { SlideShell } from "@/components/SlideShell";

const iconMap = {
  apple: Apple,
  droplets: Droplets,
  clock: Clock,
  scale: Scale,
};

export default function Tips() {
  return (
    <SlideShell className="bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="bg-yellow-400 border-[3px] border-black px-5 py-3 w-full text-center shadow-md shrink-0">
        <h1 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
          Dicas de Ouro da Medicina UNIFRAN
        </h1>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-3 overflow-hidden">
        {tips.map((tip) => {
          const Icon = iconMap[tip.icon];
          return (
            <div
              key={tip.title}
              className="bg-white border-[3px] border-black px-4 py-4 shadow-md overflow-hidden flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-2 shrink-0">
                <Icon
                  className="text-blue-600 shrink-0"
                  size={24}
                  strokeWidth={2.25}
                />
                <h2 className="text-base sm:text-lg font-black uppercase text-blue-600 leading-tight">
                  {tip.title}
                </h2>
              </div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base leading-snug">
                {tip.text}
              </p>
            </div>
          );
        })}
      </div>

      <PageNav
        backHref="/quiz"
        backLabel="Voltar"
        nextHref="/final"
        nextLabel="Próximo"
      />
    </SlideShell>
  );
}
