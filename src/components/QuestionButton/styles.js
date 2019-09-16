import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E4ED',
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    padding: 16,
  },
  text: {
    fontFamily: theme.poppinsRegular,
    fontSize: 12,
    color: '#1F196D',
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#453BCD',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    borderRadius: 25,
  },
  buttonTitle: {
    fontFamily: theme.poppinsBold,
    fontSize: 10,
    color: '#FFFFFF',
  },
});
