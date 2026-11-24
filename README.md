# Sum up 24 November's world news in one image

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/alfian-triadi/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/alfian-triadi/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A newspaper front page — **"THE WORLD — Tuesday, 24 November 2026"** — drawn
programmatically with Python/PIL. Five stories from the day's news cycle, each
with a headline, a short caption and a small illustration, so a reader who
missed the day can tell what happened from the image alone.

## The stories

1. **Ukraine sinks Russian warship off Libya** — President Zelenskyy said seven
   sea drones sank the corvette *Merkury* at Benghazi and hit the cargo ship
   MV *Angara*; a Ka-27 helicopter aboard was destroyed.
   Sources: AP, Reuters, CNN (announced 23 Nov 2026).
2. **Huang is back at Nvidia — shares soar 31%** — the board reinstated Jensen
   Huang as CEO 11 days after he quit; Nvidia gained about $950bn in a day and
   the Nasdaq jumped 6.5%.
   Sources: Reuters, CNN, Investopedia (23 Nov 2026).
3. **Gaza "a toxic wasteland", new report warns** — Oxfam and CEOBS find signs
   of contamination across more than 99% of Gaza, in its air, soil and water.
   Sources: Oxfam, ReliefWeb (report released 23 Nov 2026).
4. **Iran says it shot down a US drone** — state media say Iranian air defences
   downed the drone east of the Strait of Hormuz.
   Sources: Anadolu Agency, Middle East Eye (23 Nov 2026).
5. **24 confirmed dead in candy factory fire** — rescuers still search the ruins
   of the PT Fonusa Agung Mulia sweet factory in Banten, Indonesia; about 30
   remain missing.
   Sources: Reuters via BusinessWorld, Sky News (death toll confirmed 23 Nov 2026).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (1024×1024, PNG) to `$MAKEFUN_OUTPUT_DIR/entry.png`.

Built for [make.fun](https://make.fun/r/cx95kx62)
