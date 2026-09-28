"use strict";
// Content is visible without JavaScript. Only optional pointer motion is enhanced.
const heart = document.querySelector('.heart-stage');
const heroArt = document.querySelector('.hero-art');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (heart && heroArt && window.matchMedia('(pointer: fine)').matches) {
  heroArt.addEventListener('pointermove', event => {
    if (reducedMotion.matches) return;
    const rect = heroArt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heart.style.transform = `translate(${x * 8}px, ${y * 6}px) rotateY(${x * 2}deg) rotateX(${y * -1.6}deg)`;
  });
  heroArt.addEventListener('pointerleave', () => { heart.style.transform = ''; });
  reducedMotion.addEventListener('change', () => { heart.style.transform = ''; });
}
