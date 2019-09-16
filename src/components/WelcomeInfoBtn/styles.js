import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  info: {},
  infoText: {
    fontFamily: theme.poppinsSemiBold,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 4,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#FFFFFF',
  },
});
