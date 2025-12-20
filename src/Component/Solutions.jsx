import React, { useState } from "react";
import { SOLUTIONS } from "../Alldata/SolutionData";
import { Link } from "react-router-dom";
import Button from "./Button";

import { FiArrowUpRight } from "react-icons/fi";
function Solutions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const HandelActiveCard = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="container mx-auto" id="solutions">
      <div className="mt-20 mb-20">
        <div className=" ">
          <div className="  flex flex-col md:flex-row items-start justify-end text-center  px-8 md:px-0">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold w-full ">
              Solar Solutions for Every Need <br />
              <span className="text-gray-500 text-xl md:text-2xl font-normal inline-block w-full  mt-4">
                From homes to large-scale industries, our solar solutions power
                a brighter tomorrow.
              </span>
            </h2>
          </div>
        </div>
        {/* grid system container 4 col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-5 md:px-0">
          {SOLUTIONS.slice(0, 3).map((p, i) => {
            return (
              <div className="group" key={i}>
                <div
                  className=" rounded-sm   overflow-hidden shadow-md shadow-gray-900/20  h-140 flex flex-col items-start justify-between relative "
                  key={i}
                  onClick={() => HandelActiveCard(i)}
                >
                  <img
                    src={p.image}
                    alt=""
                    className="w-full object-cover object-center h-full "
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:from-black group-hover:via-black/40 "></div>
                  {/* Some Div that can move from bottom to top  */}
                  <div
                    className={`absolute  left-0 pt-5 px-7 pb-2 group-hover:top-0 transition-position duration-300 w-full h-full flex flex-col justify-end 
                  ${activeIndex === i ? "top-0" : "top-[45%] md:top-[36%]"}`}
                  >
                    <h3 className=" w-fit text-3xl font-semibold mt-8 mb-10 text-white  ">
                      {p.title}
                      <FiArrowUpRight className="inline-block ml-4 " />
                      <span className="w-full h-0.5 bg-amber-300 block mt-3"></span>
                    </h3>
                    <p className="text-md font-medium  text-white/50 h-20">
                      {p.description}
                    </p>
                    <Button
                      to={`/getqoute`}
                      size="md"
                      variant="primary_outline"
                      className=" w-fit mt-20 mb-8 md:mt-8"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
