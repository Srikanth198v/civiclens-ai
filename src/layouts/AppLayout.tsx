import type { ReactNode } from 'react';
import { ArrowUpRight, ScanEye } from 'lucide-react';

type AppLayoutProps = { children: ReactNode };

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#17211d]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a className="flex items-center gap-2.5" href="#home" aria-label="CivicLens AI home">
          <span className="grid size-9 place-items-center rounded-xl bg-[#174c3c] text-[#d5f27c]"><ScanEye size={19} strokeWidth={2.2} /></span>
          <span className="text-[15px] font-bold tracking-[-0.04em]">civiclens<span className="text-[#79934d]">.ai</span></span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-[#68736d] md:flex">
          <a className="transition hover:text-[#174c3c]" href="#how-it-works">How it works</a>
          <a className="transition hover:text-[#174c3c]" href="#issues">Issue areas</a>
          <a className="transition hover:text-[#174c3c]" href="#about">Our approach</a>
        </nav>
        <a className="inline-flex items-center gap-2 rounded-full border border-[#dfe5dc] bg-white px-4 py-2.5 text-xs font-semibold transition hover:border-[#174c3c]" href="#report">
          Get involved <ArrowUpRight size={14} />
        </a>
      </header>
      <main>{children}</main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#e5e9e3] px-5 py-7 text-xs text-[#68736d] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>© {new Date().getFullYear()} CivicLens AI. A community-first project foundation.</p>
        <p>Built for clearer streets and stronger communities.</p>
      </footer>
    </div>
  );
}
