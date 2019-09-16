import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function WelcomeGenders(props) {
  const {data, onPress} = props;
  return (
    <FlatList
      style={styles.flatList}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item, i}) => {
        return (
          <TouchableOpacity
            onPress={onPress}
            key={`item_${i}`}
            style={styles.circleBtn}>
            <Text style={styles.circleBtnTitle}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

WelcomeGenders.defaultProps = {};

export default WelcomeGenders;
