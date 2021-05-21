import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDai = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#fff"
    />
    <Path
      d="M11.998 2.734l9.192 9.191-9.192 9.191-9.19-9.19 9.19-9.192z"
      fill="#FFCE45"
    />
    <Path
      d="M11.998 14.924l-9.198-3 9.198-9.191 9.2 9.192-9.2 3z"
      fill="#FEBE44"
    />
    <Path
      d="M6 11.325h4.2l1.799-2 1.999 2h4.2l-6.2-6.7L6 11.325z"
      fill="#fff"
    />
    <Path
      opacity={0.42}
      d="M11.998 21.116V2.733l9.192 9.192-9.192 9.19z"
      fill="#D9A547"
    />
  </Svg>
);

export default SvgDai;
