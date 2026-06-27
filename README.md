# ⚡ RXN Rush

A fast-paced, mobile-first organic-chemistry reaction game for **MHT-CET** students (Class 11–12, Maharashtra board). See a reaction, tap the correct product before the 10-second timer runs out, build combos, and collect named-reaction cards.

## Is it an app or a website?

It's a **website that behaves like an app**. There's nothing to download from an app store — you host it once, share a link, and each student opens it in their phone's browser (Chrome / Safari). Because it ships a web-app *manifest* and icon, a student can tap **"Add to Home Screen"** and it installs a full-screen *RXN Rush* tile (no browser bars), just like a native app. Everything runs on the phone; there's no server, login, or database — each student's coins, cards and unlocks save privately on their own device.

> Note: it needs an internet connection to **open** (it loads from the web). It is not a downloadable offline app.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Everything is **client-side and offline** — progress, coins, collected cards, and chapter unlocks are saved to `localStorage` (per device, so every student keeps their own progress). No backend, no login.

## Host it on GitHub Pages (recommended) → share one link with all 20 students

This repo already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that **builds and publishes the site automatically**. You don't run any build yourself — GitHub does it on every push. Steps:

**1. Put this folder on GitHub as its own repository.**
From inside the `rxn-rush/` folder:

```bash
git init
git add .
git commit -m "RXN Rush"
git branch -M main
# easiest, if you have the GitHub CLI:
gh repo create rxn-rush --public --source=. --push
# …or, without gh: create an empty repo on github.com first, then:
# git remote add origin https://github.com/<your-username>/rxn-rush.git
# git push -u origin main
```

**2. Turn on Pages.** On github.com open the repo → **Settings → Pages** → under *Build and deployment* set **Source = "GitHub Actions"**. (You only do this once.)

**3. Wait ~1 minute.** The **Actions** tab shows the deploy running. When it's green, your game is live at:

```
https://<your-username>.github.io/<repo-name>/
```

**4. Share it.** Send that link to your 20 students (turn it into a QR code at any free QR site so they can just scan it). Every future `git push` re-deploys automatically.

> The workflow figures out the correct path from your repo name on its own, so you don't have to edit anything — name the repo whatever you like.

### Other ways to host (optional)

- **Netlify Drop** — run `npm run build`, then drag the `dist/` folder onto https://app.netlify.com/drop for an instant link. (Vercel / Cloudflare Pages work the same way.)
- **Same Wi-Fi, your laptop** — `npm run build && npm run preview` prints a Network URL like `http://192.168.1.102:4173`; students on the same Wi-Fi open it. Keep the laptop awake and the terminal running.

**Tell students to "Add to Home Screen"** after opening the link — it installs the full-screen ⚡ *RXN Rush* tile so it feels like a real app.

## Built for the classroom

- **Crash-safe**: an error boundary catches any runtime error and shows a *Reload* / *Reset & reload* screen instead of a blank page.
- **Tamper-safe saves**: corrupt or outdated `localStorage` is reconciled to safe defaults on load — a student can never get locked out (Hydrocarbons is always playable).
- **No double-scoring**: rapid double-taps are locked out so fast tappers can't lose two lives or score twice on one question.
- **Reset progress**: a low-key "Reset progress" link at the bottom of Home (with a confirm) clears a shared device between students.

## Modes

- **Rush Mode** — pick a chapter, answer reaction→product questions against the clock. Faster + combo = more coins. 3 lives.
- **Chain Reaction** — pick the right reagent at each step to walk a starting compound to a target (e.g. Benzene → Phenol). One wrong reagent breaks the chain.
- **IUPAC Challenge** — a structure is shown; name it correctly from 4 options before the timer runs out. Hard, exam-trap questions (longest-chain, lowest-locant ties, functional-group priority, alphabetical citation, E/Z), each with the deciding rule explained.
- **My Deck** — the 35 collectible Named Reaction cards. Hit a 5-combo in Rush Mode to unlock one.

## Progression

- Chapter 1 (Hydrocarbons) is unlocked by default.
- Score **≥70%** accuracy in a Rush session to unlock the next chapter.

## Content

- **92 reactions** across 6 chapters (Hydrocarbons, Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes & Ketones, Carboxylic Acids, Amines) — comprehensive MHT-CET coverage: named reactions, addition/elimination/substitution, oxidation/reduction, EAS, and all the standard lab tests (Tollens', Fehling's, Lucas, iodoform, 2,4-DNP, FeCl₃, bromine/Baeyer, silver-halide, carbylamine, Hinsberg…).
- Every distractor is a *plausible* mistake (e.g. Cannizzaro vs Aldol, Markovnikov vs peroxide effect, Hofmann vs LiAlH₄), and every explanation says **why** the product forms.
- **35 named-reaction cards** with scientist, year, equation, and a memorable fact.
- **9 chain sequences** covering common MHT-CET multi-step conversions.

## Design

Minimal, premium dark theme tuned for phones: a phone-shaped column (max 460px) centred on larger screens, lime accent, refined chapter colours, monospace formulas, and `100dvh` + `env(safe-area-inset-*)` handling so it sits correctly under notches and the iOS home bar. All tap targets ≥44px. Verified on 375 / 390 / 414px viewports.

## Stack

React + Vite · Tailwind CSS · Framer Motion · Zustand (persisted) · Web Audio (synthesised SFX, muted by default — toggle top-right on Home).

## Where the data lives

| File | Contents |
|------|----------|
| `src/data/reactions.js`     | All 92 reactions, distractors, explanations |
| `src/data/namedReactions.js`| The 35 collectible cards |
| `src/data/chains.js`        | Chain Reaction sequences |
| `src/data/iupac.js`         | IUPAC Challenge questions |
| `src/data/chapters.js`      | Chapter order, colours, unlock threshold |
| `src/store/gameStore.js`    | Zustand store (scoring, lives, combos, unlocks, persistence) |
