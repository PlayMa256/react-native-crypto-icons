import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMaid = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#5592D7"
    />
    <Path
      d="M15.184 9.5v9.73L6.969 14.5c-2.43-1.423-2.276-2.308-2.276-4.23l8.447 4.884v-4.462l2.045-1.193V9.5z"
      fill="#fff"
    />
    <Path
      opacity={0.6}
      d="M13.14 15.154l-8.446-4.885 8.215-4.73c2.43-1.386 3.125-.808 4.822.153l-8.447 4.885 3.857 2.23v2.347z"
      fill="#fff"
    />
    <Path
      opacity={0.2}
      d="M9.283 10.577l8.447-4.885v9.462c0 2.808-.848 3.115-2.546 4.077V9.5l-3.896 2.229-2.006-1.154v.001z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMaid;
