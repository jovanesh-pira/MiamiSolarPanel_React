import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../Alldata/Products.jsx";
import Button from "./Button.jsx";
function FeaturedProduucts() {
  return (
    <div className="w-full max-w-[2400px] mx-auto bg-blue-50/50 py-10">
      <div className="container mx-auto ">
        {/* <!-- featured Produucts --> */}
        <div className="mt-32 ">
          {/* <h3 className="text-xl flex flex-row items-center gap-x-3 text-gray-700 mb-20">
            <span className="w-20 h-0.5 bg-gray-600 block"></span>( Featured
            Products )
          </h3> */}
          <div className="flex flex-col md:flex-row  items-center justify-between mb-10 md:mb-20">
            <h2 className="text-gray-900 text-3xl md:text-4xl text-center md:text-left mb-20 md:mb-0 font-semibold  w-full md:w-160 px-10 md:px-.5">
              Precision-engineered solar modules built for performance,
              durability, and ROI.
            </h2>
            <div className="group">
              <Button
                to="/products"
                size="lg"
                variant="primary"
                className={"capitalize w-50"}
              >
                all products
                {/* <span className="ml-6 w-8 h-8 rounded-full bg-primary-light text-black flex flex-row items-center justify-center p-5 group-hover:-rotate-45 transition-transform duration-300">
                  <i className="fa-solid fa-arrow-right text-[18px] "></i>
                </span> */}
              </Button>
            </div>
          </div>

          {/* <!-- grid system products containeses 3 product card to show the user and then make some link to the products page--> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-stretch">
            {/* <!-- Product Cards --> */}
            {console.log(PRODUCTS.slice(0, 3))}
            {PRODUCTS &&
              PRODUCTS.slice(0, 3).map((product, index) => {
                return (
                  <div
                    className=" flex flex-col bg-white shadow-lg rounded-xl  hover:shadow-xl transition"
                    key={index}
                  >
                    <img
                      src={product.gallery[1]}
                      alt="Solar panel 450W"
                      className="rounded-lg  w-full h-full object-contain object-top"
                      loading="lazy"
                    />
                    <div className="px-10 py-12 flex h-full flex-col">
                      <div>
                        <h2 className="text-xl  font-semibold text-gray-950">
                          {product.name}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2">
                          {product.desc}
                        </p>
                      </div>
                      <div className="mt-auto pt-6">
                        <Button
                          to={`/products/${product.slug}`}
                          size="md"
                          variant="primary_outline"
                          className=" mt-auto mb-3 "
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduucts;
