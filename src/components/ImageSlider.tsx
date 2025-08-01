import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
  }>;
  onImageClick: (imageData: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  }) => void;
  className?: string;
}

const ImageSlider = ({
  images,
  onImageClick,
  className = "",
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative group cursor-pointer"
        onClick={() =>
          onImageClick({
            src: currentImage.src,
            alt: currentImage.alt,
            title: currentImage.title,
            subtitle: currentImage.subtitle || "",
          })
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
        <ImageWithLoader
          src={currentImage.src}
          alt={currentImage.alt}
          className="relative w-full max-w-sm h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          skeletonClassName="relative w-full max-w-sm h-96 rounded-lg"
        />

        {/* Click indicator */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
            Click to zoom
          </div>
        </div>

        {/* Navigation arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots indicator - only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image caption */}
      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
        {currentImage.title}
      </span>

      {/* Image counter - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
