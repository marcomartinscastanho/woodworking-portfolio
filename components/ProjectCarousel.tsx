"use client";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
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
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const updateSnaps = (api: EmblaCarouselType) => {
      setScrollSnaps(api.scrollSnapList());
    };

    emblaApi.on("init", updateSnaps);
    emblaApi.on("reInit", updateSnaps);
    emblaApi.on("select", updateSnaps);
    emblaApi.on("select", onSelect);

    onSelect();
    updateSnaps(emblaApi);

    return () => {
      emblaApi.off("init", updateSnaps);
      emblaApi.off("reInit", updateSnaps);
      emblaApi.off("select", updateSnaps);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden rounded-xl" ref={emblaRef}>
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
      <div className="embla__dots flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            className={`embla__dot w-2 h-2 rounded-full bg-black ${
              index === selectedIndex ? "embla__dot--selected" : ""
            }`}
            key={index}
            onClick={() => scrollTo(index)}
          >
            {/* Button content */}
          </button>
        ))}
      </div>
    </div>
  );
}
