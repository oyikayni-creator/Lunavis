/* ===== MENU ===== */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

/* ===== SLIDER ===== */
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;
let startX = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(() => {
  index = (index + 1) % slideCount;
  updateSlide();
}, 5000);

/* ===== SWIPE ===== */
slides.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < slideCount - 1) index++;
  if (endX - startX > 50 && index > 0) index--;
  updateSlide();
});
