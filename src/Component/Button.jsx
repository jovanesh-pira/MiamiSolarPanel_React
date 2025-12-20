import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const BaseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400;";
const sizeOptions = {
  sm: "px-4 py-1.5 text-sm;",
  md: " px-6 py-2.5 text-base",
  lg: "px-12 py-4 text-lg",
};
const variantOptions = {
  primary:
    "bg-gradient-to-r from-[#0B4F8A] to-[#0288D1] text-white shadow-md shadow-blue-500/30 hover:from-[#093F70] hover:to-[#0271B0] hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5",
  primary_outline:
    "border border-[#0288D1] text-[#0288D1] bg-transparent hover:bg-[#073246] hover:text-[#0ec5e6]  hover:-translate-y-0.5",
  secondary: "bg-slate-800 text-white shadow-md",
  secondary_outline: " border border-slate-600 text-slate-800 bg-transparent",
};
function Button({
  to,
  children,
  size = "md",
  variant = "primary",
  className,
  duration = 500,
  ...props
}) {
  const classes = clsx(
    BaseStyles,
    sizeOptions[size],
    variantOptions[variant],
    className
  );
  console.log(props.href);
  if (props.href) {
    return (
      <a href={props.href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  if (to && to.includes("/")) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (duration) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={duration}
        className={classes}
        {...props}
      >
        {children}
      </ScrollLink>
    );
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
