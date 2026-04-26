/* ============================================================
   dreamlab — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll effect ──────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Animate bars
      const bars = hamburger.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity  = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      }
    });
    // Close on link click
    mobileNav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const bars = hamburger.querySelectorAll('span');
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      });
    });
  }

  // ── Active nav link ────────────────────────────────────────
  const pathSegment = window.location.pathname.split('/').filter(Boolean)[0] || '';
  document.querySelectorAll('.nav__link, .nav__mobile .nav__link').forEach(link => {
    const href = link.getAttribute('href');
    const hrefSegment = href.split('/').filter(Boolean)[0] || '';
    if (hrefSegment === pathSegment) {
      link.classList.add('active');
    }
  });

  // ── Scroll reveal (Intersection Observer) ──────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ── Animated counters ──────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
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
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  // ── Services page nav ──────────────────────────────────────
  const servicesBtns = document.querySelectorAll('.services-nav__btn');
  const serviceSections = document.querySelectorAll('.service-section[id]');
  if (servicesBtns.length) {
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

    // Update active on scroll
    if (serviceSections.length && 'IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            servicesBtns.forEach(btn => {
              btn.classList.toggle('active', btn.dataset.target === id);
            });
          }
        });
      }, { threshold: 0.4 });
      serviceSections.forEach(s => sectionObserver.observe(s));
    }
  }

  // Contact form submission handled by Formsubmit.co (see contact.html)

  // ── Homepage Vimeo autoplay nudge (cross-browser reliability) ──
  const heroVimeo = document.getElementById('hero-vimeo');
  if (heroVimeo && heroVimeo.tagName === 'IFRAME') {
    const vimeoOrigin = 'https://player.vimeo.com';
    const sendPlay = () => {
      if (!heroVimeo.contentWindow) return;
      heroVimeo.contentWindow.postMessage(JSON.stringify({ method: 'play' }), vimeoOrigin);
      heroVimeo.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 0 }), vimeoOrigin);
    };

    heroVimeo.addEventListener('load', () => {
      // A few quick retries handle cases where autoplay is delayed by player init.
      [0, 200, 600, 1200].forEach(delay => {
        window.setTimeout(sendPlay, delay);
      });
    }, { once: true });

    // If browser throttles first load, try once more after first paint.
    window.setTimeout(sendPlay, 1600);
  }

  // ── Smooth hover cursor glow (optional subtle effect) ──────
  const cards = document.querySelectorAll('.card, .service-card, .team-card, .sector-card, .client-item');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

});
