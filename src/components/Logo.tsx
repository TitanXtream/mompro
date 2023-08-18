import React from "react";
import { logo } from "../assets";

const Logo = () => {
  return (
    <div>
      <img src={logo} className="h-[6em] aspect-square" />
    </div>
  );
};

export default Logo;
