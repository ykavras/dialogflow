import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function QuestionBox(props) {
  const {data} = props;
  return (
    <View style={styles.questionBox}>
      {data.map((item, i) => {
        return (
          <View key={`question_${i}`} style={styles.question}>
            <Text style={styles.questionTitle}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
}

QuestionBox.defaultProps = {};

export default QuestionBox;
