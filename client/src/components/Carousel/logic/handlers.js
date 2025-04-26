export const carouselHandlers = (e, instanceRef) => {
  const handlePrev = () => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  return {
    handlePrev,
    handleNext,
  };
}
