import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgJpy = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#EAC749"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.161 14.033v1.409h3.797v1.716h-3.797v1.967h-2.322v-1.967H7.042v-1.716h3.797v-1.409H7.042v-1.716h3.128L5.625 5.625h2.814l3.6 5.65 3.6-5.65h2.736l-4.565 6.692h3.148v1.716h-3.797z"
      fill="#fff"
    />
  </Svg>
);

export default SvgJpy;
