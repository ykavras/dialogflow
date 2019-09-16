import React, {Component} from 'react';
import {SafeAreaView, View, StatusBar, Animated, Easing} from 'react-native';
import styles from './styles';
import Hero from '../../assets/icons/Hero';
import jsonData from './data';
import {
  PrivacyPopup,
  QuestionBox,
  WelcomeButton,
  WelcomeCenterText,
  WelcomeGenders,
  WelcomeInfoBtn,
  WelcomeSkipBtn,
  WelcomeSmallText,
} from '../../components';

class Welcome extends Component {
  state = {
    data: jsonData,
    count: 0,
    info: false,
    fontSize: 30,
    opacity: new Animated.Value(0),
    transform: new Animated.Value(100),
    scale: new Animated.Value(0.5),
  };

  componentDidMount() {
    this.props.navigation.navigate('Main')
    const {opacity, transform, scale} = this.state;
    this.anim(opacity, 1, 1000);
    this.anim(transform, 1, 1000);
    this.anim(scale, 1, 1000, 1);
  }

  anim(thisState, value, duration, elastic = 0) {
    Animated.timing(thisState, {
      toValue: value,
      duration: duration,
      easing: Easing.elastic(elastic),
    }).start();
  }

  onStepBox = (time = 0) => {
    const {data, opacity, transform, scale, count} = this.state;
    if (data.length - 1 === count) {
      this.props.navigation.navigate('Main');
    } else {
      setTimeout(() => {
        this.setState({count: count + 1});
        this.anim(opacity, 0, 0);
        this.anim(transform, 100, 0);
        this.anim(scale, 0, 0);
        setTimeout(() => {
          this.anim(opacity, 1, 1000);
          this.anim(transform, 0, 1000);
          this.anim(scale, 1, 1000, 1);
        }, 200);
      }, time);
    }
  };

  onInfo = () => {
    const {info} = this.state;
    this.setState({info: !info});
  };

  render() {
    const {navigate} = this.props.navigation;
    const {data, count, opacity, transform, scale, info} = this.state;
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.wrapper}>
          <StatusBar barStyle="light-content" />
          {info && (
            <PrivacyPopup onPress={() => this.setState({info: false})} />
          )}
          <View style={styles.top}>
            <Hero style={styles.hero} />
            <WelcomeSkipBtn onPress={() => navigate('Main')} />
          </View>
          <Animated.View
            style={[
              styles.center,
              {opacity, transform: [{translateY: transform}]},
            ]}>
            {data[count].text ? (
              <WelcomeCenterText
                text={data[count].text}
                fontSize={data[count].fontSize}
              />
            ) : (
              <QuestionBox data={data[count].questionBox} />
            )}
          </Animated.View>
          <View style={styles.bottom}>
            <WelcomeSmallText style={{opacity}} text={data[count].smallText} />
            {data[count].infoText && (
              <WelcomeInfoBtn
                style={{opacity}}
                onPress={() => this.onInfo()}
                text="BANA GİZLİLİK HAKKINDA DAHA FAZLA BİLGİ VER"
              />
            )}
            {data[count].button ? (
              <WelcomeButton
                style={{opacity, transform: [{scale}]}}
                onPress={() => this.onStepBox()}
                title={data[count].buttonTitle}
              />
            ) : data[count].genders ? null : (
              this.onStepBox(3000)
            )}
            {data[count].genders && (
              <WelcomeGenders
                data={data[count].genders}
                onPress={() => this.onStepBox()}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Welcome;
