import React from 'react';

const Crescent = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Star = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Lantern = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8l2 6H6z" />
    <path d="M7 8v8h10V8" />
    <path d="M8 16h8l-2 6h-4z" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
);

export default function RamadanDecor() {
  const decorItems = [
    { id: 1, Icon: Lantern, delay: '0s', lineLength: 'h-16' },
    { id: 2, Icon: Star, delay: '0.6s', lineLength: 'h-10' },
    { id: 3, Icon: Crescent, delay: '1.2s', lineLength: 'h-24' },
    { id: 4, Icon: Star, delay: '0.4s', lineLength: 'h-12' },
    { id: 5, Icon: Lantern, delay: '0.8s', lineLength: 'h-14' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-around px-10 md:px-32 pointer-events-none z-[9999]">
      {decorItems.map(({ id, Icon, delay, lineLength }) => (
        <div
          key={id}
          className="relative flex flex-col items-center animate-swing"
          style={{ animationDelay: delay }}
        >
          <div className={`w-[1px] ${lineLength} bg-gradient-to-b from-amber-500/60 to-amber-500/0`} />
          <div className="text-amber-500 dark:text-amber-400 mt-1 dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300">
            <Icon />
          </div>
        </div>
      ))}
    </div>
  );
}