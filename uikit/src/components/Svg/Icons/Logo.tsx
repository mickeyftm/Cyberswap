import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img width="45px" height="50px" src="/images/mobile-logo.png" alt="mobile logo" />
  );
};

export default Icon;
