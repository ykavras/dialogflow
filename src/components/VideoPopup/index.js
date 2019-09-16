import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {VideoBox} from '../index';
import Close from '../../assets/icons/Close';

function VideoPopup(props) {
  const {uri, paused, onPress} = props;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.close} onPress={onPress}>
        <Close fill="#FFFFFF" style={styles.icon} />
      </TouchableOpacity>
      <VideoBox style={styles.video} uri={uri} paused={paused} />
    </View>
  );
}

VideoPopup.defaultProps = {};

export default VideoPopup;
