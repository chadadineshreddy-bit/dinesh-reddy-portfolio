import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40" />

      {/* Top Left Cyan Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow" />

      {/* Top Right Purple Glow */}
      <div className="absolute top-20 -right-32 w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" />

      {/* Middle Blue Glow */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-primary-600/10 blur-[140px] pointer-events-none" />

      {/* Bottom Indigo Glow */}
      <div className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Bottom Left Cyan Glow */}
      <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-cyan-600/10 blur-[100px]" />
    </div>
  );
}
