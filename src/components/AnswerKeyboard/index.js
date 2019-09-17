import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import SendButton from '../../assets/icons/SendButton';

function AnswerKeyboard(props) {
  const {onPress, value, onChangeText} = props;
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} enabled>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Hero ile konuşmaya başla..."
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          disabled={!value}>
          <SendButton
            fill={value ? '#B5BAC5' : 'rgba(181,186,197,0.4)'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

AnswerKeyboard.defaultProps = {};

export default AnswerKeyboard;
