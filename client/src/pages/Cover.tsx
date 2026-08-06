import { AUTHORS_LINE1, AUTHORS_LINE2, COURSE_LABEL, LOGO_SRC } from "@/data/quiz";
import { PageNav } from "@/components/PageNav";

/** Capa — distâncias ajustadas conforme pedido (somente esta página) */
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

      <div className="relative h-full w-full max-w-4xl mx-auto px-6 sm:px-8 py-8 sm:py-10 flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8 pt-10 sm:pt-16">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="bg-[#F7E14A] border-[3px] border-black px-5 py-4 w-fit -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.12)] ml-3 sm:ml-5">
              <h1 className="text-[2.65rem] sm:text-5xl md:text-[3.65rem] font-black uppercase leading-[0.95] tracking-tight text-black">
                Puberdade
                <br />& Adolescência
              </h1>
            </div>

            <div className="bg-white border-[3px] border-black px-4 py-2 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)] ml-7 sm:ml-11">
              <p className="text-[1.35rem] sm:text-[1.7rem] font-black text-black">
                Verdade ou Mito?
              </p>
            </div>

            {/* mesma altura; só deslocados levemente à direita */}
            <div className="flex flex-col gap-3 mt-11 sm:mt-12 ml-14 sm:ml-20">
              <div className="bg-white border-[3px] border-black px-4 py-2.5 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
                <p className="text-base sm:text-lg font-black uppercase tracking-wide text-black">
                  {COURSE_LABEL}
                </p>
              </div>

              <div className="bg-white border-[3px] border-black px-5 py-3.5 w-fit shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
                <p className="text-[0.9375rem] font-semibold text-black leading-tight">
                  <span className="block whitespace-nowrap">{AUTHORS_LINE1}</span>
                  <span className="block whitespace-nowrap">{AUTHORS_LINE2}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-[3px] border-black p-4 w-44 sm:w-52 md:w-60 shrink-0 self-center sm:self-start shadow-[4px_4px_0_rgba(0,0,0,0.12)]">
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
