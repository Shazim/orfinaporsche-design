import React, { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  fallbackSrc?: string;
  priority?: boolean;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  fallbackSrc = "/placeholder.svg",
  priority = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      setError(false);
    };

    img.onerror = () => {
      setImageSrc(fallbackSrc);
      setIsLoading(false);
      setError(true);
    };

    // Start loading the image
    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  if (isLoading) {
    return (
      <Skeleton
        className={cn(
          "w-full h-full bg-gray-200 animate-pulse",
          skeletonClassName
        )}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={cn("transition-opacity duration-300 ease-in-out", className)}
      {...props}
    />
  );
};

export default ImageWithLoader;
