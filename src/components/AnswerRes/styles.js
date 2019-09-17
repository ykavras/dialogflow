import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4b4b4b',
    marginRight: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textBox: {
    flex: 1,
    alignItems: 'flex-start',
  },
  shadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 25,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontFamily: theme.poppinsRegular,
    fontSize: 14,
    color: '#4A5464',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
