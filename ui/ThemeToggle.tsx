'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this component only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{ width: '18px', height: '18px', border: '1px solid rgba(156, 163, 175, 0.5)' }}
    />
  );
}
