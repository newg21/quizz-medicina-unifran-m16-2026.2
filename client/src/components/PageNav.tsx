import { Link } from "wouter";

type PageNavProps = {
  backHref?: string;
  backLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  /** Botão Próximo maior (ex.: capa) */
  nextSize?: "default" | "large";
};

const backClass =
  "inline-block bg-white border-[3px] border-black px-5 py-2 font-bold cursor-pointer hover:bg-gray-50";

const nextClasses = {
  default:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-3 px-8 text-base border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)]",
  large:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-4 px-12 sm:py-5 sm:px-14 text-lg sm:text-xl border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)]",
} as const;

/** Voltar / Próximo — mesma posição em todas as páginas */
export function PageNav({
  backHref,
  backLabel = "Voltar",
  nextHref,
  nextLabel = "Próximo",
  onBack,
  onNext,
  nextSize = "default",
}: PageNavProps) {
  const nextClass = nextClasses[nextSize];

  return (
    <div className="flex justify-between items-center gap-3 pt-2 w-full">
      {onBack ? (
        <button type="button" onClick={onBack} className={backClass}>
          {backLabel}
        </button>
      ) : backHref ? (
        <Link href={backHref}>
          <span className={backClass}>{backLabel}</span>
        </Link>
      ) : (
        <span />
      )}

      {onNext ? (
        <button type="button" onClick={onNext} className={nextClass}>
          {nextLabel}
        </button>
      ) : nextHref ? (
        <Link href={nextHref}>
          <span className={nextClass}>{nextLabel}</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
