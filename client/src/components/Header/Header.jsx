import React from 'react';

const Header = ({ eyebrow, title, children, action }) => (
  <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <p className="chip">{eyebrow}</p>
      <h2 className="mt-5 text-4xl sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-lg">{children}</p>}
    </div>
    {action}
  </div>
);

export default Header;
