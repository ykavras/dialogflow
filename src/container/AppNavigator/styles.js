import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let buttonTitle = 12;

if (width < 375) {
  buttonTitle = 10;
}

export default StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#d2d2d2',
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            height: 70,
            paddingBottom: 10,
          },
          {
            height: 40,
          },
        ),
      },
      android: {
        height: 80,
      },
    }),
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  buttonTitle: {
    fontFamily: theme.poppinsRegular,
    fontSize: buttonTitle,
    lineHeight: buttonTitle,
    color: '#CCCCD5',
  },
  btnActTitle: {
    color: '#2C1DEB',
  },
});
