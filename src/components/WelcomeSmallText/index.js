import React from 'react';
import {Text, Animated} from 'react-native';
import styles from './styles';

function WelcomeSmallText(props) {
  const {text, style} = props;
  return (
    <Animated.View style={style}>
      <Text style={styles.smallText}>{text}</Text>
    </Animated.View>
  );
}

WelcomeSmallText.defaultProps = {};

export default WelcomeSmallText;
