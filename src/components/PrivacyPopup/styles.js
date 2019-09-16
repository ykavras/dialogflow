import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  infoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2,
    elevation: 2,
    backgroundColor: theme.welcomeColor1,
  },
  infoScrollView: {
    padding: 14,
  },
  infoWrapperText: {
    fontFamily: theme.poppinsRegular,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  infoCloseBtn: {
    backgroundColor: theme.welcomeColor2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    width: 140,
    alignSelf: 'center',
    marginVertical: 10,
  },
  infoCloseBtnTitle: {
    fontFamily: theme.poppinsRegular,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 10,
  },
});
