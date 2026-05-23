import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const iconBase = "https://api.iconify.design";

const highlights = [
  {
    icon: "lucide/code-xml",
    label: "No coding needed",
    color: "text-[#ff5a1f]",
    background: "bg-[#fff0e7]",
  },
  {
    icon: "simple-icons/whatsapp",
    label: "WhatsApp ordering",
    color: "text-[#18a957]",
    background: "bg-[#e9f9ef]",
  },
  {
    icon: "lucide/pencil-line",
    label: "Easy menu updates",
    color: "text-[#2364d2]",
    background: "bg-[#eaf1ff]",
  },
];

function WebIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const src = `${iconBase}/${name}.svg`;

  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className ?? ""}`}
      style={
        {
          WebkitMask: `url("${src}") center / contain no-repeat`,
          mask: `url("${src}") center / contain no-repeat`,
        } as CSSProperties
      }
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#151515]">
      <header className="relative z-20 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="ZapMenu home"
            className="relative h-10 w-40 shrink-0 sm:h-14 sm:w-60"
          >
            <Image
              src="/zap-menu-logo.png"
              alt="ZapMenu"
              fill
              preload
              sizes="(min-width: 640px) 240px, 160px"
              className="object-contain object-left"
            />
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden h-11 items-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 min-[420px]:inline-flex"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#ff4f2e] px-4 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(255,79,46,0.16)] transition-colors hover:bg-[#f04424] sm:h-11 sm:px-5"
            >
              Sign Up
              <WebIcon name="lucide/arrow-right" className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(125deg,#fffaf5_0%,#fff6ef_34%,#f7fbf5_62%,#eef7ff_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,21,0.035)_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:48px_48px]"
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1280px] items-center gap-8 px-4 py-10 sm:min-h-[calc(100vh-5rem)] sm:px-8 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-10 lg:py-14">
          <div className="relative z-10 mx-auto max-w-[610px] text-center lg:mx-0 lg:text-left">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#25d366]/25 bg-white/90 px-3 py-2 text-xs font-semibold text-[#168a44] shadow-sm sm:px-4 sm:text-sm">
              <WebIcon name="simple-icons/whatsapp" className="h-4 w-4" />
              <span className="truncate">WhatsApp-powered digital menus</span>
            </div>

            <h1 className="mx-auto mt-5 max-w-[12ch] text-[2.65rem] font-bold leading-none text-[#141414] sm:mt-6 sm:text-6xl lg:mx-0 lg:text-7xl">
              Launch your menu online in minutes
            </h1>

            <p className="mx-auto mt-5 max-w-[36rem] text-base leading-7 text-[#594b43] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Create a colorful, mobile-friendly restaurant menu that customers
              can browse, order from, and send straight to WhatsApp.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:justify-center sm:mt-8 lg:justify-start">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ff4f2e] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,79,46,0.18)] transition-colors hover:bg-[#f04424]"
              >
                Get Started Free
                <WebIcon name="lucide/rocket" className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#ff7a45]/25 bg-white/90 px-6 text-sm font-semibold text-[#202020] shadow-sm transition-colors hover:bg-white"
              >
                Try Demo
                <WebIcon
                  name="lucide/play-circle"
                  className="h-4 w-4 text-[#ff5a1f]"
                />
              </Link>
            </div>

            <div className="mx-auto mt-7 grid max-w-[610px] gap-3 sm:mt-8 sm:grid-cols-3 lg:mx-0">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 text-sm font-semibold text-[#3c3c3c] shadow-sm sm:justify-start"
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full ${item.background} ${item.color}`}
                  >
                    <WebIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none relative z-0 mx-auto h-[360px] w-full max-w-[440px] sm:h-[520px] sm:max-w-[620px] md:h-[590px] lg:h-[690px] lg:max-w-none">
            <Image
              src="/hero_img.png"
              alt="ZapMenu restaurant menu mockup"
              fill
              priority
              sizes="(min-width: 1024px) 650px, (min-width: 768px) 620px, (min-width: 640px) 86vw, 94vw"
              className="select-none object-contain object-center lg:object-right-bottom"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-3 px-4 py-5 text-center text-sm text-zinc-600 sm:px-8 lg:justify-start lg:px-10">
        <span className="font-semibold text-zinc-900">Built for fast setup</span>
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
        <span>Menus, order flow, and updates stay simple for daily use.</span>
      </section>
    </main>
  );
}
