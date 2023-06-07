import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import slider1 from "../../../assets/slider/slide-1.jpg";
import slider2 from "../../../assets/slider/slide-2.jpg";
import slider3 from "../../../assets/slider/slide-3.jpg";
import slider5 from "../../../assets/slider/slide-5.jpg";
import slider6 from "../../../assets/slider/slide-6.jpg";
import slider7 from "../../../assets/slider/slide-7.jpg";
import slider8 from "../../../assets/slider/slide-8.jpg";

const Banner = () => {
  return (
    <div className="mb-8 mt-4">
      <div className="max-w-screen-xl p-4 bg-neutral bg-opacity-80 rounded">
        <Carousel
          showThumbs={false}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          showArrows={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="carousel-button carousel-button-prev"
                onClick={onClickHandler}
                title={label}>
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="carousel-button carousel-button-next"
                onClick={onClickHandler}
                title={label}>
                Next
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="carousel-indicator carousel-indicator-selected"
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className="carousel-indicator"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}>
          <div className="carousel-item">
            <img src={slider1} className="rounded-box" alt="Carousel Item 1" />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="rounded-box" alt="Carousel Item 2" />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="rounded-box" alt="Carousel Item 3" />
          </div>
          <div className="carousel-item">
            <img src={slider5} className="rounded-box" alt="Carousel Item 4" />
          </div>
          <div className="carousel-item">
            <img src={slider6} className="rounded-box" alt="Carousel Item 5" />
          </div>
          <div className="carousel-item">
            <img src={slider7} className="rounded-box" alt="Carousel Item 6" />
          </div>
          <div className="carousel-item">
            <img src={slider8} className="rounded-box" alt="Carousel Item 7" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
