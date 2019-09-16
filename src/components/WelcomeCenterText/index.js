import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

function WelcomeCenterText(props) {
  const {fontSize, text} = props;
  return <Text style={[styles.speakText, {fontSize}]}>{text}</Text>;
}

WelcomeCenterText.defaultProps = {};

export default WelcomeCenterText;
