"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <div className="embla">
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
    </div>
  );
}
