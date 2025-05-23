import React from 'react'

const CardTestimonial = ({ title, comment, byName, stars }) => {
  return (
    <div className="keen-slider__slide">
      <blockquote
        className="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12 xl:p-4"
      >
        <div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`sm:size-7 size-5 md:size-7 xl:size-5 ${index < stars ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-indigo-600 sm:text-4xl md:text-3xl xl:text-2xl">{title}</p>

            <p className="mt-4 leading-relaxed text-gray-700 sm:text-2xl md:text-xl xl:text-lg">
              {comment}
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 sm:text-xl md:text-lg xl:text-base">
          &mdash; {byName}
        </footer>
      </blockquote>
    </div>
  )
}

export default CardTestimonial
