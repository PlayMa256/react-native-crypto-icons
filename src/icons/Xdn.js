import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgXdn = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#4F7AA2"
    />
    <Path
      d="M9.982 9h2.053c.992 0 2.762.602 2.762 3s-1.77 3-2.762 3H9.982V9zm1.132 4.785h.85c.709 0 1.559-.434 1.559-1.785s-.85-1.785-1.558-1.785h-.85v3.57zM15.577 9h.425l3.824 5.27V9h.424v6h-.425L16 9.846V15h-.425l.002-6zM3.75 9h1.416v1.5H3.75V9zm2.125 0H7.29v1.5H5.875V9zm2.124 0h1.417v1.5H7.998V9zm0 2.25h1.417v1.5H7.998v-1.5zm0 2.25h1.417V15H7.998v-1.5zm-2.124-2.25H7.29v1.5H5.875v-1.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXdn;
