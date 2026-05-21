import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="border-b border-zinc-200/70 bg-white">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-10">
          <a
            href="/"
            className="relative h-[64px] w-[250px] min-w-0 overflow-hidden sm:w-[278px] lg:w-[312px]"
            aria-label="ZapMenu home"
          >
            <Image
              src="/zap-menu-logo.png"
              alt="ZapMenu"
              priority
              fill
              sizes="(min-width: 1024px) 312px, (min-width: 640px) 278px, 250px"
              className="object-contain object-left-center"
            />
          </a>

          <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              className="h-9 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:bg-zinc-50 sm:h-10 sm:px-5"
            >
              Sign In
            </button>
            <button
              type="button"
              className="h-9 rounded-lg bg-[#ff4b1f] px-4 text-sm font-semibold text-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-[#ff5a2d] sm:h-10 sm:px-5"
            >
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-78px)] max-w-[1440px] items-center justify-center px-4 sm:px-8 lg:px-10">
        <div className="w-full rounded-[32px] border border-dashed border-zinc-200 bg-zinc-50/40 p-10" />
      </section>
    </main>
  );
}
