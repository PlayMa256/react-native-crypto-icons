import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMtl = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1E1F25"
    />
    <Path
      d="M6 6.75h.75v10.5H6V6.75zM9.75 9h.75v6.75h-.75V9zm3.75 1.5h.75v3.75h-.75V10.5zm3.75-3.75H18v10.5h-.75V6.75z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMtl;
