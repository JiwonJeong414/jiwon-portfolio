import { Scene } from "@/components/Scene";

export default function Home() {
  return (
    <>
      {/* 3D Background Layer */}
      <Scene />

      {/* Content Layer */}
      <main className="relative flex min-h-screen flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold tracking-tighter">Starry Night</h1>
        <p className="mt-4 text-slate-400">A refactored Three.js experience.</p>
      </main>
    </>
  );
}
