import React from 'react';
import {Text, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';

function WelcomeButton(props) {
  const {title, onPress, style} = props;
  return (
    <Animated.View style={[styles.buttonWrapper, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

WelcomeButton.defaultProps = {};

export default WelcomeButton;
