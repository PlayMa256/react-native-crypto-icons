import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPivx = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#5E4778"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 9.18h4.615v.942H7.875v-.941zm9 .443c0 2.23-1.582 3.671-3.771 3.671h-3.031V18h-1.2v-5.77h4.068c1.631 0 2.696-.969 2.696-2.607 0-1.618-1.065-2.56-2.677-2.56h-1.266l-3.032.01V6h4.432c2.198 0 3.78 1.393 3.78 3.623h.001v0z"
      fill="#fff"
      stroke="#fff"
    />
  </Svg>
);

export default SvgPivx;
