import React from "react";

import { Link } from "react-router-dom";
import { Link as scrollTo } from "react-scroll";
import { SOLUTIONS } from "../Alldata/SolutionData";
import NavMaker from "./NavMaker";
function Footer() {
  return (
    <div>
      <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* <!-- Top: 4 columns --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* <!-- Brand / About --> */}
            <div>
              <a href="/" className="flex flex-row items-end gap-4">
                <img src="/images/logo.svg" alt="Miami Solar" className="h-7" />
                <span className="font-semibold text-white">Miami Solar</span>
              </a>
              <p className="mt-4 text-sm text-slate-400">
                High-efficiency solar solutions for homes and businesses.
                Building a cleaner future, today.
              </p>
              <div className="flex gap-3 mt-5">
                {/* <!-- Social Media Icons --> */}
                <a
                  aria-label="Facebook"
                  href="#"
                  className="w-9 h-9 grid place-content-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src="./images/Social Icons/Facebook/Negative.png"
                    alt="Facebook"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  aria-label="Instagram"
                  href="#"
                  className="w-9 h-9 grid place-content-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src="./images/Social Icons/Instagram/Negative.png"
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="w-9 h-9 grid place-content-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src="./images/Social Icons/LinkEdin/linkedin.png"
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h4 className="text-white font-semibold">Quick Links</h4>
              <NavMaker
                LinkClass={"hover:text-white transition flex flex-row"}
                ListClass={"mt-4 space-y-2 text-sm"}
              />
            </div>

            <div>
              <div className="mt-5 text-sm text-slate-400 space-y-1">
                <p>
                  <span className="text-slate-300">Email:</span>{" "}
                  info@miamisolar.com
                </p>
                <p>
                  <span className="text-slate-300">Phone:</span> +1 213 808 2105
                </p>
                <p>
                  <span className="text-slate-300">Address:</span> 3139 Cambria
                  Ct., Orlando FL. 32825.
                </p>
              </div>
              <div className="mt-7 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-sm text-white/80">
                  Need a custom solar solution?
                </p>
                <div className="mt-3 flex gap-3">
                  <Link
                    to="/getqoute"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5
                  bg-blue-600 text-white text-sm font-medium
                  hover:bg-blue-500 transition"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5
                  bg-transparent text-white/80 text-sm font-medium
                  ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© Miami Solar — All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </button>
              <span className="text-white/30">•</span>
              <button className="hover:text-white transition cursor-pointer">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
