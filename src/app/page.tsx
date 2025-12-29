// app/page.tsx
import { Scene } from "@/components/Scene";

export default function Home() {
  return (
    <>
      <Scene />

      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 z-10">
        {/* Hanging Stars Container */}
        <div className="absolute top-0 left-0 w-full h-96 overflow-visible">
          {/* Far left */}
          <div className="hanging-star absolute top-0 left-[5%]">
            <div className="star-string h-44 w-px bg-gradient-to-b from-transparent via-yellow-400/50 to-yellow-400"></div>
            <span className="text-yellow-400 text-4xl block">★</span>
          </div>

          {/* Left */}
          <div className="hanging-star-slow absolute top-0 left-[12%]">
            <div className="star-string h-64 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-amber-300"></div>
            <span className="text-amber-300 text-5xl block">★</span>
          </div>

          {/* Left-center */}
          <div className="hanging-star absolute top-0 left-[22%]">
            <div className="star-string h-36 w-px bg-gradient-to-b from-transparent via-yellow-300/50 to-yellow-300"></div>
            <span className="text-yellow-300 text-3xl block">✦</span>
          </div>

          {/* Left of center */}
          <div className="hanging-star-slow absolute top-0 left-[32%]">
            <div className="star-string h-52 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-amber-400"></div>
            <span className="text-amber-400 text-5xl block">★</span>
          </div>

          {/* Center-left small */}
          <div className="hanging-star absolute top-0 left-[40%]">
            <div className="star-string h-28 w-px bg-gradient-to-b from-transparent via-yellow-200/40 to-yellow-200"></div>
            <span className="text-yellow-200 text-2xl block">✦</span>
          </div>

          {/* Center-right small */}
          <div className="hanging-star-slow absolute top-0 right-[38%]">
            <div className="star-string h-32 w-px bg-gradient-to-b from-transparent via-amber-200/40 to-amber-200"></div>
            <span className="text-amber-200 text-2xl block">✦</span>
          </div>

          {/* Right of center */}
          <div className="hanging-star absolute top-0 right-[28%]">
            <div className="star-string h-48 w-px bg-gradient-to-b from-transparent via-yellow-400/50 to-yellow-400"></div>
            <span className="text-yellow-400 text-5xl block">★</span>
          </div>

          {/* Right-center */}
          <div className="hanging-star-slow absolute top-0 right-[18%]">
            <div className="star-string h-40 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-amber-300"></div>
            <span className="text-amber-300 text-3xl block">✦</span>
          </div>

          {/* Right */}
          <div className="hanging-star absolute top-0 right-[10%]">
            <div className="star-string h-56 w-px bg-gradient-to-b from-transparent via-yellow-300/50 to-yellow-300"></div>
            <span className="text-yellow-300 text-5xl block">★</span>
          </div>

          {/* Far right */}
          <div className="hanging-star-slow absolute top-0 right-[3%]">
            <div className="star-string h-36 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-amber-400"></div>
            <span className="text-amber-400 text-4xl block">★</span>
          </div>

          {/* Extra decorative small stars */}
          <div className="hanging-star absolute top-0 left-[8%]">
            <div className="star-string h-72 w-px bg-gradient-to-b from-transparent via-yellow-200/30 to-yellow-200"></div>
            <span className="text-yellow-200 text-2xl block">✦</span>
          </div>

          <div className="hanging-star-slow absolute top-0 left-[27%]">
            <div className="star-string h-60 w-px bg-gradient-to-b from-transparent via-amber-200/30 to-amber-200"></div>
            <span className="text-amber-200 text-2xl block">✦</span>
          </div>

          <div className="hanging-star absolute top-0 right-[24%]">
            <div className="star-string h-68 w-px bg-gradient-to-b from-transparent via-yellow-200/30 to-yellow-200"></div>
            <span className="text-yellow-200 text-2xl block">✦</span>
          </div>

          <div className="hanging-star-slow absolute top-0 right-[6%]">
            <div className="star-string h-80 w-px bg-gradient-to-b from-transparent via-amber-200/30 to-amber-200"></div>
            <span className="text-amber-200 text-xl block">✦</span>
          </div>
        </div>

        {/* Decorative stars above title */}
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
          Software Engineer
        </p>
      </div>
    </>
  );
}
