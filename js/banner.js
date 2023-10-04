const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideBox = document.querySelector('.slide-box');

prev.addEventListener('click', () => {
  slideBox.style.transform = 'translate(-100vw)';
});
next.addEventListener('click', () => {
  slideBox.style.transform = 'translate(100vw)';
});
