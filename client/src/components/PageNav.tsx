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
  "inline-block bg-white border-[3px] border-black px-5 py-2 font-bold text-sm sm:text-base cursor-pointer hover:bg-gray-50 shrink-0";

const nextClasses = {
  default:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-2.5 px-8 text-sm sm:text-base border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)] shrink-0",
  large:
    "inline-block bg-[#F7E14A] hover:bg-yellow-300 text-black font-black uppercase py-3 px-10 text-base sm:text-lg border-[3px] border-black cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.15)] shrink-0",
} as const;

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
    <span className="w-24 shrink-0" />
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
    <span className="w-24 shrink-0" />
  );

  return (
    <div className="flex justify-between items-center gap-3 w-full shrink-0">
      {back}
      {center ? (
        <div className="flex-1 flex justify-center min-w-0">{center}</div>
      ) : null}
      {next}
    </div>
  );
}
