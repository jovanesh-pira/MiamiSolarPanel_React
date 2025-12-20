import React from "react";
import { navItems } from "../Alldata/navItems";
import { Link as ScrollTo } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
function NavMaker({ LinkClass, ListClass }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <ul className={`${ListClass}`}>
        {navItems &&
          navItems.map((link) => {
            return link.href === "/contact" ||
              link.href === "/solutions" ||
              link.href === "/aboutus" ? (
              isHome ? (
                <ScrollTo
                  to={link.scrollTo}
                  smooth={true}
                  duration={500}
                  className={`${LinkClass} cursor-pointer`}
                >
                  {link.label}
                  {console.log(link.href)}
                </ScrollTo>
              ) : (
                <Link to={`/#${link.scrollTo}`} className={`${LinkClass} `}>
                  {" "}
                  {link.label}
                </Link>
              )
            ) : (
              <Link to={link.href} className={`${LinkClass}`}>
                {link.label}
              </Link>
            );
          })}
      </ul>
    </>
  );
}

export default NavMaker;
