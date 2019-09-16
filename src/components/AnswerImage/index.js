import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

function AnswerImage(props) {
  const {uri} = props;
  return (
    <View style={styles.wrapper}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
}

AnswerImage.defaultProps = {};

export default AnswerImage;
