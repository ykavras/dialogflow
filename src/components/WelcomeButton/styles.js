import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.welcomeColor2,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontFamily: theme.poppinsSemiBold,
    fontSize: 20,
    color: '#DAD9E6',
  },
});
