import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;
const width3 = width / 3;

export default StyleSheet.create({
  flatList: {},
  circleBtn: {
    width: width3,
    height: width3,
    borderRadius: width3,
    backgroundColor: theme.welcomeColor2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
  },
  circleBtnTitle: {
    fontFamily: theme.poppinsRegular,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
