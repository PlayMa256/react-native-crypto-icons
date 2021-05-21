import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDgd = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#F4D029"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.375 8.25v2.25h-5.25V8.25h5.25zm.75 0h1.5v7.5h-7.5v-4.5h6v-3zm-4.5 4.5v1.5h4.5v-1.5h-4.5zm14.25-3h-6v4.5h4.5v-1.5h-3v-1.5h4.5v4.5h-7.5v-7.5h7.5v1.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgDgd;
