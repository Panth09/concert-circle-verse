import React from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = "md", 
  showText = true, 
  className = "" 
}) => {
  const sizes = {
    sm: { svg: 24, text: "text-lg" },
    md: { svg: 32, text: "text-xl" },
    lg: { svg: 48, text: "text-3xl" }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          className="animated-logo-svg"
          style={{ height: currentSize.svg, width: currentSize.svg }}
          role="img" 
          aria-label="Concert Circle Logo"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ddde0" />
              <stop offset="50%" stopColor="#d269e6" />
              <stop offset="100%" stopColor="#ff3131" />
            </linearGradient>
            <filter id="dynamicGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform="translate(50, 50)">
            <circle 
              cx="0" 
              cy="0" 
              r="35" 
              stroke="url(#logoGradient)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.6" 
              filter="url(#dynamicGlow)"
              className="animate-pulse-ring-1"
            />
            <circle 
              cx="0" 
              cy="0" 
              r="25" 
              stroke="url(#logoGradient)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.8" 
              filter="url(#dynamicGlow)"
              className="animate-pulse-ring-2"
            />
            <circle 
              cx="0" 
              cy="0" 
              r="15" 
              stroke="url(#logoGradient)" 
              strokeWidth="2" 
              fill="none" 
              opacity="1" 
              filter="url(#dynamicGlow)"
              className="animate-pulse-ring-3"
            />
          </g>
        </svg>
      </div>
      {showText && (
        <span className={`font-bold bg-gradient-primary bg-clip-text text-transparent animated-logo-text ${currentSize.text}`}>
          Concert Circle
        </span>
      )}
    </div>
  );
};

export default AnimatedLogo;