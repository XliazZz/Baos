import React from 'react';

const Header = ({ eyebrow, title, children }) => (
  <div className="max-w-2xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
    {children && <p className="mt-5 text-lg">{children}</p>}
  </div>
);

export default Header;
