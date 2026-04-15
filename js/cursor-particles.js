/* ============================================================
   DREAMLAB — CURSOR TRAIL PARTICLES
   Elegant comet-tail sparkle that traces cursor movement.
   Spawns only when moving; slow drift, long fade.
   ============================================================ */

(function () {
  if (window.matchMedia('(hover: none)').matches) return;

  const COLORS = [
    '#c4b5fd', // lavender
    '#a78bfa', // purple-light
    '#7c3aed', // purple
    '#06b6d4', // cyan
    '#67e8f9', // cyan-light
    '#ec4899', // pink
    '#f9a8d4', // pink-light
    '#ffffff',  // white
  ];

  // How far the cursor must move before spawning another particle
  const DIST_THRESHOLD = 6;
  const MAX_PARTICLES  = 180;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed','inset:0','width:100%','height:100%',
    'pointer-events:none','z-index:99999','mix-blend-mode:screen',
  ].join(';');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  let mx = -999, my = -999, lx = -999, ly = -999;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  window.addEventListener('mouseleave', () => { mx = -999; my = -999; });

  const particles = [];

  // ── 4-pointed star shape ──────────────────────────────────
  function drawStar(x, y, r, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    const inner = r * 0.28;
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      const radius = i % 2 === 0 ? r : inner;
      i === 0 ? ctx.moveTo(Math.cos(a) * radius, Math.sin(a) * radius)
              : ctx.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // ── Glowing orb ──────────────────────────────────────────
  function drawOrb(x, y, r, color, alpha) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0,   color);
    g.addColorStop(0.4, color);
    g.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.globalAlpha = alpha * 0.85;
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function spawnAt(x, y) {
    if (particles.length >= MAX_PARTICLES) particles.splice(0, 3);

    // Each mouse-move event spawns 2-3 particles in a tight cluster
    const count = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const angle  = Math.random() * Math.PI * 2;
      const speed  = 0.15 + Math.random() * 0.55;
      const isStar = Math.random() < 0.55;
      particles.push({
        x: x + (Math.random() - 0.5) * 5,
        y: y + (Math.random() - 0.5) * 5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.55, // gentle upward drift
        size:  isStar ? (2.5 + Math.random() * 4) : (3 + Math.random() * 5),
        alpha: 0.85 + Math.random() * 0.15,
        decay: 0.010 + Math.random() * 0.012, // slow fade = classy
        rot:   Math.random() * Math.PI,
        rotV:  (Math.random() - 0.5) * 0.06,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        star:  isStar,
      });
    }
  }

  function tick() {
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, W, H);

    // Spawn along movement path
    if (mx > 0 && my > 0) {
      const dx = mx - lx, dy = my - ly;
      const dist = Math.hypot(dx, dy);
      if (dist > DIST_THRESHOLD) {
        // Interpolate spawn points for smooth trails at high cursor speed
        const steps = Math.ceil(dist / DIST_THRESHOLD);
        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          spawnAt(lx + dx * t, ly + dy * t);
        }
        lx = mx; ly = my;
      } else if (lx < 0) {
        lx = mx; ly = my;
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x   += p.vx;
      p.y   += p.vy;
      p.vy  += 0.018; // very light gravity
      p.rot += p.rotV;
      p.alpha -= p.decay;
      p.size  *= 0.995;

      if (p.alpha <= 0 || p.size < 0.3) { particles.splice(i, 1); continue; }

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle   = p.color;

      if (p.star) {
        drawStar(p.x, p.y, p.size, p.rot);
        ctx.globalAlpha = 1;
      } else {
        drawOrb(p.x, p.y, p.size, p.color, p.alpha);
        ctx.globalAlpha = 1;
      }
    }
    ctx.globalAlpha = 1;
  }

  requestAnimationFrame(tick);
})();
