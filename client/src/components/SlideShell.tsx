import type { ReactNode } from "react";

type SlideShellProps = {
  children: ReactNode;
  className?: string;
  bare?: boolean;
};

/** Quadro compacto e proporcional para projeção */
export const SLIDE_FRAME =
  "w-full h-full max-w-5xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex flex-col min-h-0 overflow-hidden gap-3";

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
