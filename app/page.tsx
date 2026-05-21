import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <section className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <Image
          src="/zap-menu.png"
          alt="ZapMenu logo"
          width={512}
          height={512}
          className="h-auto w-full max-w-md rounded-3xl shadow-2xl shadow-black/40"
          priority
        />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            ZapMenu
          </h1>
        </div>
      </section>
    </main>
  );
}
