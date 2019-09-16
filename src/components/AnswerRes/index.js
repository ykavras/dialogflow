import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Brain from '../../assets/icons/Brain';

function AnswerRes(props) {
  const {message} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar}>
        <Brain style={styles.icon} />
      </View>
      <View style={styles.textBox}>
        <View style={styles.shadow}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
    </View>
  );
}

AnswerRes.defaultProps = {};

export default AnswerRes;
