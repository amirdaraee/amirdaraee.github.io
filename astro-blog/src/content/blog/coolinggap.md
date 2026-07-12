---
title: 'coolinggap.eu: Europe is overheating, its cooling has not caught up'
description: 'Every heatwave, Europe has the same argument about air conditioning, mostly from memory. I built a site where every number is cited and the build fails if a source is missing. The numbers are worse than I expected.'
published: true
date: 2026-07-12T18:00:00.000Z
author: amirdaraee
photo: stock/coolinggap.png
keywords:
    - heatwave
    - air conditioning
    - europe
    - open data
    - astro
    - data visualization
language: en
---

# coolinggap.eu: Europe is overheating, its cooling has not caught up

Every heatwave, Europe has the same argument. One side says air conditioning
is an American indulgence we've done fine without. The other side points at
the thermometer. Both sides argue mostly from memory, because the actual
numbers are buried in national statistics portals, paywalled papers, and
regulation PDFs that nobody reads voluntarily.

I wanted to know who was right. So I built
[coolinggap.eu](https://coolinggap.eu) and made it collect the receipts.

## One rule

The site has a single editorial rule: no number without a source. Every
figure links to the statistical office, paper, or dataset it came from, and
where a trustworthy number doesn't exist, the site says "no data" instead of
guessing. It turns out "no data" appears a lot. That's a finding in itself:
for something people die of, Europe measures its cooling surprisingly badly.

There's a country filter at the top, synced to the URL, so if you want to
send someone the French numbers specifically, you send them
[coolinggap.eu/?country=FR](https://coolinggap.eu/?country=FR).

## Where the numbers come from

Temperatures were the easy part. [Open-Meteo](https://open-meteo.com/) has a
keyless API with current readings and the ERA5 archive going back decades, so
a build-time script pulls monthly maximums for thirty countries since 2000,
and CI refreshes the data on a schedule. No keys, no accounts, no scraping.

Everything else had no API at all. AC penetration, heat mortality,
regulations, prices, surveys: that data lives in census reports and
one-off studies, in half a dozen languages, so I curated it by hand into
CSVs. To keep myself honest, a Zod schema fails the build if any row is
missing its source name, URL, or date. I don't get to ship a number I can't
back up, and not because I'm disciplined. Because the compiler says no.

(The site itself is Astro with React islands, Observable Plot for the
charts, d3-geo for the map. Code is [on
GitHub](https://github.com/amirdaraee/overheated-europe).)

## What I found

I expected a gap. I didn't expect this one. In Malta, 84% of households have
AC. Greece, 76%. Then you go north and the floor drops out: Germany 19%,
the Netherlands 12%, the UK 4.3%, Poland 2.3%. These are places that now see
heat that Athens would take seriously, with almost nothing to meet it.

The human cost is not hypothetical. Peer-reviewed estimates count 61,672
excess heat deaths in Europe in the summer of 2022, and another 47,690 in
2023. And the gap isn't only about habit or climate: 38% of EU households
say they cannot afford to keep their home adequately cool in summer.

The regulations page was the part that surprised me most. Spain caps
public-building cooling at 27°C. The EU's F-gas rules will ban new
residential AC with high-GWP refrigerants from 2027. Some of these policies
have good reasons behind them. But it's worth seeing them listed next to the
mortality table.

## Go argue with sources

The site is live at [coolinggap.eu](https://coolinggap.eu). Pick your
country, click the little source marks, and next time the heatwave argument
starts, bring numbers. If you find a better figure than the one shown, the
data is all CSV: fix it with a pull request.
