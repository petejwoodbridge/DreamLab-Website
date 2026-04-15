/* ============================================================
   DREAMLAB — CURSOR SPARKLE PARTICLES
   Magical 4-pointed star trail following the cursor.
   Canvas overlay, pointer-events: none, touch-safe.
   ============================================================ */

(function () {
  // Only on non-touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  const COLORS = [
    '#a78bfa', // purple-light
    '#7c3aed', // purple
    '#06b6d4', // cyan
    '#67e8f9', // cyan-light
    '#ec4899', // pink
    '#f0abfc', // pink-light
    '#ffffff',  // white
  ];

  const MAX_PARTICLES = 120;
  const SPAWN_INTERVAL = 30; // ms between spawns
  let lastSpawn = 0;

  // Canvas setup
  const canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed', 'inset:0', 'width:100%', 'height:100%',
    'pointer-events:none', 'z-index:99999', 'mix-blend-mode:screen',
  ].join(';');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Mouse tracking
  let mx = -999, my = -999;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  window.addEventListener('mouseleave', () => { mx = -999; my = -999; });

  // Particle pool
  const particles = [];

  function Particle(x, y) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.6 + Math.random() * 1.8;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - 1.2; // drift upward
    this.size = 3 + Math.random() * 5;
    this.alpha = 1;
    this.decay = 0.018 + Math.random() * 0.022;
    this.rotation = Math.random() * Math.PI;
    this.rotSpeed = (Math.random() - 0.5) * 0.12;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.type = Math.random() < 0.6 ? 'star' : 'dot';
  }

  // Draw a 4-pointed star (cross shape)
  function drawStar(ctx, x, y, r, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    const arms = 4;
    const innerR = r * 0.25;
    for (let i = 0; i < arms * 2; i++) {
      const a = (i * Math.PI) / arms;
      const radius = i % 2 === 0 ? r : innerR;
      if (i === 0) ctx.moveTo(Math.cos(a) * radius, Math.sin(a) * radius);
      else ctx.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Draw a glowing dot
  function drawDot(ctx, x, y, r, color, alpha) {
    const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, color);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function spawnParticle() {
    if (mx < 0 || my < 0) return;
    if (particles.length >= MAX_PARTICLES) particles.splice(0, 5);
    // Spawn a small cluster each tick for density
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(
        mx + (Math.random() - 0.5) * 8,
        my + (Math.random() - 0.5) * 8
      ));
    }
  }

  function tick(ts) {
    requestAnimationFrame(tick);

    ctx.clearRect(0, 0, W, H);

    // Spawn
    if (ts - lastSpawn > SPAWN_INTERVAL) {
      spawnParticle();
      lastSpawn = ts;
    }

    // Update & draw
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // subtle gravity
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;
      p.size *= 0.992;

      if (p.alpha <= 0 || p.size < 0.4) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.type === 'star') {
        drawStar(ctx, p.x, p.y, p.size, p.rotation);
      } else {
        drawDot(ctx, p.x, p.y, p.size * 1.4, p.color, p.alpha);
        ctx.globalAlpha = 1; // reset after radial gradient draw
      }
    }

    ctx.globalAlpha = 1;
  }

  requestAnimationFrame(tick);
})();
