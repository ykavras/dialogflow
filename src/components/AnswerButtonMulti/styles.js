import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  button: {
    backgroundColor: '#507dff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 15,
    marginRight: 20,
    marginVertical: 10,
  },
  title: {
    fontFamily: theme.poppinsSemiBold,
    fontSize: 16,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    textAlign: 'center',
  },
});
