import React from "react";

interface SectionHeadingProps {
  title: string;
  variant?: "numbered" | "solid";
  number?: number;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  variant = "numbered", 
  number, 
  className = "" 
}: SectionHeadingProps) => {
  if (variant === "solid") {
    return (
      <div className={`flex items-center mb-8 sm:mb-12 ${className}`}>
        <div className="bg-black text-white px-6 py-3 rounded-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  // numbered variant (default)
  return (
    <div className={`flex items-center space-x-4 mb-8 sm:mb-12 ${className}`}>
      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading; 