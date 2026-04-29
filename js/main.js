/* ============================================================
   dreamlab — Main JavaScript
   ============================================================ */

// ── Nav scroll effect ────────────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile nav toggle ────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    const bars = hamburger.querySelectorAll('span');
    if (isOpen) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity  = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });

  mobileNav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    });
  });
}

// ── Active nav link ──────────────────────────────────────────
function updateActiveNav() {
  const seg = window.location.pathname.split('/').filter(Boolean)[0] || '';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const hrefSeg = href.split('/').filter(Boolean)[0] || '';
    link.classList.toggle('active', hrefSeg === seg);
  });
}

// ── Scroll reveal (Intersection Observer) ───────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  if (!reveals.length) return;
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// ── Animated counters ────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const start = performance.now();
      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ── Services page nav ────────────────────────────────────────
function initServicesNav() {
  const servicesBtns = document.querySelectorAll('.services-nav__btn');
  const serviceSections = document.querySelectorAll('.service-section[id]');
  if (!servicesBtns.length) return;

  servicesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      servicesBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h')) || 72;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset - 24,
          behavior: 'smooth'
        });
      }
    });
  });

  if (serviceSections.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          servicesBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.target === id));
        }
      });
    }, { threshold: 0.4 });
    serviceSections.forEach(s => sectionObserver.observe(s));
  }
}

// ── Card hover glow ──────────────────────────────────────────
function initCardGlow() {
  document.querySelectorAll('.card, .service-card, .team-card, .sector-card, .client-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });
}

// ── Vimeo autoplay nudge (runs once — video element persists) ─
function initVimeoAutoplay() {
  const heroVimeo = document.getElementById('hero-vimeo');
  if (!heroVimeo || heroVimeo.tagName !== 'IFRAME') return;
  const origin = 'https://player.vimeo.com';
  const sendPlay = () => {
    if (!heroVimeo.contentWindow) return;
    heroVimeo.contentWindow.postMessage(JSON.stringify({ method: 'play' }), origin);
    heroVimeo.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 0 }), origin);
  };
  heroVimeo.addEventListener('load', () => {
    [0, 200, 600, 1200].forEach(d => window.setTimeout(sendPlay, d));
  }, { once: true });
  window.setTimeout(sendPlay, 1600);
}

// ── Re-init after SPA navigation ────────────────────────────
function afterNavigate() {
  updateActiveNav();
  initCounters();
  initServicesNav();
  initCardGlow();
  if (typeof window.__dlRender === 'function') window.__dlRender();
  initScrollReveal(); // must run after __dlRender so dynamically-rendered cards exist
}

// ── Re-execute scripts inside swapped content ────────────────
// innerHTML assignment doesn't run <script> tags; this fixes that.
function reExecuteScripts(container) {
  container.querySelectorAll('script').forEach(old => {
    const s = document.createElement('script');
    Array.from(old.attributes).forEach(a => s.setAttribute(a.name, a.value));
    s.textContent = old.textContent;
    old.parentNode.replaceChild(s, old);
  });
}

// ── SPA Navigation ───────────────────────────────────────────
// Intercepts internal link clicks to swap #page-content without
// reloading the page, keeping the background video playing.

async function navigateTo(url, pushState = true) {
  const parsed = new URL(url, window.location.origin);
  const path = parsed.pathname;
  const hash = parsed.hash;

  // Same path + hash only: just scroll
  if (path === window.location.pathname && hash) {
    if (pushState) history.pushState(null, '', url);
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const newContent = doc.getElementById('page-content');
    const curContent = document.getElementById('page-content');
    if (!newContent || !curContent) { window.location.href = url; return; }

    curContent.innerHTML = newContent.innerHTML;
    reExecuteScripts(curContent);
    document.title = doc.title;

    if (pushState) history.pushState({ path }, '', url);

    // Scroll to top or hash target
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    afterNavigate();

    // Close mobile nav if open
    const mobileNav = document.querySelector('.nav__mobile');
    const hamburger = document.querySelector('.nav__hamburger');
    if (mobileNav?.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  } catch (err) {
    console.warn('SPA nav failed, falling back:', err);
    window.location.href = url;
  }
}

function initSPANavigation() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    // Skip external, mailto, tel, target=_blank, hash-only
    if (/^(https?:|\/\/|mailto:|tel:)/.test(href)) return;
    if (link.target === '_blank') return;
    if (href.startsWith('#')) return;
    e.preventDefault();
    navigateTo(href);
  });

  window.addEventListener('popstate', () => {
    navigateTo(window.location.href, false);
  });
}

// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileNav();
  updateActiveNav();
  initScrollReveal();
  initCounters();
  initServicesNav();
  initCardGlow();
  initVimeoAutoplay();
  initSPANavigation();
});
