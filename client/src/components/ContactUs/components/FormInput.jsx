import React from 'react';

const fieldClasses = 'mt-2 block w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

const FormInput = ({ id, label, textarea, className = '', ...props }) => {
  const Field = textarea ? 'textarea' : 'input';

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-bold text-ink">
        {label}
      </label>
      <Field id={id} className={fieldClasses} {...props} />
    </div>
  );
};

export default FormInput;
