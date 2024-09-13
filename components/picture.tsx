import Image from "next/legacy/image";
import React from "react";

interface PictureProps {
  className?: string;
  src: string;
  alt?: string;
}

const Picture: React.FC<PictureProps> = ({ className, src, alt = "Image" }) => (
  <div className={`relative ${className}`}> {/* Make the parent div relative and apply className */}
    <Image
      src={src}
      alt={alt}
      layout="fill" // This makes the image fill its parent container
      objectFit="cover" // Adjusts the image to cover the container without stretching
      className="rounded" // Apply rounded-full class directly to the image
    />
  </div>
);

export default Picture;