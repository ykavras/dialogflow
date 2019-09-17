import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F7F7F9',
    ...ifIphoneX({
      paddingBottom: 20,
    }),
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsList: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  answerBtn: {
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
