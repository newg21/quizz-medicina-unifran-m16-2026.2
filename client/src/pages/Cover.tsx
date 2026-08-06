import { AUTHORS_LINE1, AUTHORS_LINE2, COURSE_LABEL, LOGO_SRC } from "@/data/quiz";
import { PageNav } from "@/components/PageNav";

/** Capa — compacta e proporcional, mantendo os deslocamentos pedidos */
export default function Cover() {
  return (
    <div className="h-dvh relative overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(122deg, #ffffff 0%, #ffffff 48%, #5BA3E0 48%, #5BA3E0 100%)",
        }}
      />

      <div className="relative h-full w-full max-w-5xl mx-auto px-6 sm:px-8 py-6 sm:py-8 flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pt-8 sm:pt-12">
          <div className="flex flex-col gap-2.5 max-w-xl">
            <div className="bg-[#F7E14A] border-[3px] border-black px-5 py-3.5 w-fit -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.12)] ml-3 sm:ml-5">
              <h1 className="text-[2.4rem] sm:text-[2.85rem] md:text-[3.25rem] font-black uppercase leading-[0.95] tracking-tight text-black">
                Puberdade
                <br />& Adolescência
              </h1>
            </div>

            <div className="bg-white border-[3px] border-black px-4 py-2 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)] ml-7 sm:ml-11">
              <p className="text-xl sm:text-2xl font-black text-black">
                Verdade ou Mito?
              </p>
            </div>

            <div className="flex flex-col gap-2.5 mt-8 sm:mt-10 ml-14 sm:ml-20">
              <div className="bg-white border-[3px] border-black px-4 py-2 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
                <p className="text-base sm:text-lg font-black uppercase tracking-wide text-black">
                  {COURSE_LABEL}
                </p>
              </div>

              <div className="bg-white border-[3px] border-black px-4 py-2.5 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
                <p className="text-[0.8125rem] sm:text-sm font-semibold text-black leading-tight">
                  <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
                  <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-[3px] border-black p-3.5 w-40 sm:w-48 md:w-52 shrink-0 self-center sm:self-start shadow-[4px_4px_0_rgba(0,0,0,0.12)]">
            <img
              src={LOGO_SRC}
              alt="UNIFRAN Universidade de Franca"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="shrink-0">
          <PageNav
            nextHref="/como-funciona"
            nextLabel="Próximo"
            nextSize="large"
          />
        </div>
      </div>
    </div>
  );
}
