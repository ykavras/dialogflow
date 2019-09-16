import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  shadow: {
    backgroundColor: '#507dff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 25,
    borderBottomRightRadius: 10,
  },
  text: {
    fontFamily: theme.poppinsRegular,
    fontSize: 14,
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
