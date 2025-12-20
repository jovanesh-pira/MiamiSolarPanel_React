import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../Alldata/navItems";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";
function HeaderContent({ padding, mobileOpen, setMobileOpen }) {
  const [openIdx, setOpenIdx] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="w-full max-w-[1800px]  mx-auto flex items-center">
      <header
        className={` ${
          padding ? "py-8" : "py-4"
        }  px-2 lg:px-8 w-full z-50 transition-all duration-300  bg-white 
     `}
      >
        <div className="grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-span-6 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 logo">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex col-span-11 items-center justify-end md:ml-10">
            <ul className="flex gap-8 text-base font-medium">
              {navItems.map((item) => {
                const hasChildren = item.children?.length > 0;
                const isContact = item.href === "/contact";
                const isSolution = item.href === "/solutions";
                const isAbout = item.href === "/aboutus";

                return (
                  <li key={item.label} className="relative group py-4">
                    {isContact || isSolution || isAbout ? (
                      isHome ? (
                        <ScrollLink
                          to={item.scrollTo}
                          smooth={true}
                          duration={400}
                          offset={-200}
                          className="inline-flex items-center py-2 hover:text-blue-600 cursor-pointer"
                        >
                          {item.label}
                        </ScrollLink>
                      ) : (
                        <Link
                          to={`/#${item.scrollTo}`}
                          className="inline-flex items-center py-2 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      )
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="inline-flex items-center py-2 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Submenu (desktop) */}
                    {hasChildren && (
                      <div
                        className="absolute left-0 top-full mt-3 min-w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-50
                       opacity-0 translate-y-2 pointer-events-none
                       group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                       transition-all duration-150"
                      >
                        <ul className="py-2">
                          {item.children.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="hidden lg:flex  justify-start pl-10">
              <Button
                to="/getqoute"
                className="cursor-pointer"
                size="md"
                variant="primary"
              >
                Get a Quote
              </Button>
            </div>
          </nav>

          {/* Right CTA */}

          {/* Mobile toggler */}
          <div className="col-span-6 lg:hidden flex justify-end">
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md border border-gray-300"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-gray-800" />
                <span className="block h-0.5 w-6 bg-gray-800" />
                <span className="block h-0.5 w-6 bg-gray-800" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-10 bg-white text-center relative z-50"
          >
            <div
              className="fixed top-0 left-0 bg-gray-500 w-full h-full opacity-50 z-40"
              onClick={() => setMobileOpen(false)}
              role="button"
              aria-hidden="true"
            ></div>
            <ul className="divide-y divide-gray-100">
              {navItems.map((item, idx) => {
                const hasChildren = item.children?.length > 0;
                const isContact = item.href === "/contact";
                const expanded = openIdx === idx;

                const handleCloseMobile = () => {
                  setMobileOpen(false);
                  setOpenIdx(null);
                };

                return (
                  <li key={item.label} className="relative py-2 px-3">
                    <div className="flex items-center justify-between">
                      {isContact ? (
                        isHome ? (
                          <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={400}
                            offset={-80}
                            className="block w-full py-2 font-medium hover:text-blue-600 cursor-pointer text-left"
                            onClick={handleCloseMobile}
                          >
                            {item.label}
                          </ScrollLink>
                        ) : (
                          <Link
                            to="/#contact"
                            className="block w-full py-2 font-medium hover:text-blue-600 text-left"
                            onClick={handleCloseMobile}
                          >
                            {item.label}
                          </Link>
                        )
                      ) : (
                        <Link
                          to={item.href || "#"}
                          className="block w-full py-2 font-medium hover:text-blue-600 text-left"
                          onClick={!hasChildren ? handleCloseMobile : undefined}
                        >
                          {item.label}
                        </Link>
                      )}

                      {hasChildren && (
                        <button
                          className="p-2 ml-2"
                          onClick={() => setOpenIdx(expanded ? null : idx)}
                          aria-expanded={expanded}
                          aria-controls={`submenu-${idx}`}
                          type="button"
                        >
                          <span
                            className={`inline-block transition-transform ${
                              expanded ? "rotate-180" : ""
                            }`}
                          >
                            <IoMdArrowDropdown />
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Submenu (mobile accordion) */}
                    {hasChildren && expanded && (
                      <ul id={`submenu-${idx}`} className="mt-1 pl-4 text-left">
                        {item.children.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.href}
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                              onClick={handleCloseMobile}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* CTA inside mobile menu */}
              <li className="p-3">
                <Button
                  to="/getqoute"
                  size="md"
                  variant="primary"
                  className="w-full text-center"
                >
                  Get a Quote
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default HeaderContent;
