import React from 'react';
import Image from 'next/image';

export const DatoImage = ({ image }, attributes) => {
  if (image.responsiveImage !== null) {
    return (
      <Image
        width={image.responsiveImage.width}
        height={image.responsiveImage.height}
        src={image.responsiveImage.src}
        alt={image.responsiveImage.alt || image.title}
        {...attributes}
      />
    );
  } else {
    return (
      <Image
        width={image.width}
        height={image.height}
        src={image.url}
        alt={image.alt || image.title}
        {...attributes}
      />
    );
  }
};
