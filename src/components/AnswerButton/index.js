import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function AnswerButton(props) {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}

AnswerButton.defaultProps = {};

export default AnswerButton
