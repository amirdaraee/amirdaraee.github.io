---
title: 'Luxembourg MCP: public data, ready for agents'
description: 'One keyless MCP endpoint over 18 Luxembourg public data systems: laws, statistics, live parking, air quality, parliament, and more. 27 tools, no API keys, every result traced to its official source.'
published: true
date: 2026-07-12T14:00:00.000Z
author: amirdaraee
slug: 'luxembourg_mcp'
photo: stock/luxembourg-mcp.png
keywords:
    - mcp
    - model context protocol
    - luxembourg
    - open data
    - python
    - ai agents
language: en
slugs:
    - luxembourg_mcp
---

# Luxembourg MCP: public data, ready for agents

Luxembourg publishes a lot of public data: laws, statistics, live parking,
water levels, air quality, parliamentary questions. The problem is that it
lives in 18 different systems, each with its own API shape, format, and
quirks. If you want an AI agent to answer "what weather warnings are active
right now?", someone has to do the integration work first.

So I did it once, for everyone. [Luxembourg
MCP](https://github.com/amirdaraee/luxembourg-mcp) is a Model Context
Protocol server that turns those fragmented sources into 27 consistent tools
any MCP client can call. There's a hosted endpoint at
[luxembourg-mcp.com](https://luxembourg-mcp.com), so you don't even need to
install anything.

## Credit where it's due

The idea comes from [Allemannsdata](https://allemannsdata.com/) by Thomas
Heggelund, which does this for Norwegian public data. The name references
*allemannsretten*, Norway's right to roam: public information should be as
easy to reach as public land. Luxembourg MCP applies that idea to the Grand
Duchy as an independent implementation.

## What's inside

- **27 tools over 18 public systems.** Legislation, STATEC statistics,
  geocoding, transit stops, election results, housing prices, EV charging.
- **No API keys, no accounts.** Every source is keyless. Point a client at
  the endpoint and start asking questions.
- **No scraping.** Everything comes from official APIs and open datasets.
- **Traceable answers.** Every result carries the upstream source URL, so
  you can always check the authoritative record.
- **Live data included.** City parking, P+R occupancy, motorway traffic,
  water levels, weather at Findel.

## What an agent can do with it

Once connected, an agent can answer things like:

- How many spaces are free at the Belval P+R right now?
- Find legislation concerning pensions.
- What are advertised house prices in Esch-sur-Alzette?
- Which bus or tram stops match Hamilius?
- What's the current air quality in Luxembourg City?

## Try it

Point any MCP client at the hosted endpoint:

```json
{
  "mcpServers": {
    "luxembourg": {
      "url": "https://mcp.luxembourg-mcp.com/mcp"
    }
  }
}
```

Or run it locally with `uvx luxembourg-mcp`. The
[README](https://github.com/amirdaraee/luxembourg-mcp) covers Docker,
security notes, and the full tool catalogue.

If a data source you need is missing, [open an
issue](https://github.com/amirdaraee/luxembourg-mcp/issues). The list of
candidates is long and I'd rather build what people actually use.
