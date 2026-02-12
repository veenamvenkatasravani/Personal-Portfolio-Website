// Typed.js animation
new Typed('.multiple-text', {
  strings: [
    'Full Stack Developer',
    'Aspiring Software Developer',
    'Python Enthusiast'
  ],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true
});


// Smooth scroll (optional enhancement)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  // Click highlight
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Scroll highlight
    window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });


