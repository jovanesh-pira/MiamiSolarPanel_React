import React from "react";
import { HIGHLIGHTS } from "../Alldata/HighLights";

function HighLightsComponnet() {
  return (
    <>
      <section className="py-16 bg-[#F5FAFF]">
        <div className="max-w-7xl md:max-w-[1800px] mx-auto ">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 py-10">
            {HIGHLIGHTS.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm shadow-slate-200/70 
                         px-6 py-8 flex flex-col items-center justify-between text-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-25 w-25 md:w-30 md:h-30 mx-auto mb-5"
                />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-sky-800 ">
                    {item.value}
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-700">
                    {item.label}
                  </div>
                </div>
                <p className="text-lg mt-4 text-gray-700 font-semibold">
                  {item.title}
                </p>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed px-8 min-h-15 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HighLightsComponnet;
