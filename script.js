// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });
}

// Dark mode toggle with persistence
const darkToggle = document.getElementById('darkModeToggle');

const setTheme = (mode) => {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
};

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark ? 'dark' : 'light');
  });
}

// Scroll animation for #about and #services
const aboutSection = document.getElementById('about');
const servicesSection = document.getElementById('services');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

if (aboutSection) observer.observe(aboutSection);
if (servicesSection) observer.observe(servicesSection);
