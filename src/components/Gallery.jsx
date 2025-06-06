import React from "react";
import BlurFade from "./magicui/blur-fade";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/church1.jpg";
import image5 from "../assets/church.jpg";
import image6 from "../assets/bg.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const images = [image3, image4, image6, image5, image1, image7, image8, image2];

export default function Gallery() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => {
          const isLandscape = idx % 2 === 0;
          const width = isLandscape ? 800 : 600;
          const height = isLandscape ? 600 : 800;
          return (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Gallery image ${idx + 1}`}
                loading="lazy"
                width={width}
                height={height}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
