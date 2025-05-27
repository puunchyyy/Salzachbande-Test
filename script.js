const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Navigation schließen bei Klick auf Link (mobil)
document.querySelectorAll('.nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if(nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});
