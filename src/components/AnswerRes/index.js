import React from 'react';
import {View, Text, Animated} from 'react-native';
import styles from './styles';
import Brain from '../../assets/icons/Brain';

function AnswerRes(props) {
  const {message} = props;

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.avatar}>
        <Brain style={styles.icon} />
      </Animated.View>
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
