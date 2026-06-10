---
title: 'I built a World Cup prediction machine (and bet real money on it)'
description: 'Two days before the 2026 World Cup, I built an open-source football prediction model, wired it to a prediction market, and locked my bracket in public. Here is the story.'
published: true
date: 2026-06-11T01:30:00.000Z
author: amirdaraee
slug: 'world_cup_prediction_machine'
photo: stock/world_cup_prediction_machine.png
imgCredit: Ank Kumar, CC BY-SA 4.0, via Wikimedia Commons
keywords:
    - world cup
    - prediction
    - betting
    - statistics
    - claude
language: en
slugs:
    - world_cup_prediction_machine
---

# I built a World Cup prediction machine (and bet real money on it)

The 2026 World Cup kicked off tonight at the Azteca. Two days ago, this project
was a JSON file with 48 country names in it - ten of which, it later turned out,
hadn't even qualified. Tonight it's a [live site](https://amirdaraee.com/world-cup-predictions/)
with a statistical model, 100,000 simulated tournaments, real money on the line,
and a bracket that's locked and publicly graded against the betting markets.

This post is about what got built, what the data refused to believe, and what
it's like to build something like this with an AI pair programmer.

## What it is

**The Form Book** is an open-source research tool
([code on GitHub](https://github.com/amirdaraee/world-cup-predictions)) that:

- fits a **Dixon-Coles goal model** - the 1997 system professional odds
  compilers still build on - to 8,081 international matches, weighted by
  recency, with hyperparameters chosen by cross-validation rather than vibes
- adds a **squad-value prior** from Transfermarkt market values, because goals
  data can't see that France's quiet year happened without their stars
- simulates the **entire tournament 100,000 times** over a 200-model bootstrap
  ensemble, on the official FIFA bracket, with injury/fatigue randomness baked in
- compares every probability against **live Polymarket prices** and highlights
  where the model and the crowd disagree
- placed **42 real bets** through Polymarket's API, sized by fractional Kelly
  under hard caps, with a ledger that makes overspending impossible
- **locked the full bracket before kickoff** - all 72 group matches and every
  knockout round to the champion - and grades itself in public as results land

![The Form Book homepage on opening night](/stock/formbook_home.png)
*The site a few hours before kickoff: the model calling the opener at 72% for Mexico.*

The headline predictions, frozen before a ball was kicked: Argentina beat Spain
in the final, Kane and Jonathan David share Golden Boot favouritism, and the
model thinks the market is sleeping on Japan.

![A match card: fair prices, market edges and the scoreline heatmap](/stock/formbook_sim.png)
*Every match gets a card like this: the model's fair prices against live Polymarket
quotes, and a heatmap of every possible scoreline. This one is Japan v Sweden -
the model's favourite disagreement with the market.*

## The parts I didn't expect

**The data fought back.** We cross-checked 480 recent match records against an
independent dataset and found four wrong scores - then proved the *reference*
dataset was the wrong one in all four cases, and patched it at load time. Later,
a failing unicode lookup unraveled into the discovery that our squad data was
missing ten teams, which explained why Erling Haaland had silently never
appeared in our Golden Boot odds. The moment his data existed, the model priced
him within half a cent of the betting market. I have never trusted a bug fix more.

**The data also said no.** Two reasonable-sounding ideas - capping blowout
scorelines, using shorter memory - lost to the validation set and were rejected.
One fashionable idea (player market values, borrowed from Nate Silver's
approach) passed spectacularly: held-out log-loss improved from 0.854 to 0.818,
the single largest gain in the project. The rule that made this work: nothing
ships without beating the holdout. Not even good ideas. Especially not good ideas.

**Honesty is a feature you can build.** Every prediction is written down before
the event. Every calculation run is archived with a timestamp. Old versions of
the site are frozen daily and browsable. The scorecard grades the model, the
market, and the blend separately with proper scoring rules - so by the group
stage's end, the data itself will say which forecaster deserved trust. A
prediction you can revise afterwards isn't a prediction.

## Built with Claude

I did this project with the help of **Claude (Anthropic's Fable 5 model)**
running in Claude Code. The honest division of labor: I brought the idea, the
API keys, the betting account, and a steady supply of "wait, is that right?" -
Claude wrote the pipeline, ran the validations, caught most of its own mistakes,
and occasionally caught mine.

What surprised me wasn't the code generation - it was the *skepticism*. The
parts of this project I trust most came from adversarial moments: the model
audit that out-argued a reference dataset, the validation harness that killed
features we both liked, the calibration chart that exists specifically so
readers don't have to take anyone's word for anything. At one point someone on
Twitter told me to stop letting AI build my model and use a credible source
instead. The model's reply was to put its out-of-sample numbers on a public
methodology page next to a falsifiable, locked bracket. That page is
[here](https://amirdaraee.com/world-cup-predictions/method.html) - it even has a
Farsi version.

## What happens now

The tournament runs through July 19. Every matchday: results come in, the model
refits, the site rebuilds, a snapshot freezes, and the scorecard updates. Either
the machine beats the crowd or it doesn't - and either way, the answer will be
sitting on a public webpage with my name on it.

*None of this is betting advice. The model knows nothing about injuries,
lineups, or what the coach said at breakfast. Stakes were sized so that losing
all of it costs less than a decent dinner out.*
