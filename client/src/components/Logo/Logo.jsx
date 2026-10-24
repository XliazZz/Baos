import React from 'react';

const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5">
    {/* El SVG cambia solo el color del trazo en modo oscuro */}
    <img
      src="/logo.svg"
      alt=""
      width="711"
      height="636"
      className={`w-auto shrink-0 ${compact ? 'h-9' : 'h-12 transition group-hover:-rotate-6'}`}
    />
    <span className={`font-black tracking-tight text-stone-900 ${compact ? 'text-xl' : 'text-2xl transition group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
      Wow Bao<span className={compact ? '' : 'text-3xl leading-none text-brand-600 dark:text-brand-400'}>.</span>
    </span>
  </span>
);

export default Logo;
