import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMkr = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1ABC9C"
    />
    <Path
      d="M5.878 9.042v7.833H4.5v-10.5l7.281 5.27v5.23h-1.379v-4.558L5.88 9.042zm7.72 3.275v4.558h-1.379v-5.23l7.281-5.27v10.5h-1.378V9.042l-4.524 3.275z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMkr;
