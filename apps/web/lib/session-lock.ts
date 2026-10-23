export function useSessionLock(timeoutMinutes = 15) {
  const timeoutMs = timeoutMinutes * 60 * 1000;

  let inactivityTimer: number | null = null;

  const resetTimer = () => {
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }

    inactivityTimer = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('session-lock-triggered'));
    }, timeoutMs);
  };

  const attach = () => {
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

    events.forEach((eventName) => {
      window.addEventListener(eventName, resetTimer, { passive: true });
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        window.dispatchEvent(new CustomEvent('session-lock-triggered'));
      }
    });

    window.addEventListener('blur', () => {
      window.dispatchEvent(new CustomEvent('session-lock-triggered'));
    });

    resetTimer();
  };

  const detach = () => {
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }

    window.removeEventListener('mousemove', resetTimer);
    window.removeEventListener('mousedown', resetTimer);
    window.removeEventListener('keydown', resetTimer);
    window.removeEventListener('scroll', resetTimer);
    window.removeEventListener('touchstart', resetTimer);
  };

  return { attach, detach, resetTimer };
}
