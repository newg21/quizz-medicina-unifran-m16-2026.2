import type { ReactNode } from "react";

type SlideShellProps = {
  children: ReactNode;
  className?: string;
  bare?: boolean;
};

/** Quadro largo para projeção (16:9) — mesma área em todas as páginas */
export const SLIDE_FRAME =
  "w-full h-full max-w-6xl mx-auto px-8 sm:px-10 lg:px-12 py-5 sm:py-6 flex flex-col min-h-0 overflow-hidden";

export function SlideShell({
  children,
  className = "",
  bare = false,
}: SlideShellProps) {
  return (
    <div
      className={`h-dvh max-h-dvh w-full overflow-hidden flex flex-col ${className}`}
    >
      {bare ? children : <div className={SLIDE_FRAME}>{children}</div>}
    </div>
  );
}
