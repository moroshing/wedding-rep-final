import React from "react";
import BlurFade from "./magicui/blur-fade";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import image9 from "../assets/img9.jpg";
import image10 from "../assets/img10.jpg";
import image11 from "../assets/img11.jpg";
import image12 from "../assets/img12.jpg";
import image13 from "../assets/img13.jpg";
import image14 from "../assets/img14.jpg";
import image15 from "../assets/img15.jpg";
import image16 from "../assets/img16.jpg";
import image17 from "../assets/img17.jpg";
import image18 from "../assets/img18.jpg";
import image19 from "../assets/img19.jpg";
import image20 from "../assets/img20.jpg";
import image21 from "../assets/img21.jpg";

const images = [
  image6,
  image5,
  image12,
  image7,
  image4,
  image9,
  image10,
  image11,
  image16,
  image18,
  image19,
  image21,
  image13,
  image14,
  image15,
  image20,
  image8,
  image17,
];

export default function Gallery() {
  return (
    <section className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5">
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
