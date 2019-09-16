import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import SendButton from '../../assets/icons/SendButton';

function AnswerKeyboard(props) {
  const {
    onPress,
    value,
    onChangeText,
  } = props;
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={'Hero ile konuşmaya başla'}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <SendButton fill="#B5BAC5" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

AnswerKeyboard.defaultProps = {};

export default AnswerKeyboard;
