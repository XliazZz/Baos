import React from 'react';

const chipStyles = { neutral: 'chip', brand: 'chip chip-brand', dark: 'chip chip-dark' };

const Header = ({ eyebrow, title, children, action, center = false, chip = 'neutral' }) => (
  <div className={`reveal flex flex-col gap-6 ${center ? 'mx-auto max-w-2xl items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
    <div className={center ? '' : 'max-w-2xl'}>
      <p className={chipStyles[chip]}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      {children && <p className="mt-2 text-base text-stone-600">{children}</p>}
    </div>
    {action}
  </div>
);

export default Header;
