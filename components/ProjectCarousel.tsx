"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: Props) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden rounded-xl" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <div className="relative aspect-3/4 md:aspect-4/3 ">
              <Image src={image} alt={`${title} image ${index + 1}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
