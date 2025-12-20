import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slides from "../Alldata/SliderData";

function Hero() {
  return (
    <div className="w-full max-w-[2500px] mx-auto ">
      {/* HeroSectio Contianer and with background image */}
      <div className=" relative   md:rounded-0 overflow-hidden w-full h-[80vh] ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{ enabled: false }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              navigation: { enabled: false },
            },
            768: {
              navigation: { enabled: true },
            },
          }}
          className="h-[800px] md:h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden">
                {/* Background image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/40" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                    <div className="max-w-xl">
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300 mb-3">
                        MIAMI SOLAR
                      </p>
                      <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold leading-tight text-white ">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-sm md:text-base text-slate-200">
                        {slide.subtitle}
                      </p>

                      <div className="mt-15">
                        <Button to="/products" size="lg" variant="primary">
                          Explore Products
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div
          className="absolute top-0 left-0 w-full h-full -z-1"
          style={{
            background: "linear-gradient(to bottom,#0a0a0a75,#151824df)",
          }}
        ></div> */}
        {/* All title subtitle and content for the hero sectio  */}

        {/* some slider in corner of hero section  */}
        {/* <div className="invisible md:visible p-5 absolute z-55 w-120 h-50   rounded-2xl bottom-10 right-10 flex flex-row gap-x-5 backdrop-blur-md bg-[rgba(15,15,15,0.4)]">
          <img
            className="w-40 h-full rounded-2xl"
            src="./images/heroimagesilder.jpg"
            alt=""
          />
          <div className="  ">
            <h3 className="text-lg text-white capitalize">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="text-gray-400 mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quo.
            </p>
            <div className="flex flex-row gap-2 mt-5 cursor-pointer">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="w-10 h-10 bg-gray-400/50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
