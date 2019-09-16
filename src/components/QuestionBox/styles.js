import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  questionBox: {
    paddingHorizontal: 30,
  },
  question: {
    borderWidth: 1,
    borderColor: '#F7E927',
    borderRadius: 22,
    borderBottomRightRadius: 0,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  questionTitle: {
    fontFamily: theme.poppinsMedium,
    letterSpacing: 1,
    fontSize: 18,
    lineHeight: 24,
    color: '#EBE9FA',
  },
});
