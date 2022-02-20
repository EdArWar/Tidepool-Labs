import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, active = false, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      {...props}
      style={{
        color: active || !match ? "white" : "aqua",
        textDecoration: "none",
        margin: "0px 25px",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
