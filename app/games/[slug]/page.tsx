import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlayableGrid } from "@/app/components/PlayableGrid";
import { games, getGame } from "@/app/data/showcase";
import { withBasePath } from "@/app/lib/paths";

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    return {
      title: "Game not found",
    };
  }

  return {
    title: `${game.title} | Playable Shelf`,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf8f4] text-zinc-950">
      <header className="border-b border-zinc-200 bg-[#faf8f4]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-black text-zinc-950">
            Playable Shelf
          </Link>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-700 transition hover:border-zinc-500"
          >
            All games
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(260px,380px)_1fr] lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          <Image
            src={withBasePath(game.cover)}
            alt={`${game.title} cover`}
            fill
            sizes="(min-width: 768px) 380px, 100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-end">
          <div className="flex flex-wrap gap-2">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-600"
              >
                {platform}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-bold text-orange-600">{game.genre}</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-6xl">
            {game.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            {game.description}
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="text-3xl font-black">{game.playables.length}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500">
                Versions
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="text-3xl font-black">HTML</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500">Format</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="text-3xl font-black">{game.platforms.length}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500">
                Networks
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4 border-t border-zinc-200 pt-8">
          <div>
            <p className="text-sm font-bold text-orange-600">Playable versions</p>
            <h2 className="mt-2 text-3xl font-black">Version library</h2>
          </div>
        </div>
        <PlayableGrid game={game} />
      </section>
    </main>
  );
}
