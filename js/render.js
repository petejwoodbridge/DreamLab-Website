/* ============================================================
   DREAMLAB — Content Rendering
   Reads window.DREAMLAB_CONTENT and populates page elements
   by id. Runs before main.js so reveal observers pick up
   the freshly-rendered nodes.
   ============================================================ */

(function () {
  const C = window.DREAMLAB_CONTENT;
  if (!C) { console.warn('DreamLab content missing'); return; }

  // Small helpers
  const el = id => document.getElementById(id);
  const esc = s => (s || '').replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
  const tagClass = c => c === 'cyan' ? 'tag tag-cyan' : c === 'pink' ? 'tag tag-pink' : c === 'green' ? 'tag tag-green' : 'tag';
  const dotClass = c => `dot-${c || 'purple'}`;
  const revealDelay = i => i > 0 ? `reveal-delay-${Math.min(i, 3)}` : '';

  const linkedinSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  // ──────────────────────────────────────────────────────────
  // TEAM GRID
  // ──────────────────────────────────────────────────────────
  const teamGrid = el('team-grid');
  if (teamGrid) {
    // Stable sort: keep original order but push entries without a LinkedIn to the bottom.
    // Leadership appears first in the source array and all have LinkedIns, so they stay on top.
    const teamSorted = C.team
      .map((m, i) => ({ m, i }))
      .sort((a, b) => {
        const la = a.m.linkedin ? 0 : 1;
        const lb = b.m.linkedin ? 0 : 1;
        if (la !== lb) return la - lb;
        return a.i - b.i;
      })
      .map(x => x.m);
    teamGrid.innerHTML = teamSorted.map((m, i) => `
      <div class="team-card reveal ${revealDelay(i % 3)}">
        <div class="team-card__header">
          <div class="team-card__avatar${m.image ? ' team-card__avatar--img' : ''}"${!m.image && m.avatarGradient ? ` style="background: ${m.avatarGradient};"` : ''}>${m.image ? `<img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy" onerror="this.parentElement.classList.remove('team-card__avatar--img'); this.parentElement.style.background='${esc(m.avatarGradient || 'var(--grad-1)')}'; this.outerHTML='${esc(m.initials || '')}';">` : esc(m.initials)}</div>
          <div>
            <div class="team-card__name">${esc(m.name)}</div>
            <div class="team-card__role">${esc(m.role)}</div>
          </div>
        </div>
        <p class="team-card__bio">${esc(m.bio)}</p>
        <div class="team-card__tags">
          ${(m.tags || []).map(t => `<span class="${tagClass(t.color)}">${esc(t.label)}</span>`).join('')}
        </div>
        <div class="team-card__footer">
          ${m.award ? `<div class="team-card__award"><span class="team-card__award-icon">★</span>${esc(m.award)}</div>` : '<div></div>'}
          ${m.linkedin ? `<a href="${esc(m.linkedin)}" target="_blank" rel="noopener" class="team-card__linkedin">${linkedinSvg} LinkedIn</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  // CLIENTS GRID (Work page) — logo wall with text fallback
  // Accepts: 'Client Name'  OR  { name: '...', logo: 'img/clients/x.svg' }
  // ──────────────────────────────────────────────────────────
  const slug = name => name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const clientLogoExts = ['svg', 'png', 'webp'];
  const tryNextLogo = (img, name) => {
    const exts = img.dataset.exts ? img.dataset.exts.split(',') : [];
    if (exts.length) {
      img.dataset.exts = exts.slice(1).join(',');
      img.src = `img/clients/${img.dataset.slug}.${exts[0]}`;
    } else {
      const span = document.createElement('span');
      span.className = img.classList.contains('client-item__logo') ? 'client-item__name' : 'ticker__item-text';
      span.textContent = name;
      img.replaceWith(span);
    }
  };
  window.__dlClientFallback = tryNextLogo;

  const renderClient = (c, i) => {
    const name = typeof c === 'string' ? c : c.name;
    const s = slug(name);
    const custom = typeof c === 'object' && c.logo;
    const initialSrc = custom ? c.logo : `img/clients/${s}.${clientLogoExts[0]}`;
    const exts = custom ? '' : clientLogoExts.slice(1).join(',');
    return `
      <div class="client-item reveal reveal-delay-${i % 4}" title="${esc(name)}">
        <img class="client-item__logo"
             src="${initialSrc}"
             alt="${esc(name)}"
             data-slug="${s}"
             data-exts="${exts}"
             data-name="${esc(name)}"
             loading="lazy"
             onerror="window.__dlClientFallback(this, this.dataset.name)">
      </div>`;
  };

  const clientsGrid = el('clients-grid');
  if (clientsGrid) {
    clientsGrid.innerHTML = C.clients.map(renderClient).join('');
  }

  // ──────────────────────────────────────────────────────────
  // SECTORS GRID (Work page)
  // ──────────────────────────────────────────────────────────
  const sectorsGrid = el('sectors-grid');
  if (sectorsGrid) {
    sectorsGrid.innerHTML = C.sectors.map((s, i) => `
      <div class="sector-card reveal reveal-delay-${i % 3}">
        <div class="sector-card__icon">${s.icon}</div>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.description)}</p>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  // HOMEPAGE TICKER — scrolling logo marquee with text fallback
  // ──────────────────────────────────────────────────────────
  const tickerTrack = el('ticker-track');
  if (tickerTrack) {
    const renderTickerItem = (c) => {
      const name = typeof c === 'string' ? c : c.name;
      const s = slug(name);
      const custom = typeof c === 'object' && c.logo;
      const initialSrc = custom ? c.logo : `img/clients/${s}.${clientLogoExts[0]}`;
      const exts = custom ? '' : clientLogoExts.slice(1).join(',');
      return `<div class="ticker__item" title="${esc(name)}">
        <img src="${initialSrc}" alt="${esc(name)}"
             data-slug="${s}"
             data-exts="${exts}"
             data-name="${esc(name)}"
             loading="lazy"
             onerror="window.__dlClientFallback(this, this.dataset.name)">
      </div>`;
    };
    const items = C.clients.map(renderTickerItem).join('');
    // Duplicate for seamless infinite scroll
    tickerTrack.innerHTML = items + items;
  }

  // ──────────────────────────────────────────────────────────
  // SERVICES CAPABILITIES
  // Each service section has id="capabilities-<service.id>"
  // ──────────────────────────────────────────────────────────
  (C.services || []).forEach(service => {
    const capContainer = el(`capabilities-${service.id}`);
    if (capContainer) {
      capContainer.innerHTML = service.capabilities.map(cap => `
        <div class="capability-item">
          <div class="capability-item__dot ${dotClass(service.dotColor)}"></div>
          <div>
            <div class="capability-item__label">${esc(cap.title)}</div>
            <div class="capability-item__desc">${esc(cap.desc)}</div>
          </div>
        </div>
      `).join('');
    }

    // Description + title + label + icon
    const titleEl = el(`service-title-${service.id}`);   if (titleEl) titleEl.innerHTML = service.title;
    const descEl  = el(`service-desc-${service.id}`);    if (descEl)  descEl.textContent = service.description;
    const labelEl = el(`service-label-${service.id}`);   if (labelEl) labelEl.textContent = `${service.number} — ${service.label}`;

    // Highlight box (optional, only some services have one)
    const hlEl = el(`service-highlight-${service.id}`);
    if (hlEl && service.highlight) {
      hlEl.innerHTML = `<h4>${esc(service.highlight.title)}</h4><p>${esc(service.highlight.body)}</p>`;
      hlEl.style.display = '';
    } else if (hlEl) {
      hlEl.style.display = 'none';
    }
  });

  // ──────────────────────────────────────────────────────────
  // ABOUT — Pillars grid
  // ──────────────────────────────────────────────────────────
  const pillarsGrid = el('pillars-grid');
  if (pillarsGrid && C.about && C.about.pillars) {
    pillarsGrid.innerHTML = C.about.pillars.map((p, i) => `
      <div class="pillar-card pillar-card--${p.color || 'purple'} reveal ${revealDelay(i)}">
        <div class="pillar-card__head">
          <div class="pillar-card__num">${esc(p.number)}</div>
          <div class="pillar-card__name">${esc(p.name)}</div>
        </div>
        <h3 class="pillar-card__headline">${esc(p.headline)}</h3>
        <p class="pillar-card__body">${esc(p.body)}</p>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  // ABOUT — Timeline
  // ──────────────────────────────────────────────────────────
  const timeline = el('timeline');
  if (timeline && C.about && C.about.timeline) {
    timeline.innerHTML = C.about.timeline.map((t, i) => {
      const mods = [
        t.now    ? 'timeline-item--now'    : '',
        t.future ? 'timeline-item--future' : '',
      ].filter(Boolean).join(' ');
      return `
        <div class="timeline-item ${mods} reveal">
          <div class="timeline-item__year">${esc(t.year)}</div>
          <h4 class="timeline-item__title">${esc(t.title)}</h4>
          <p class="timeline-item__body">${esc(t.body)}</p>
        </div>`;
    }).join('');
  }

  // ──────────────────────────────────────────────────────────
  // FAQs (Contact page)
  // ──────────────────────────────────────────────────────────
  const faqList = el('faq-list');
  if (faqList) {
    faqList.innerHTML = C.faqs.map(f => `
      <div class="faq__item">
        <button class="faq__question">${esc(f.q)}<span class="arrow">+</span></button>
        <div class="faq__answer">${esc(f.a)}</div>
      </div>
    `).join('');
  }

  // ──────────────────────────────────────────────────────────
  // CONTACT DETAILS
  // ──────────────────────────────────────────────────────────
  const emailLink = el('contact-email');
  if (emailLink) {
    emailLink.textContent = C.company.email;
    emailLink.href = `mailto:${C.company.email}`;
  }
  const locEl = el('contact-location');   if (locEl)   locEl.textContent = C.company.location;
  const alsoEl = el('contact-also');      if (alsoEl)  alsoEl.textContent = C.company.alsoIn;

  // ──────────────────────────────────────────────────────────
  // LINKEDIN LINKS (all elements with data-dl-linkedin)
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('[data-dl-linkedin]').forEach(a => { a.href = C.company.linkedin; });
  document.querySelectorAll('[data-dl-email]').forEach(a => {
    a.href = `mailto:${C.company.email}`;
    if (a.dataset.dlEmail === 'text') a.textContent = C.company.email;
  });
  document.querySelectorAll('[data-dl-bluesky]').forEach(a => { a.href = C.company.bluesky; });

  // ──────────────────────────────────────────────────────────
  // STATS (counters)
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('[data-stat-index]').forEach(node => {
    const idx = parseInt(node.dataset.statIndex, 10);
    const stat = C.stats[idx];
    if (!stat) return;
    const valueEl = node.querySelector('[data-stat-value]');
    const labelEl = node.querySelector('[data-stat-label]');
    if (valueEl) {
      valueEl.textContent = `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`;
      valueEl.dataset.count = stat.value;
      if (stat.suffix) valueEl.dataset.suffix = stat.suffix;
      if (stat.prefix) valueEl.dataset.prefix = stat.prefix;
    }
    if (labelEl) labelEl.textContent = stat.label;
  });

})();
