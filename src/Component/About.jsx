import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BiCheckShield } from "react-icons/bi";

function AboutUs() {
  return (
    <div className="container mx-auto max-w-7xl py-30" id="aboutus">
      {/* <div className="py-10 mt-20 mb-20 px-5 md:px-0" id="AboutUs">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-1  flex-col order-2 md:order-1">
            <h2 className="text-3xl text-center md:text-left md:text-4xl leading-8 md:leading-12 font-semibold w-12/12 md:w-10/12 px-6 md:px-0 ">
              Meet Our Team of Energy Innovators Driving Tomorrow’s Power
            </h2>
            <p className="w-12/12 md:w-10/12 text-center md:text-left mt-10 px-10 md:px-0 text-xl md:mt-5 text-gray-500">
              We believe in a cleaner future powered by innovation and
              responsibility. Every project we build reflects our commitment to
              sustainability and trust.
            </p>
            <img
              src="/images/aboutusimage_02 - Copy.png"
              alt=""
              className="w-100 mt-10"
            />
            <Button
              to="./ourstory"
              size="lg"
              className=" w-fit mt-10 md:mb-0 capitalize"
              variant="primary"
            >
              our story
            </Button>
          </div>
          <div
            className="md:flex-1 w-full bg-no-repeat bg-center bg-cover h-120 md:w-140 md:rounded-3xl order-1 md:order-2 mb-15 md:mb-0"
            style={{
              backgroundImage: "url(./images/aboutusimage_02.jpg)",
            }}
          ></div>
        </div>
      </div> */}
      <div className="  px-4 grid md:grid-cols-2 gap-12 items-start ">
        {/* --- LEFT TEXT --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">
            ABOUT US
          </h2>

          <p className="md:text-xl text-gray-600 leading-relaxed mb-4">
            Founded in 1999, Miami Solar is a leading solar panel manufacturer
            with an annual production capacity of 300 MW. We empower solar
            businesses to deliver photovoltaic solutions to markets worldwide by
            providing premium quality products with the latest technological
            advancements in the industry.
          </p>

          <p className="md:text-xl text-gray-600 leading-relaxed">
            Our mission is to offer efficient delivery services through
            logistics partners, along with excellent technical support and
            follow-up for our customers, ensuring sustainable energy solutions
            for a brighter future.
          </p>
          <Button
            to="/ourstory"
            size="lg"
            variant="primary"
            className="mt-10 gap-4"
          >
            <BiCheckShield className="w-7 h-7" />
            View Our Certifications
          </Button>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="flex justify-center h-[500px]">
          <img
            src="/images/AboutUs.jpg"
            alt="Solar Panel"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover "
            loading="lazy"
          />
        </div>
      </div>

      {/* --- BOTTOM CARDS --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-16">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="text-[#0B3C5D] text-xl font-bold mb-3">MISSION</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To accelerate the world’s transition to sustainable energy through
            innovative solar technology and exceptional service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="text-[#0B3C5D] text-xl font-bold mb-3">VISION</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To become a world-leading solar energy company, powering communities
            globally with clean, reliable energy solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="text-[#0B3C5D] text-xl font-bold mb-3">VALUE</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Excellence in quality, integrity in partnerships, and commitment to
            sustainability in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
