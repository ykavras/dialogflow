import React from 'react';
import {Svg, Circle, G, Path} from 'react-native-svg';

export default function VideoPlay(props) {
  return (
    <Svg {...props} viewBox="0 0 35 35">
      <G id="Group_56" transform="translate(-601 -4454)" data-name="Group 56">
        <Circle
          id="Ellipse_22"
          x="17.5"
          y="17.5"
          fill="#493ed1"
          r="17.5"
          transform="translate(601 4454)"
          data-name="Ellipse 22"
        />
        <Path
          id="Polygon_2"
          d="M4.126,1.573a1,1,0,0,1,1.748,0l3.3,5.941A1,1,0,0,1,8.3,9H1.7A1,1,0,0,1,.825,7.514Z"
          fill="#fff"
          transform="translate(624 4467) rotate(90)"
          data-name="Polygon 2"
        />
      </G>
    </Svg>
  );
}
