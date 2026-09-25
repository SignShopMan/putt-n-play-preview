# Putt & Play — preview site

Astro + Tailwind CSS v4 static site built from the Putt & Play brand guide (web edition v1.0).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Adding photos

Drop a real venue photo into `src/assets/photos/` named after its slot. It replaces the
"Photo coming soon" placeholder automatically and gets resized/optimized at build time.
Any of `.jpg .jpeg .png .webp .avif` works.

| Slot file | Where it shows |
| --- | --- |
| `hero` | Home hero |
| `golf-sim` | Home card, Golf hero |
| `golf-range` | Golf prices |
| `mini-golf` | Home card, Mini golf hero |
| `leaderboard` | Mini golf |
| `glow-putt` | Home glow band, Mini golf glow section (black-light shot) |
| `laser-tag` | Home card, Laser tag hero (black-light shot) |
| `laser-tag-gear` | Laser tag prices (black-light shot) |
| `vr` | Home card, VR hero |
| `arcade` | Home card, multisport arcade section |
| `party` | Home parties, Parties hero |
| `party-mini-golf`, `party-laser-tag`, `party-vr`, `party-sim` | Party package cards |
| `league` | Leagues hero |
| `beer-wine` | Leagues, beer and wine card |
| `family` | Home "Our story" |

Still needed: `vr`, `party-vr` (no VR photos yet). Original uploads are kept in `photos-raw/` (git-ignored).

Alt text lives next to each `<Photo>` in the page — update it to describe the actual photo.

## Editing content

- Hours: `src/data/hours.json` (drives the hours bar, footer, Visit page, and LocalBusiness schema)
- Prices: `src/data/pricing.json`
- Address, phone, email, links: `src/data/business.json`
- Activity cards: `src/data/activities.json` · Nav: `src/data/nav.json`
- Design tokens: `src/styles/global.css`

## Open TODOs before launch

Search the code for `TODO`. Main ones:

- Hours, prices, email, and simulator brand are unverified.
- League schedule/format/fees, beer & wine details, parking, glow putt days, arcade pricing.
- Booking method (party form currently opens an email draft).
- VR Cyan, Arcade Orange, League Navy are proposed colors.
- Logos are PNG placeholders extracted from the brand guide; swap in SVGs
  (`logo-master.svg`, `logo-master-reverse.svg`, `logo-golf.svg`, `logo-lasertag.svg`),
  the P&P monogram `favicon.svg`, and a designed `og-image.png` in `public/brand/`.
