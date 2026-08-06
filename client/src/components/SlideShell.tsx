import type { ReactNode } from "react";

type SlideShellProps = {
  children: ReactNode;
  className?: string;
  /** Conteúdo sem o frame interno (ex.: capa com fundo full-bleed) */
  bare?: boolean;
};

/** Mesmo “slide” em todas as páginas: altura da janela + área útil idêntica */
export const SLIDE_FRAME =
  "w-full h-full max-w-4xl mx-auto px-6 sm:px-8 py-6 sm:py-7 flex flex-col min-h-0 overflow-hidden";

export function SlideShell({
  children,
  className = "",
  bare = false,
}: SlideShellProps) {
  return (
    <div
      className={`h-dvh max-h-dvh w-full overflow-hidden flex flex-col ${className}`}
    >
      {bare ? (
        children
      ) : (
        <div className={SLIDE_FRAME}>{children}</div>
      )}
    </div>
  );
}
