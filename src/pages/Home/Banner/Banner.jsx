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

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: [0, 900, 0] }}
        transition={{ duration: "4", delay: "1" }}>
        <div className="mb-8 ">
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
                <img
                  src={slider8}
                  className="rounded-box"
                  alt="Carousel Item 1"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    Get ready for an adrenaline-filled game of basketball! Join
                    us as we showcase the best talents from around the world,
                    dribbling their way to victory.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider2}
                  className="rounded-box"
                  alt="Carousel Item 2"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    Buckle up for a thrilling race! Witness the speed and
                    precision of the world is top Formula 1 drivers as they
                    compete for the championship title on the most iconic
                    tracks.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider3}
                  className="rounded-box"
                  alt="Carousel Item 3"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    The football fever is on! Do not miss the action-packed
                    matches, as teams clash on the field to claim the ultimate
                    glory in the world is most popular sport.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider5}
                  className="rounded-box"
                  alt="Carousel Item 4"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    It is time for some intense tennis action! Watch tennis
                    stars smash powerful serves and engage in fierce rallies,
                    demonstrating their unmatched skills on the court.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider6}
                  className="rounded-box"
                  alt="Carousel Item 5"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    Experience the thrill of the Olympic Games! Witness athletes
                    from diverse nations showcase their talents in various
                    sports, inspiring the world with their dedication and
                    perseverance.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider7}
                  className="rounded-box"
                  alt="Carousel Item 6"
                />
                <div className="carousel-caption">
                  <p className="text-black md:text-[30px] lg:text-[50px]">
                    L Experience the thrill of the Olympic Games! Witness
                    athletes from diverse nations showcase their talents in
                    various sports, inspiring the world with their dedication
                    and perseverance.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slider1}
                  className="rounded-box"
                  alt="Carousel Item 7"
                />
                {/* <div className="carousel-caption">
              <p className="text-black md:text-[30px] lg:text-[50px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ipsam sapiente. Ullam provident doloremque, illum eligendi
              </p>
            </div> */}
              </div>
            </Carousel>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
