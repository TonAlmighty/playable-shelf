import Link from "next/link";
import { GameGallery } from "@/app/components/GameGallery";
import { games, getPlayableTotal } from "@/app/data/showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-zinc-950">
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-[#faf8f4]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-black">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-orange-500 text-white">
              PA
            </span>
            <span>Playable Shelf</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-zinc-600 sm:flex">
            <a href="#games" className="hover:text-zinc-950">
              Games
            </a>
            <a href="#library" className="hover:text-zinc-950">
              Library
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-12 sm:px-6 md:grid-cols-[1fr_320px] md:items-end lg:px-8">
        <div>
          <p className="text-sm font-bold text-orange-600">Playable ads showcase</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] text-zinc-950 sm:text-6xl">
            One clean library for every playable version.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            A responsive showcase where each game opens into its own version
            library, and every playable HTML runs inside an instant popup.
          </p>
        </div>

        <div id="library" className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="text-3xl font-black">{games.length}</p>
            <p className="mt-1 text-xs font-semibold text-zinc-500">Games</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="text-3xl font-black">{getPlayableTotal()}</p>
            <p className="mt-1 text-xs font-semibold text-zinc-500">Playables</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <p className="text-3xl font-black">4</p>
            <p className="mt-1 text-xs font-semibold text-zinc-500">Networks</p>
          </div>
        </div>
      </section>

      <div id="games">
        <GameGallery games={games} />
      </div>
    </main>
  );
}
