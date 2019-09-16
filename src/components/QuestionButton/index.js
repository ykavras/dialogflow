import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function QuestionButton(props) {
  const {question, onPress, buttonTitle} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.text}>{question}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

QuestionButton.defaultProps = {
  question: 'Question text',
  buttonTitle: 'Button Title',
};

export default QuestionButton;
