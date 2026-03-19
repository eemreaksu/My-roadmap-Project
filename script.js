
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(r => observer.observe(r));

  // Staggered card animations on scroll
  const cards = document.querySelectorAll('.roadmap-card, .lang-pill');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.05 });

  cards.forEach(c => {
    c.style.animationPlayState = 'paused';
    cardObserver.observe(c);
  });