import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";

function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  if (!images || images.length === 0) {
    return <p>No images available</p>; // Fallback if no images are provided
  }

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              preview={{ src: image }}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
      <p className="text-base lg:text-lg text-white text-justify">
        Before the aisle, before the vows just us, wrapped in love, laughter,
        and quiet promises. This shoot captures not just a moment, but the story
        of how we’re walking into forever hand in hand, heart to heart.
      </p>
    </>
  );
}

export default Carousel;
