import React from 'react';
import styles from './styles';
import Video from 'react-native-video';

function VideoBox(props) {
  const {uri, paused, style} = props;
  return (
    <Video
      source={{uri}} // Can be a URL or a local file.
      ref={ref => {
        this.player = ref;
      }} // Store reference
      onBuffer={this.onBuffer} // Callback when remote video is buffering
      onError={this.videoError} // Callback when video cannot be loaded
      style={[styles.wrapper, style]}
      paused={paused}
      resizeMode="contain"
      controls
    />
  );
}

VideoBox.defaultProps = {
  uri: undefined,
  paused: true,
};

export default VideoBox;
