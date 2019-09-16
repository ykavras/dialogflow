import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function WelcomeSkipBtn(props) {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.skipBtn} onPress={onPress}>
      <Text style={styles.skipBtnTitle}>ATLA</Text>
    </TouchableOpacity>
  );
}

WelcomeSkipBtn.defaultProps = {};

export default WelcomeSkipBtn;
