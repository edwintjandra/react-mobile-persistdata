import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path d="M8.707 3.293 17.414 12l-8.707 8.707-1.414-1.414L14.586 12 7.293 4.707l1.414-1.414z" />
  </Svg>
);

export default ArrowRight;
