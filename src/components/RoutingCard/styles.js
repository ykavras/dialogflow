import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width / 2.6,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 30,
    marginVertical: 10,
    marginRight: 15,
  },
  top: {
    padding: 14,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 14,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  title: {
    fontFamily: theme.poppinsRegular,
    fontSize: 14,
    textAlign: 'center',
    color: '#201A6E',
  },
  text: {
    fontFamily: theme.poppinsRegular,
    fontSize: 10,
    textAlign: 'center',
    color: '#8F8CB6',
    paddingTop: 14,
  },
  readMore: {
    backgroundColor: '#493ED1',
    borderRadius: 30,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 14,
  },
  readMoreTitle: {
    fontFamily: theme.poppinsSemiBold,
    fontSize: 10,
    color: '#FFFFFF',
  },
  videoWrapper: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  button: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    zIndex: 1,
    elevation: 1,
  },
  buttonIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
