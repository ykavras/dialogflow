import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 20,
      },
    ),
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageWrapper: {
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 20,
  },
  buttons: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerBtn: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
