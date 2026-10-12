import confetti from 'canvas-confetti';

/**
 * Fires a celebratory health-themed confetti burst
 * with medical blue, emerald green, and bright gold particles
 * when the user clicks download or explores the app.
 */
export function triggerCareConfetti() {
  try {
    const end = Date.now() + 850;
    const colors = ['#3B82F6', '#10B981', '#60A5FA', '#F59E0B', '#FFFFFF'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.75 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.75 },
        colors: colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Fallback if canvas is unavailable
  }
}

