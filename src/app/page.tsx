import { Scene } from "@/components/Scene";

export default function Home() {
  return (
    <>
      <Scene />

      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 z-10">
        {/* Decorative stars */}
        <div className="flex gap-4 mb-4">
          <span className="text-yellow-300 text-lg animate-pulse">✦</span>
          <span className="text-yellow-400 text-2xl animate-pulse delay-100">
            ★
          </span>
          <span className="text-yellow-300 text-lg animate-pulse delay-200">
            ✦
          </span>
        </div>

        {/* Main Title */}
        <h1 className="title-text text-center">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl text-amber-300"
            style={{
              textShadow:
                "0 0 40px rgba(251,191,36,0.6), 0 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            Jiwon
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-amber-200 -mt-2"
            style={{
              textShadow:
                "0 0 50px rgba(251,191,36,0.7), 0 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            Jeong
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-slate-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          A Little Prince Story
        </p>
      </div>
    </>
  );
}
