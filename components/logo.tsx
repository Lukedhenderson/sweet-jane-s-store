import Image from "next/legacy/image";
import React from 'react';

interface LogoProps {
  className?: string;
}

  const Logo: React.FC<LogoProps> = ({ className }) => (
    <div className={className}>
      <Image
        src="/images/logo.png" // Correct path to your image in the public folder
        alt="Description of the image"
        width={80} // You can also use Tailwind's w-20 class in the parent div
        height={80} // Ensure this matches the width for a square image
        className="rounded-full" // Apply rounded class directly to the image
      />
    </div>
);

export default Logo;