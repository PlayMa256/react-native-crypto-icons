import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgR = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#771A4E"
    />
    <Path
      d="M7.875 18.479l2.6-1.36V8.06l3.714 2.083-2.785 1.45v2.99l6.221 4.168v-2.809l-3.807-2.627 3.157-1.631v-2.9l-6.5-3.533-2.6 1.359v11.87z"
      fill="#fff"
    />
  </Svg>
);

export default SvgR;
