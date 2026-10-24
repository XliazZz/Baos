import React from 'react';

const fieldClasses = 'block w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 transition sm:text-sm placeholder:text-stone-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none aria-[invalid=true]:border-brand-600';

const FormInput = ({ id, label, textarea, className = '', ...props }) => {
  const Field = textarea ? 'textarea' : 'input';

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold tracking-wider text-stone-700 uppercase">
        {label}
      </label>
      <Field id={id} className={fieldClasses} {...props} />
    </div>
  );
};

export default FormInput;
