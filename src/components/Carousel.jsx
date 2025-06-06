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
      <p className="text-base text-white text-justify">
        A glimpse into the moments that brought us here. From our first meeting
        to the journey of love, these memories are a testament to our story — a
        tale written in laughter, sealed with promises, and guided by fate. Each
        moment, a thread woven into the tapestry of us, leading us to this
        beautiful day. Join us as we celebrate the love that has blossomed and
        the memories that will forever be cherished. We can't wait to share this
        special day with you!
      </p>
    </>
  );
}

export default Carousel;
