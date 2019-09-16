import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import VideoPlay from '../../assets/icons/VideoPlay';

function RoutingCard(props) {
  const {icon, title, text, readMore, uri, onPress} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
      {readMore ? (
        <TouchableOpacity style={styles.readMore} onPress={readMore}>
          <Text style={styles.readMoreTitle}>READ MORE</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.videoWrapper}>
          <Image source={{uri}} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <VideoPlay style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

RoutingCard.defaultProps = {
  title: 'Title',
  text: undefined,
};

export default RoutingCard;
