import React, { useState, useEffect } from "react";
import HeaderContent from "./HeaderContent";

import { motion } from "framer-motion";
const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const OpenTheMoblieMenu = (value) => {
    setMobileOpen(value);
  };
  return (
    <div>
      {!isFixed && (
        <header className="w-full bg-white">
          <HeaderContent
            padding={false}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </header>
      )}

      {isFixed && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full bg-white shadow-lg z-50"
        >
          <HeaderContent
            padding={true}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </motion.header>
      )}
    </div>
  );
};

export default Header;
