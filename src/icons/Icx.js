import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgIcx = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1FC5C9"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.472 16.854l1.623-1.623a3.75 3.75 0 005.136-5.136l1.623-1.623a6 6 0 01-8.382 8.382zm-1.326-1.326a6 6 0 018.382-8.382l-1.623 1.623a3.75 3.75 0 00-5.136 5.136l-1.623 1.623zM18 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-12 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIcx;
