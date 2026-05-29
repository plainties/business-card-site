// MOBILE NAV TOGGLE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// DARK MODE TOGGLE
const darkToggle = document.getElementById('darkModeToggle');

const setTheme = (mode) => {
  document.documentElement.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
};

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const shouldBeDark = !document.documentElement.classList.contains('dark-mode');
    setTheme(shouldBeDark ? 'dark' : 'light');
  });
}

// REVEAL ANIMATION
const revealSections = document.querySelectorAll('.reveal-section');

if (revealSections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.18 }
  );

  revealSections.forEach((section) => observer.observe(section));
}