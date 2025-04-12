// script.js
// Magic cursor glow effect
const glow = document.querySelector('.magic-glow');
document.addEventListener('mousemove', e => {
  glow.style.setProperty('--x', `${e.clientX}px`);
  glow.style.setProperty('--y', `${e.clientY}px`);
});

// Music toggle
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.textContent = '🔇';
  } else {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});

// Auto-play music on page load (requires user interaction on most browsers)
window.addEventListener('DOMContentLoaded', () => {
  const playMusic = () => {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggle.textContent = '🔊';
    }).catch((e) => {
      console.warn('Autoplay prevented:', e);
    });
  };

// Установка громкости по умолчанию
bgMusic.volume = 0.3; // Можно изменить на любое значение

  document.body.addEventListener('click', playMusic, { once: true });
});

console.log("Fantasy Profile Loaded with Magic ✨");