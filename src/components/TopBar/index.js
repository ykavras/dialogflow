import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import HeroRotate from '../../assets/icons/HeroRotate';

function TopBar(props) {
  const {} = props;
  return (
    <View style={styles.wrapper}>
      <HeroRotate style={styles.hero} />
    </View>
  );
}

TopBar.defaultProps = {};

export default TopBar;
