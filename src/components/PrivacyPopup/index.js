import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

function PrivacyPopup(props) {
  const {text, onPress} = props;
  return (
    <View style={styles.infoWrapper}>
      <ScrollView
        style={styles.infoScrollView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.infoWrapperText}>{text}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.infoCloseBtn} onPress={onPress}>
        <Text style={styles.infoCloseBtnTitle}>Kapat</Text>
      </TouchableOpacity>
    </View>
  );
}

PrivacyPopup.defaultProps = {
  text: 'type your text here hello',
};

export default PrivacyPopup;
