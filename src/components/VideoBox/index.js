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
      resizeMode="cover"
    />
  );
}

VideoBox.defaultProps = {
  uri:
    'https://storage.coverr.co/videos/coverr-lviv-central-plaza-1566811399204?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY4NjM1Njg1fQ.lvBzJBshUeNUs5XjiFrWCKE598uwSuJO2rfQOeC8p9Q',
  paused: true,
};

export default VideoBox;
