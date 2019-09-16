import React, {Component} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {dialogflowConfig} from '../../lib/env';
import {
  AnswerButton,
  AnswerButtonMulti,
  AnswerKeyboard,
  AnswerRes,
  AnswerUser,
} from '../../components';
import QuestionButton from '../../components/QuestionButton';

class Main extends Component {
  state = {
    typing: true,
    messages: [
      {
        _id: 1,
        text: 'Akın abi Akın abi Akın abi Akın abi Akın abi Akın abi',
        createdAt: new Date(),
        user: false,
      },
    ],
    buttons: undefined,
    sendText: '',
    keyboardOffset: -100,
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  onScrollView = () => {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    }, 100);
  };

  answerResponse = result => {
    const {messages} = this.state;
    const postMessage = {
      _id: messages.length + 1,
      text: result.queryResult.fulfillmentText,
      createdAt: new Date(),
      user: false,
    };
    this.setState({
      messages: [...messages, postMessage],
    });
    result.queryResult.fulfillmentMessages.map((item, i) => {
      if (item.payload) {
        if (item.payload.platform === 'hizliyanit') {
          this.setState({buttons: item.payload.cevaplar});
        }
      }
    });
    this.onScrollView();
  };

  onSend(message) {
    const {messages} = this.state;
    const postMessage = {
      _id: messages.length + 1,
      text: message,
      createdAt: new Date(),
      user: true,
    };
    this.setState({
      messages: [...messages, postMessage],
      sendText: '',
    });

    Dialogflow_V2.requestQuery(
      message,
      result => this.answerResponse(result),
      error => console.log(error),
    );
    this.onScrollView();
  }

  render() {
    const {messages, buttons, sendText} = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.messageWrapper}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
            ref={ref => {
              this.scrollView = ref;
            }}
            data={messages}
            ListHeaderComponent={<QuestionButton />}
            renderItem={({item, i}) => {
              return item.user ? (
                <AnswerUser message={item.text} />
              ) : (
                <AnswerRes message={item.text} />
              );
            }}
          />
        </View>
        {buttons && (
          <View style={styles.answerBtn}>
            {buttons.map((item, i) => {
              return <AnswerButton key={`btn_${i}`} text={item} />;
            })}
          </View>
        )}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
          <AnswerKeyboard
            blurOnSubmit={false}
            value={sendText}
            onChangeText={val => this.setState({sendText: val})}
            onPress={() => this.onSend(sendText)}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Main;
