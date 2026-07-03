"use client";

import { useEffect, useState } from "react";
import type { Game, Playable } from "@/app/data/showcase";

type PlayableGridProps = {
  game: Game;
};

export function PlayableGrid({ game }: PlayableGridProps) {
  const [selectedPlayable, setSelectedPlayable] = useState<Playable | null>(null);

  useEffect(() => {
    if (!selectedPlayable) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPlayable(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedPlayable]);

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {game.playables.map((playable) => (
          <article
            key={playable.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-orange-500">
                  {playable.version}
                </p>
                <h2 className="mt-1 text-xl font-black text-zinc-950">
                  {playable.title}
                </h2>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600">
                {playable.format}
              </span>
            </div>

            <p className="mt-4 min-h-12 text-sm leading-6 text-zinc-600">
              {playable.note}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {playable.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-4 text-sm">
              <div>
                <p className="font-bold text-zinc-950">{playable.ratio}</p>
                <p className="mt-1 text-xs text-zinc-500">Canvas</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">{playable.updatedAt}</p>
                <p className="mt-1 text-xs text-zinc-500">Updated</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlayable(playable)}
              className="mt-5 h-11 w-full rounded-md bg-zinc-950 text-sm font-bold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
            >
              Play
            </button>
          </article>
        ))}
      </section>

      {selectedPlayable ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-zinc-950/78 px-3 py-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPlayable.title} playable`}
        >
          <div className="grid h-full w-full max-w-6xl gap-4 md:grid-cols-[minmax(280px,390px)_1fr] md:items-center">
            <div className="mx-auto flex h-full max-h-[860px] w-full max-w-[390px] flex-col overflow-hidden rounded-lg border border-zinc-700 bg-zinc-950 shadow-2xl">
              <div className="flex h-12 items-center justify-between border-b border-zinc-800 px-4">
                <div>
                  <p className="text-xs font-bold text-orange-400">
                    {selectedPlayable.version}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {selectedPlayable.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPlayable(null)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-zinc-700 text-sm font-black text-white transition hover:border-white"
                  aria-label="Close playable"
                >
                  X
                </button>
              </div>

              <iframe
                key={selectedPlayable.id}
                src={selectedPlayable.file}
                title={`${game.title} ${selectedPlayable.title}`}
                className="min-h-0 flex-1 border-0 bg-white"
                allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; accelerometer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms"
              />
            </div>

            <aside className="hidden rounded-lg border border-zinc-700 bg-zinc-900 p-6 text-white md:block">
              <p className="text-sm font-bold text-orange-400">{game.title}</p>
              <h3 className="mt-2 text-3xl font-black">
                {selectedPlayable.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-300">
                {selectedPlayable.note}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md border border-zinc-700 p-4">
                  <p className="font-bold">{selectedPlayable.ratio}</p>
                  <p className="mt-1 text-zinc-400">Canvas</p>
                </div>
                <div className="rounded-md border border-zinc-700 p-4">
                  <p className="font-bold">{selectedPlayable.format}</p>
                  <p className="mt-1 text-zinc-400">Format</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      ) : null}
    </>
  );
}
