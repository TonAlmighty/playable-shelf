"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Game } from "@/app/data/showcase";
import { genres } from "@/app/data/showcase";
import { withBasePath } from "@/app/lib/paths";

type GameGalleryProps = {
  games: Game[];
};

export function GameGallery({ games }: GameGalleryProps) {
  const [activeGenre, setActiveGenre] = useState("All");
  const [query, setQuery] = useState("");

  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return games.filter((game) => {
      const matchesGenre = activeGenre === "All" || game.genre === activeGenre;
      const haystack = [
        game.title,
        game.studio,
        game.genre,
        game.description,
        ...game.platforms,
      ]
        .join(" ")
        .toLowerCase();

      return matchesGenre && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeGenre, games, query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 border-y border-zinc-200 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setActiveGenre(genre)}
              className={`h-10 rounded-full border px-4 text-sm font-semibold transition ${
                activeGenre === genre
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <label className="relative block w-full md:w-72">
          <span className="sr-only">Search games</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search game, studio, platform"
            className="h-11 w-full rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredGames.map((game) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="group rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-zinc-100">
              <Image
                src={withBasePath(game.cover)}
                alt={`${game.title} cover`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-orange-500">
                  {game.genre}
                </p>
                <h2 className="mt-1 text-lg font-bold text-zinc-950">
                  {game.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">{game.studio}</p>
              </div>
              <span
                className="grid h-10 min-w-10 place-items-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: game.accent }}
                aria-label={`${game.playables.length} playables`}
              >
                {game.playables.length}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredGames.length === 0 ? (
        <div className="mt-10 rounded-lg border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
          No games match this filter.
        </div>
      ) : null}
    </section>
  );
}
