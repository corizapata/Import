// Animación de partículas de fondo (estrellas brillantes)
const canvas = document.getElementById('particles-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const particles = [];
  const colors = ['#ffd700', '#d90429', '#fff'];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}

// Temporizador de oferta especial
function startCountdown() {
  const countdown = document.getElementById('countdown');
  if (!countdown) return;
  let time = 60 * 15; // 15 minutos
  function update() {
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    countdown.textContent = `${min}:${sec}`;
    if (time > 0) {
      time--;
      setTimeout(update, 1000);
    } else {
      countdown.textContent = '¡Oferta finalizada!';
    }
  }
  update();
}
startCountdown();

// Animación de scroll suave para los botones CTA
const ctaLinks = document.querySelectorAll('.cta-btn');
ctaLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Formulario de suscripción con mensaje de éxito
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    subscribeForm.innerHTML = '<p style="color:#ffd700;font-size:1.2rem;">¡Gracias por suscribirte! 🎮</p>';
  });
}
