import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#20EE82"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.625A6.375 6.375 0 0118.375 12v6.375H12a6.375 6.375 0 110-12.75zm3.825 10.2v-3.767c0-2.115-1.691-3.873-3.805-3.883a3.83 3.83 0 00-3.845 3.845c.01 2.114 1.768 3.805 3.883 3.805h3.767z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSc;
