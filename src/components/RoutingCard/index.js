import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function RoutingCard(props) {
  const {icon, text, video} = props;
  return (
    <View style={styles.wrapper}>
      <Image style={styles.icon} />
      <Text style={styles.text}></Text>
    </View>
  );
}

RoutingCard.defaultProps = {};

export default RoutingCard;
