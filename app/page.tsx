import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const iconBase = "https://api.iconify.design";
const youtubeEmbedUrl =
  "https://www.youtube-nocookie.com/embed/-9uJVj3ModI?rel=0&modestbranding=1&playsinline=1&controls=1";

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

const featureCards = [
  {
    icon: "simple-icons/whatsapp",
    title: "WhatsApp Ordering",
    text: "Let customers browse your menu, place orders, and chat with you directly on WhatsApp.",
    accent: "bg-[#e9f9ef]",
    iconColor: "text-[#25d366]",
  },
  {
    icon: "lucide/qr-code",
    title: "QR Menu",
    text: "Create a QR code for your menu so customers can scan, browse, and order instantly.",
    accent: "bg-[#fff1e8]",
    iconColor: "text-[#ff5a1f]",
  },
  {
    icon: "lucide/pencil-line",
    title: "Real-time Menu Updates",
    text: "Update menu items, prices, and availability in real-time. Changes reflect instantly.",
    accent: "bg-[#eaf1ff]",
    iconColor: "text-[#3b82f6]",
  },
  {
    icon: "lucide/credit-card",
    title: "Online Payments",
    text: "Accept secure online payments through multiple payment gateways with ease.",
    accent: "bg-[#f2e9ff]",
    iconColor: "text-[#8b5cf6]",
  },
  {
    icon: "lucide/bar-chart-3",
    title: "Analytics Dashboard",
    text: "Track orders, revenue, popular items, and customer insights from one dashboard.",
    accent: "bg-[#fff7df]",
    iconColor: "text-[#f59e0b]",
  },
  {
    icon: "lucide/store",
    title: "Multi-Branch Support",
    text: "Manage multiple branches, menus, and orders from a single zapMenu account.",
    accent: "bg-[#ffe8ea]",
    iconColor: "text-[#ef4444]",
    badge: "Coming soon",
  },
] as const;

const howItWorksSteps = [
  {
    step: "STEP 1",
    title: "Create Your Restaurant",
    text: "Sign up and set up your restaurant profile in just a few minutes.",
    icon: "lucide/store",
  },
  {
    step: "STEP 2",
    title: "Add Menu Items & Prices",
    text: "Add menu items, descriptions, images, and prices easily.",
    icon: "lucide/burger",
  },
  {
    step: "STEP 3",
    title: "Share QR Code & Receive Orders",
    text: "Customers scan your QR code, browse the menu, and order through WhatsApp instantly.",
    icon: "lucide/qr-code",
  },
] as const;

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

      <section className="relative overflow-hidden bg-[linear-gradient(125deg,#fffaf5_0%,#fff6ef_34%,#f7fbf5_62%,#eef7ff_100%)]">
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
              Launch your menu <span className="text-[#ff5a1f]">Online</span> in minutes
            </h1>

            <p className="mx-auto mt-5 max-w-[36rem] text-base leading-7 text-[#594b43] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Create a beautiful, mobile-friendly digital menu for your restaurant. Let customers
              browse and order through WhatsApp without complicated setup.
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
                <WebIcon name="lucide/play-circle" className="h-4 w-4 text-[#ff5a1f]" />
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

      <section className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(125deg,#fffaf5_0%,#fff6ef_34%,#f7fbf5_62%,#eef7ff_100%)] py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,21,0.035)_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a1f]/15 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#ff5a1f] shadow-sm">
              <WebIcon name="lucide/zap" className="h-4 w-4" />
              Powerful Features
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Everything You Need to
              <br className="hidden sm:block" />
              Run Your Restaurant <span className="text-[#ff5a1f]">Smarter</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              zapMenu gives you all the tools to manage your menu, orders, and customers in one
              simple platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/95 p-7 shadow-[0_18px_45px_rgba(17,17,17,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(17,17,17,0.12)]"
              >
                <div className="pointer-events-none absolute right-6 top-6 h-5 w-5 rounded-full bg-[#d9f8e4] opacity-90 transition-transform duration-300 group-hover:scale-125" />
                <div
                  className={`grid h-24 w-24 place-items-center rounded-[1.5rem] ${feature.accent} text-4xl shadow-[0_16px_28px_rgba(17,17,17,0.06)]`}
                >
                  <WebIcon name={feature.icon} className={`h-11 w-11 ${feature.iconColor}`} />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-7 text-[#4b5563]">{feature.text}</p>
                {"badge" in feature ? (
                  <span className="mt-6 inline-flex rounded-full bg-[#fff1e8] px-3 py-1.5 text-sm font-semibold text-[#ff5a1f]">
                    {feature.badge}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(125deg,#fffaf5_0%,#fff6ef_34%,#f7fbf5_62%,#eef7ff_100%)] py-20 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,21,0.035)_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a1f]/15 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#ff5a1f] shadow-sm">
              <WebIcon name="lucide/zap" className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              From setup to serving orders - zapMenu makes it easy for restaurants to launch a
              digital menu in minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[1.95rem] top-6 hidden h-[calc(100%-3rem)] border-l-2 border-dotted border-[#ff7a00]/30 sm:block"
              />

              <div className="space-y-5">
                {howItWorksSteps.map((item, index) => (
                  <article
                    key={item.title}
                    className="relative grid grid-cols-[auto_1fr] gap-5 rounded-[1.75rem] border border-black/5 bg-white/95 p-5 shadow-[0_18px_45px_rgba(17,17,17,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(17,17,17,0.12)] sm:p-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="grid h-16 w-16 place-items-center rounded-[1.35rem] bg-[#fff1e8] text-[#ff5a1f] shadow-[0_16px_28px_rgba(17,17,17,0.05)]">
                        <WebIcon name={item.icon} className="h-8 w-8" />
                      </div>
                      {index < howItWorksSteps.length - 1 ? (
                        <span className="mt-4 h-16 border-l-2 border-dotted border-[#ff5a1f]/45" />
                      ) : null}
                    </div>

                    <div className="pt-1">
                      <span className="inline-flex rounded-full bg-[#fff1e8] px-3 py-1 text-sm font-bold text-[#ff5a1f]">
                        {item.step}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-7 text-[#4b5563]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-[#ff7a00]/10 blur-3xl"
              />

              <div className="relative mx-auto max-w-[760px]">
                <div className="rounded-[1.75rem] border border-black/5 bg-white/95 p-4 shadow-[0_18px_45px_rgba(17,17,17,0.07)] sm:p-5">
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#130d09] shadow-[0_22px_50px_rgba(0,0,0,0.12)]">
                    <div className="relative aspect-[16/10] bg-black">
                      <iframe
                        src={youtubeEmbedUrl}
                        title="zapMenu demo video"
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3 text-center text-lg text-[#4b5563]">
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#ff5a1f] text-[#ff5a1f]">
                    <WebIcon name="lucide/play" className="h-4 w-4" />
                  </span>
                  <p>Watch how zapMenu helps restaurants go digital in minutes.</p>
                  <WebIcon name="lucide/arrow-up-right" className="h-7 w-7 text-[#ff5a1f]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
