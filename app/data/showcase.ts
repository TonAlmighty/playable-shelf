export type Playable = {
  id: string;
  title: string;
  version: string;
  format: string;
  ratio: string;
  updatedAt: string;
  file: string;
  tags: string[];
  note: string;
};

export type Game = {
  slug: string;
  title: string;
  studio: string;
  genre: string;
  cover: string;
  accent: string;
  description: string;
  platforms: string[];
  playables: Playable[];
};

export const games: Game[] = [
  {
    slug: "tile-kingdom",
    title: "Tile Kingdom",
    studio: "Puzzle Lab",
    genre: "Puzzle",
    cover: "/covers/tile-kingdom.svg",
    accent: "#ff8a00",
    description:
      "Match-3 playable set with short hooks, alternate tutorials, and reward-driven endings.",
    platforms: ["Meta", "TikTok", "Unity"],
    playables: [
      {
        id: "tile-kingdom-chest-hook",
        title: "Chest Hook",
        version: "V01",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-12",
        file: "/playables/tile-kingdom/index.html?variant=chest",
        tags: ["Hook", "Reward", "15s"],
        note: "Fast chest reveal for cold traffic.",
      },
      {
        id: "tile-kingdom-fail-fix",
        title: "Fail Fix",
        version: "V02",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-18",
        file: "/playables/tile-kingdom/index.html?variant=fail",
        tags: ["Fail", "Tutorial", "20s"],
        note: "Shows a wrong move before the user wins.",
      },
      {
        id: "tile-kingdom-booster",
        title: "Booster Trial",
        version: "V03",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-27",
        file: "/playables/tile-kingdom/index.html?variant=booster",
        tags: ["Booster", "Reward", "25s"],
        note: "Tests a power-up first move.",
      },
    ],
  },
  {
    slug: "rocket-rescue",
    title: "Rocket Rescue",
    studio: "Arcade Team",
    genre: "Runner",
    cover: "/covers/rocket-rescue.svg",
    accent: "#00a8ff",
    description:
      "One-tap lane runner variants focused on urgency, near misses, and upgrade endings.",
    platforms: ["AppLovin", "Google", "Mintegral"],
    playables: [
      {
        id: "rocket-rescue-asteroid",
        title: "Asteroid Dodge",
        version: "V01",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-05-30",
        file: "/playables/rocket-rescue/index.html?variant=asteroid",
        tags: ["Runner", "Skill", "15s"],
        note: "Simple dodge mechanic with a quick win state.",
      },
      {
        id: "rocket-rescue-fuel",
        title: "Fuel Rush",
        version: "V02",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-09",
        file: "/playables/rocket-rescue/index.html?variant=fuel",
        tags: ["Collect", "Upgrade", "20s"],
        note: "Collect fuel to unlock the finish boost.",
      },
      {
        id: "rocket-rescue-boss",
        title: "Boss Escape",
        version: "V03",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-21",
        file: "/playables/rocket-rescue/index.html?variant=boss",
        tags: ["Boss", "Urgency", "25s"],
        note: "High-pressure escape route for retargeting.",
      },
    ],
  },
  {
    slug: "garden-chef",
    title: "Garden Chef",
    studio: "Casual Kitchen",
    genre: "Cooking",
    cover: "/covers/garden-chef.svg",
    accent: "#36b37e",
    description:
      "Cooking and harvest playable variants built around satisfying taps and clear order goals.",
    platforms: ["Meta", "IronSource", "TikTok"],
    playables: [
      {
        id: "garden-chef-harvest",
        title: "Harvest Order",
        version: "V01",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-05-24",
        file: "/playables/garden-chef/index.html?variant=harvest",
        tags: ["Cooking", "Order", "15s"],
        note: "Tap ingredients in the correct order.",
      },
      {
        id: "garden-chef-combo",
        title: "Combo Plate",
        version: "V02",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-14",
        file: "/playables/garden-chef/index.html?variant=combo",
        tags: ["Combo", "Reward", "20s"],
        note: "Short combo loop with star feedback.",
      },
      {
        id: "garden-chef-timer",
        title: "Timer Rush",
        version: "V03",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-29",
        file: "/playables/garden-chef/index.html?variant=timer",
        tags: ["Timer", "Urgency", "25s"],
        note: "Adds light pressure for high-intent users.",
      },
    ],
  },
  {
    slug: "merge-masters",
    title: "Merge Masters",
    studio: "Hybrid Guild",
    genre: "Merge",
    cover: "/covers/merge-masters.svg",
    accent: "#ff4f81",
    description:
      "Mergeable unit tests with different first moves, reward ladders, and end card framing.",
    platforms: ["Unity", "AppLovin", "Google"],
    playables: [
      {
        id: "merge-masters-unit",
        title: "Unit Merge",
        version: "V01",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-03",
        file: "/playables/merge-masters/index.html?variant=unit",
        tags: ["Merge", "Tutorial", "15s"],
        note: "Two-unit merge with a clean payoff.",
      },
      {
        id: "merge-masters-shop",
        title: "Shop Unlock",
        version: "V02",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-17",
        file: "/playables/merge-masters/index.html?variant=shop",
        tags: ["Unlock", "Economy", "20s"],
        note: "Connects the merge loop to a shop reward.",
      },
      {
        id: "merge-masters-battle",
        title: "Battle Finish",
        version: "V03",
        format: "HTML",
        ratio: "390 x 844",
        updatedAt: "2026-06-25",
        file: "/playables/merge-masters/index.html?variant=battle",
        tags: ["Battle", "Reward", "25s"],
        note: "A stronger final beat for action audiences.",
      },
    ],
  },
];

export const genres = ["All", ...Array.from(new Set(games.map((game) => game.genre)))];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getPlayableTotal() {
  return games.reduce((total, game) => total + game.playables.length, 0);
}
