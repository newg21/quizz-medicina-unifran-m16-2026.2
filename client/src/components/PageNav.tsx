import type { ReactNode } from "react";
import { Link } from "wouter";

type PageNavProps = {
  backHref?: string;
  backLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextSize?: "default" | "large";
  center?: ReactNode;
};

const backClass =
  "inline-block bg-white border-[3px] border-black px-6 py-2.5 font-bold text-base cursor-pointer hover:bg-gray-50 shrink-0";

const nextClasses = {
  default:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-3 px-10 text-base border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)] shrink-0",
  large:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-4 px-12 sm:py-5 sm:px-14 text-lg sm:text-xl border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)] shrink-0",
} as const;

/** Voltar / (opcional centro) / Próximo — alinhado para projeção */
export function PageNav({
  backHref,
  backLabel = "Voltar",
  nextHref,
  nextLabel = "Próximo",
  onBack,
  onNext,
  nextSize = "default",
  center,
}: PageNavProps) {
  const nextClass = nextClasses[nextSize];

  const back = onBack ? (
    <button type="button" onClick={onBack} className={backClass}>
      {backLabel}
    </button>
  ) : backHref ? (
    <Link href={backHref}>
      <span className={backClass}>{backLabel}</span>
    </Link>
  ) : (
    <span className="w-[7rem] shrink-0" />
  );

  const next = onNext ? (
    <button type="button" onClick={onNext} className={nextClass}>
      {nextLabel}
    </button>
  ) : nextHref ? (
    <Link href={nextHref}>
      <span className={nextClass}>{nextLabel}</span>
    </Link>
  ) : (
    <span className="w-[7rem] shrink-0" />
  );

  return (
    <div className="flex justify-between items-center gap-4 pt-2 w-full">
      {back}
      {center ? (
        <div className="flex-1 flex justify-center min-w-0">{center}</div>
      ) : null}
      {next}
    </div>
  );
}
