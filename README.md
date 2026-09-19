# Domme Island

Mobile-first **adult NSFW** femdom text RPG (SPA). Wander an island of Dommes, fight climax duels, and collect orgasms.

**18+ only.** All characters are written as adults (21+). Explicit sexual text content.

## Premise

You wash ashore on Domme Island. Zones crawl with minion Dommes. Three boss Dommes keep mansions that match their personalities. Combat is turn-based: both sides raise the other’s **arousal** meter. **First to climax loses** the bout. Wins add to orgasms you’ve given; losses add to orgasms taken.

Tone: humiliation / degradation / femdom RP, delivered as narrative text with big touch-friendly action buttons.

## Features (MVP)

- Title screen with premise + new game / continue
- Island zones + three Domme mansions
- Random minion encounters while wandering
- Three boss Dommes with distinct specialties and mansion flavor
- Turn-based climax battles (player moves + enemy AI + per-turn narrative)
- Win/lose RP outcomes, orgasm / boss tracking
- `localStorage` save / resume

### Boss Dommes

| Domme | Age | Style |
|-------|-----|--------|
| **Lady Scarlet** | 29 | Theatrical sadism, ruined orgasms, public shame |
| **Mistress Ivory** | 32 | Cold elegance, psychological ownership |
| **Domme Hex** | 26 | Neon club chaos, brat-top sensation play |

## Tech

- Vite + React + TypeScript
- No backend — pure client SPA
- Data-driven content under `src/data/`
- AI portraits for Dommes/minions in battle & encounter UI

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`) on a phone or narrow browser window.

Production build:

```bash
npm install
npm run build
npm run preview
```

## Save data

Progress is stored in the browser under key `domme-island-save-v1`. Clearing site data wipes the save.

## Out of scope

Multiplayer, accounts, payments, app stores.
