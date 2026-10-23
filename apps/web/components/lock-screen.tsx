'use client';

import { useEffect, useState } from 'react';

export function SessionLockMonitor() {
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startTimer = () => {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsLocked(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    startTimer();

    const onBlur = () => {
      setIsLocked(true);
    };

    const onFocus = () => {
      setIsLocked(false);
      setTimeLeft(15 * 60);
    };

    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  if (!isLocked) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 1 1 8 0v4" />
          </svg>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-600">Security lock</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Screen locked</h2>
        <p className="mt-2 text-sm text-slate-500">Your session was locked due to inactivity or focus loss.</p>

        <div className="mt-6 rounded-2xl bg-slate-100 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Auto unlock in</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{Math.max(0, Math.floor(timeLeft / 60))}:{String(timeLeft % 60).padStart(2, '0')}</p>
        </div>

        <button
          onClick={() => {
            setIsLocked(false);
            setTimeLeft(15 * 60);
          }}
          className="mt-6 w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white"
        >
          Unlock session
        </button>
      </div>
    </div>
  );
}
