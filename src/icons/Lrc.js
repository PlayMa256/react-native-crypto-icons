import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLrc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#2AB6F6"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.5l6.75 9.4L12 19.5l-6.75-5.6L12 4.5zm-.88 5l-2.935 4 2.934 2.4V9.5zm1.76 0v6.4l2.935-2.4-2.934-4z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLrc;
