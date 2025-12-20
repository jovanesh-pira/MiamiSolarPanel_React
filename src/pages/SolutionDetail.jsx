import React from "react";
import { useParams } from "react-router-dom";
import { SOLUTIONS } from "../Alldata/SolutionData";

import Button from "../Component/Button";
function SolutionDetail() {
  const info = useParams();
  let findedSolution = SOLUTIONS.filter(
    (solution) => solution.id == info.id
  )[0];
  if (!findedSolution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Solution not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-row items-center justify-center">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold text-sky-600 uppercase tracking-wide">
                Solar Solution
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                {findedSolution.title} Solar Systems
              </h1>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {findedSolution.heroDesc}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {findedSolution.bullets &&
                  findedSolution.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{b}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={`${findedSolution.image}`}
                alt={findedSolution.title}
                className="w-full h-100 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-linear-to-r from-sky-800  to-sky-500/80 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Ready to start your {findedSolution.title.toLowerCase()}{" "}
                project?
              </h2>
              <p className="text-sm text-sky-100 mt-1">
                Send us your location and average monthly bill. We’ll prepare a
                tailored proposal for you.
              </p>
            </div>

            <Button to="/getqoute" className="" size="lg">
              Get a custom quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionDetail;
