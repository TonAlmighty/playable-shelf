# Playable Shelf

Responsive showcase website for playable ads. The home page lists games, each
game has its own version library, and every playable opens in a popup iframe.

## Run Locally

Use Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

If the Cloudflare local runtime is unavailable on Windows, preview the React UI
with:

```bash
npx next dev -H 127.0.0.1 -p 3000
```

## Update Games

Edit `app/data/showcase.ts`.

- Add, rename, reorder, or delete games in the `games` array.
- Add playable versions inside a game's `playables` array.
- Set each playable `file` to a static HTML file under `public/playables/`.
- Set each game `cover` to an image under `public/covers/`.

Example playable path:

```ts
file: "/playables/my-game/v01.html"
```

Example cover path:

```ts
cover: "/covers/my-game.png"
```

## Add Playable HTML Files

Put exported playable files directly in `public/playables/`, for example:

```text
public/playables/my-game/v01.html
public/playables/my-game/v02.html
public/playables/my-game/v03.html
```

Those files are served by the site and embedded directly by the popup player.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
```
