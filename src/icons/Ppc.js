import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPpc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#3CB054"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 5.625c9.07.335 12.567 5.78 10.811 10.637-.497 1.352-1.026 2.093-2.137 2.863.045-.195.091-.39.127-.59.657-3.79-.588-8.35-6.684-10.87 4.85 2.886 6.806 8.021 4.545 11.336-3.85.605-6.662-2.682-6.662-6.47V5.626z"
      fill="#fff"
    />
  </Svg>
);

export default SvgPpc;
