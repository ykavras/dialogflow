import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

function AnswerButtonMulti(props) {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}

AnswerButtonMulti.defaultProps = {};

export default AnswerButtonMulti;
