# DreamLab

> **WE BUILD THE FUTURE.**

A creative technology agency co-creating content, products, services and experiences at the intersection of **AI**, **Experiential Tech** and **Realtime Computing**.

This is the source for [dreamlab.org.uk](https://dreamlab.org.uk) — our shop window, our manifesto, and the front door to a 45-strong collective of deep-tech specialists working out of labs in Manchester, Liverpool, Cumbria and London.

---

## Who we are

We are not an agency in the old sense. We are an **R&D lab built for the creative industries** — a federation of engineers, artists, technologists and producers who assemble around a problem, ship something genuinely new, and reform around the next one.

We work shoulder-to-shoulder with founders, studios and global brands. We sit between the lab and the launch — close enough to the research to know what's actually possible this week, close enough to production to know what will hold up on opening night.

We move at the speed of ideas. We work at the pace of change.

## What we do

**Workflows & Automation** — LLMs, generative media, RAG, agentic AI. We build the pipelines that quietly do the work of teams.

**Creative Services** — Immersive XR, virtual production, interactive installations, generative content. Technology in service of extraordinary ideas.

**Product Development** — From prototype to production. AI products, spatial computing, realtime systems, decentralised tech. We help good ideas survive contact with the real world.

**Consultancy & Training** — Residential programmes, masterclasses and embedded advisory. Because technology is only transformative when people know how to use it.

## How we work

| | |
|---|---|
| **Agile** | Small teams. Tight loops. No committees. |
| **Adaptive** | We reshape around every challenge. We don't sell a fixed process — we flex. |
| **Realtime** | Tech changes weekly. Our practice is built to absorb, test and deploy as it emerges. |
| **Intelligent** | Every decision informed by live data, trends and signals. Insight, not assumption. |

## Where we are

- **MediaCity, Manchester** — our home base in the heart of the UK's creative-tech corridor
- **Liverpool** — Baltic Triangle, embedded in the city's startup ecosystem
- **Cumbria** — our **Lake District innovation facility** for Co-Creation Residencies and immersive R&D sprints
- **London** — collaboration space for clients in town

## Who we've built for

A team trusted by some of the world's most ambitious creative and tech brands — Apple, Google, Sony, IBM, HP, BBC, ITV, NBC, Intel, NHS, Red Bull, United Nations, BT, Epic Games, Aardman Animations, Universal Music Group, MSG Sphere, The Hut Group, Monster, McCann, Saatchi & Saatchi, and a long list of independent studios and SMEs we partner with through our network.

---

## About this repository

This repo holds the static site that powers **dreamlab.org.uk**. It's intentionally lightweight — vanilla HTML, vanilla CSS, vanilla JavaScript, no build step. Edit a file, push, ship.

### Structure

```
.
├── index.html              Homepage
├── about/                  About us, principles, timeline
├── services/               Workflows, Creative, Product, Training
├── team/                   The 45+ specialists
├── work/                   Clients, sectors, SME partners
├── contact/                Get in touch
├── css/style.css           Single global stylesheet
├── js/
│   ├── content.js          Single source of truth — team, clients, services
│   └── render.js           Reads content.js, paints the DOM
└── img/
    ├── clients/            Client logos (drop in, render auto-picks them up)
    └── team/               Team headshots
```

### Adding things

- **A team member** — add to the `team` array in [`js/content.js`](js/content.js)
- **A client** — add to the `clients` (and optionally `ticker`) array; drop a logo into `img/clients/` named `client-name.svg`
- **An SME partner** — add to the `smes` array
- **A service capability** — add to the relevant service block in `services`

Logo files render in monochrome by default and reveal in full colour on hover. Missing logo? The client name shows as text — graceful, no broken images.

### Running locally

No build, no install, no dependencies. Open `index.html` in a browser, or serve the directory:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

### Deploying

The site is deployed via **GitHub Pages** from the `main` branch. The `CNAME` file points the apex domain at our pages. Push to `main` and the change is live within a minute.

---

## Get in touch

We're always interested in talking with people building unusual things.

- **Web** — [dreamlab.org.uk](https://dreamlab.org.uk)
- **Email** — info@dreamlab-ai.com
- **LinkedIn** — [thedreamlabuk](https://www.linkedin.com/company/thedreamlabuk/)
- **Twitter/X** — [@thedreamlab](https://twitter.com/thedreamlab)

> Whatever you're trying to build — if it's strange, ambitious, technical, beautiful, or all four — come and have a conversation.

---

<sub>© DreamLab. Made in the North of England, with one foot in the future.</sub>
