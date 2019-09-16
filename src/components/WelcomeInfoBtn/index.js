import React from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';
import styles from './styles';

function WelcomeInfoBtn(props) {
  const {onPress, text, style} = props;
  return (
    <Animated.View style={[styles.wrapper, style]}>
      <TouchableOpacity style={styles.info} onPress={onPress}>
        <Text style={styles.infoText}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

WelcomeInfoBtn.defaultProps = {};

export default WelcomeInfoBtn;
