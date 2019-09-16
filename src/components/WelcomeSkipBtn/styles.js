import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  skipBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    borderRadius: 6,
  },
  skipBtnTitle: {
    fontFamily: theme.poppinsBlack,
    letterSpacing: 1,
    fontSize: 14,
    color: '#FFFFFF',
  },
});
