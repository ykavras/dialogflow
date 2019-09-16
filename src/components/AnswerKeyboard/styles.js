import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    borderTopWidth: 0.5,
    borderColor: '#d2d2d2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
    padding: 10,
  },
  input: {
    flex: 1,
    fontFamily: theme.poppinsMedium,
    fontSize: 16,
    color: '#696d70',
    paddingVertical: 12,
    paddingLeft: 10,
  },
  button: {
    width: 40,
    height: 30,
    marginLeft: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
