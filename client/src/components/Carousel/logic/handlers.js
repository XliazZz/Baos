export const carouselHandlers = (e, instanceRef) => {
  const handlePrev = () => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  const handleIndicatorClick = (index) => {
    instanceRef.current?.moveToIdx(index);
  };

  return {
    handlePrev,
    handleNext,
    handleIndicatorClick,
  };
}