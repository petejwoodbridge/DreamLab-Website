/* ============================================================
   dreamlab — SEO / AI-crawlability build step
   ============================================================

   WHY THIS EXISTS
   ---------------
   The site renders its richest content (team bios, FAQs, client
   lists, service capabilities, the about timeline) on the client
   from js/content.js. Googlebot executes JavaScript, but most AI
   crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot, Bytespider…)
   fetch the raw HTML and DO NOT run JS — so to them those pages
   look almost empty.

   This script reads js/content.js (the single source of truth) and
   bakes that content into each page in two crawler-friendly forms:

     1. Static JSON-LD structured data in <head>
        (ItemList/Person for the team, FAQPage, Service catalog).
     2. <noscript> prose fallbacks in <body> — plain text that
        non-JS crawlers read and JS users never see.

   It also regenerates llms.txt — the machine-readable brief that
   AI assistants increasingly look for.

   The generated regions are wrapped in AUTO-SEO marker comments and
   are fully idempotent: editing js/content.js and re-running this
   script keeps everything in sync. Nothing here is hand-maintained.

   USAGE
   -----
     node build-seo.js          # rewrite the SEO regions + llms.txt

   Run it after editing js/content.js, before committing.
   ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ORIGIN = 'https://dreamlab.org.uk';

// ── Load content.js (it assigns to window.dreamlab_CONTENT) ──
global.window = {};
require('./js/content.js');
const C = global.window.dreamlab_CONTENT;
if (!C) { console.error('Could not load dreamlab_CONTENT'); process.exit(1); }

const ORG = { '@type': 'Organization', name: 'dreamlab', url: ORIGIN + '/' };

// ── Helpers ──────────────────────────────────────────────────
const escHtml = (s) =>
  String(s || '').replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));

const jsonLd = (obj) =>
  '<script type="application/ld+json">\n' +
  JSON.stringify(obj, null, 2) +
  '\n</script>';

// Replace a marked region, or insert before `anchor` if absent.
function upsertRegion(html, tag, payload, anchor) {
  const start = `<!-- AUTO-SEO:${tag} START -->`;
  const end = `<!-- AUTO-SEO:${tag} END -->`;
  const block = `${start}\n${payload}\n${end}`;
  const re = new RegExp(
    start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '[\\s\\S]*?' +
      end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    'm'
  );
  if (re.test(html)) return html.replace(re, block);
  // Insert before the anchor (first occurrence), indented to match.
  const idx = html.indexOf(anchor);
  if (idx === -1) {
    console.warn(`  ! anchor not found for ${tag}; skipping`);
    return html;
  }
  return html.slice(0, idx) + block + '\n' + html.slice(idx);
}

function writePage(rel, transform) {
  const file = path.join(ROOT, rel);
  let html = fs.readFileSync(file, 'utf8');
  html = transform(html);
  fs.writeFileSync(file, html);
  console.log('  ✓', rel);
}

// ── Structured-data builders ────────────────────────────────
function teamJsonLd() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The dreamlab collective',
    description: `dreamlab's ${C.team.length}+ deep-tech specialists across AI, immersive technology, virtual production, creative direction, data and content.`,
    numberOfItems: C.team.length,
    itemListElement: C.team.map((m, i) => {
      const person = {
        '@type': 'Person',
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        worksFor: ORG,
      };
      const knows = (m.tags || []).map((t) => t.label).filter(Boolean);
      if (knows.length) person.knowsAbout = knows;
      if (m.award) person.award = m.award;
      if (m.linkedin) person.sameAs = [m.linkedin];
      if (m.image) person.image = ORIGIN + m.image;
      return { '@type': 'ListItem', position: i + 1, item: person };
    }),
  });
}

function faqJsonLd() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: C.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
}

function servicesJsonLd() {
  const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'dreamlab services',
    url: ORIGIN + '/expertise/',
    provider: ORG,
    itemListElement: C.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: stripTags(s.label),
        description: stripTags(s.description),
        provider: ORG,
        serviceType: stripTags(s.label),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: stripTags(s.label) + ' capabilities',
          itemListElement: (s.capabilities || []).map((cap) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: cap.title, description: cap.desc },
          })),
        },
      },
    })),
  });
}

// ── noscript prose fallbacks (read by non-JS crawlers) ──────
const NS_STYLE = ' class="seo-fallback"';

function teamNoscript() {
  const items = C.team
    .map(
      (m) =>
        `<li><strong>${escHtml(m.name)}</strong> — ${escHtml(m.role)}${
          m.award ? ` (${escHtml(m.award)})` : ''
        }. ${escHtml(m.bio)}</li>`
    )
    .join('\n');
  return (
    `<noscript${NS_STYLE}>\n` +
    `<h2>The dreamlab collective — ${C.team.length} specialists</h2>\n<ul>\n${items}\n</ul>\n` +
    `</noscript>`
  );
}

function faqNoscript() {
  const items = C.faqs
    .map((f) => `<div><h3>${escHtml(f.q)}</h3><p>${escHtml(f.a)}</p></div>`)
    .join('\n');
  return `<noscript${NS_STYLE}>\n<h2>Frequently asked questions</h2>\n${items}\n</noscript>`;
}

function servicesNoscript() {
  const blocks = C.services
    .map((s) => {
      const label = String(s.label).replace(/<[^>]+>/g, '');
      const caps = (s.capabilities || [])
        .map((c) => `<li><strong>${escHtml(c.title)}</strong> — ${escHtml(c.desc)}</li>`)
        .join('\n');
      return `<div><h3>${escHtml(label)}</h3><p>${escHtml(
        String(s.description).replace(/<[^>]+>/g, '')
      )}</p><ul>\n${caps}\n</ul></div>`;
    })
    .join('\n');
  return `<noscript${NS_STYLE}>\n<h2>dreamlab expertise &amp; capabilities</h2>\n${blocks}\n</noscript>`;
}

function workNoscript() {
  const clients = C.clients
    .map((c) => (typeof c === 'string' ? c : c.name))
    .map(escHtml)
    .join(', ');
  const publicSector = (C.publicSector || [])
    .map((c) => (typeof c === 'string' ? c : c.name))
    .map(escHtml)
    .join(', ');
  const sectors = C.sectors
    .map((s) => `<li><strong>${escHtml(s.name)}</strong> — ${escHtml(s.description)}</li>`)
    .join('\n');
  const smes = (C.smes || [])
    .map((s) => {
      const name = typeof s === 'string' ? s : s.name;
      const desc = typeof s === 'object' && s.desc ? ` — ${escHtml(s.desc)}` : '';
      return `<li><strong>${escHtml(name)}</strong>${desc}</li>`;
    })
    .join('\n');
  return (
    `<noscript${NS_STYLE}>\n` +
    `<h2>Brands &amp; organisations dreamlab has worked with</h2>\n<p>${clients}</p>\n` +
    `<h2>Public sector, research &amp; innovation partners</h2>\n<p>${publicSector}</p>\n` +
    `<h2>Sectors we work across</h2>\n<ul>\n${sectors}\n</ul>\n` +
    `<h2>SME &amp; studio partners</h2>\n<ul>\n${smes}\n</ul>\n` +
    `</noscript>`
  );
}

function aboutNoscript() {
  const pillars = (C.about.pillars || [])
    .map(
      (p) =>
        `<li><strong>${escHtml(p.name)}: ${escHtml(p.headline)}</strong> ${escHtml(p.body)}</li>`
    )
    .join('\n');
  const timeline = (C.about.timeline || [])
    .map(
      (t) => `<li><strong>${escHtml(t.year)} — ${escHtml(t.title)}</strong> ${escHtml(t.body)}</li>`
    )
    .join('\n');
  return (
    `<noscript${NS_STYLE}>\n` +
    `<h2>How dreamlab operates — four principles</h2>\n<ul>\n${pillars}\n</ul>\n` +
    `<h2>dreamlab timeline</h2>\n<ul>\n${timeline}\n</ul>\n` +
    `</noscript>`
  );
}

// ── Anchors (insert fallbacks just before the footer) ───────
const FOOTER_ANCHOR = '  <!-- ── FOOTER';
const HEAD_ANCHOR = '</head>';

console.log('Injecting structured data + noscript fallbacks…');

writePage('team/index.html', (html) => {
  html = upsertRegion(html, 'HEAD', teamJsonLd(), HEAD_ANCHOR);
  html = upsertRegion(html, 'BODY', teamNoscript(), FOOTER_ANCHOR);
  return html;
});

writePage('contact/index.html', (html) => {
  html = upsertRegion(html, 'HEAD', faqJsonLd(), HEAD_ANCHOR);
  html = upsertRegion(html, 'BODY', faqNoscript(), FOOTER_ANCHOR);
  return html;
});

writePage('expertise/index.html', (html) => {
  html = upsertRegion(html, 'HEAD', servicesJsonLd(), HEAD_ANCHOR);
  html = upsertRegion(html, 'BODY', servicesNoscript(), FOOTER_ANCHOR);
  return html;
});

writePage('work/index.html', (html) => {
  html = upsertRegion(html, 'BODY', workNoscript(), FOOTER_ANCHOR);
  return html;
});

writePage('about/index.html', (html) => {
  html = upsertRegion(html, 'BODY', aboutNoscript(), FOOTER_ANCHOR);
  return html;
});

// ── Regenerate llms.txt ─────────────────────────────────────
function buildLlmsTxt() {
  const L = [];
  L.push('# dreamlab');
  L.push('');
  L.push(
    "> dreamlab is a creative technology studio exploring what's possible at the edge of AI, real-time computing, and immersive experience. We co-create next-generation content, workflows, products, and worlds across film, content, games, advertising, music, and art — working with brands, studios, and IP to turn emerging technology into impact driven creative output."
  );
  L.push('');
  L.push(
    `Based across Manchester, Liverpool, Cumbria and London. ${C.team.length}+ deep tech specialists working from labs at MediaCity Manchester, Liverpool, the Lake District (Cumbria) and London.`
  );
  L.push('');
  L.push('## Locations');
  L.push('');
  L.push('- MediaCity, Manchester — primary lab');
  L.push('- Liverpool');
  L.push('- Cumbria (Lake District) — residential co-creation facility');
  L.push('- London');
  L.push('');
  L.push('## Our expertise & capabilities');
  L.push('');
  C.services.forEach((s) => {
    const label = String(s.label).replace(/<[^>]+>/g, '');
    L.push(`### ${label}`);
    L.push(String(s.description).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    (s.capabilities || []).forEach((c) => L.push(`- ${c.title}: ${c.desc}`));
    L.push('');
  });
  L.push('## Sectors we work across');
  L.push('');
  C.sectors.forEach((s) => L.push(`- ${s.name}: ${s.description}`));
  L.push('');
  L.push('## The team');
  L.push('');
  L.push(`The dreamlab collective is ${C.team.length} specialists. Selected members:`);
  L.push('');
  C.team.forEach((m) => {
    L.push(`- **${m.name}** — ${m.role}${m.award ? ` (${m.award})` : ''}: ${m.bio}`);
  });
  L.push('');
  L.push('## Brands & organisations we have worked with');
  L.push('');
  L.push(C.clients.map((c) => (typeof c === 'string' ? c : c.name)).join(', ') + '.');
  L.push('');
  L.push('## Public sector, research & innovation partners');
  L.push('');
  L.push((C.publicSector || []).map((c) => (typeof c === 'string' ? c : c.name)).join(', ') + '.');
  L.push('');
  L.push('## SME & studio partners');
  L.push('');
  (C.smes || []).forEach((s) => {
    const name = typeof s === 'string' ? s : s.name;
    const desc = typeof s === 'object' && s.desc ? `: ${s.desc}` : '';
    L.push(`- ${name}${desc}`);
  });
  L.push('');
  L.push('## Frequently asked questions');
  L.push('');
  C.faqs.forEach((f) => {
    L.push(`### ${f.q}`);
    L.push(f.a);
    L.push('');
  });
  L.push('## Key pages');
  L.push('');
  L.push(`- [Home](${ORIGIN}/): Overview and positioning`);
  L.push(`- [About](${ORIGIN}/about/): Mission, manifesto, principles, history`);
  L.push(`- [Expertise](${ORIGIN}/expertise/): What we deliver`);
  L.push(`- [Work](${ORIGIN}/work/): Clients, partners and sectors`);
  L.push(`- [Team](${ORIGIN}/team/): The ${C.team.length} specialists in the collective`);
  L.push(`- [Contact](${ORIGIN}/contact/): Start a project, book training, explore a residency`);
  L.push('');
  L.push('## Contact');
  L.push('');
  L.push(`- Email: ${C.company.email}`);
  L.push(`- LinkedIn: ${C.company.linkedin}`);
  L.push(`- Website: ${ORIGIN}/`);
  L.push('');
  return L.join('\n');
}

fs.writeFileSync(path.join(ROOT, 'llms.txt'), buildLlmsTxt());
console.log('  ✓ llms.txt');
console.log('Done.');
