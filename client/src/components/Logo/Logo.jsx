import React from 'react';

const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-3">
    <img
      src="/logo.svg"
      alt=""
      width="40"
      height="40"
      className={`shrink-0 ring-1 ring-stone-200 ${compact ? 'size-8 rounded-lg' : 'size-10 rounded-xl shadow-md shadow-stone-900/10 transition group-hover:-rotate-3'}`}
    />
    <span className={`font-black tracking-tight text-stone-900 ${compact ? 'text-xl' : 'text-2xl transition group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
      Wow Bao<span className={compact ? '' : 'text-3xl leading-none text-brand-600 dark:text-brand-400'}>.</span>
    </span>
  </span>
);

export default Logo;
