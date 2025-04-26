import React, { useMemo } from 'react';

const IconCard = ({ icon, unit, itemProp }) => {
  const styles = useMemo(() => ({
    container: 'flex',
    icon: `my-auto size-5 sm:size-6 md:size-6 lg:size-7 xl:size-6 2xl:size-8`,
    text: 'text-gray-500 dark:text-gray-400 my-auto font-semibold text-base sm:text-base lg:text-lg xl:text-base 2xl:text-lg'
  }), []);

  const content = useMemo(() => (
    <>
      <span
        className={`${icon} ${styles.icon}`}
        role="img"
        aria-hidden="true"
      />
      <span className={styles.text}>
        {unit}
      </span>
    </>
  ), [icon, unit, styles]);

  return (
    <div
      className={styles.container}
      itemProp={itemProp}
      aria-label={`${itemProp === 'weight' ? 'Peso' : 'Tamaño'}: ${unit}`}
    >
      {content}
    </div>
  );
};

export default React.memo(IconCard);