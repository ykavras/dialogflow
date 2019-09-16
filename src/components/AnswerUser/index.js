import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function AnswerUser(props) {
  const {message} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.shadow}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

AnswerUser.defaultProps = {};

export default AnswerUser;
