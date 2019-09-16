import React, {Component} from 'react';
import {View, StatusBar, FlatList, Text} from 'react-native';
import styles from './styles';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {dialogflowConfig} from '../../lib/env';
import {
  AnswerButton,
  AnswerButtonMulti,
  AnswerImage,
  AnswerKeyboard,
  AnswerRes,
  AnswerUser,
  QuestionButton,
  RoutingCard,
  VideoPopup,
} from '../../components';

class Main extends Component {
  state = {
    sendText: '',
    paused: true,
    videoUri: undefined,
    messages: [
      {
        _id: 1,
        text: {
          queryResult: {
            fulfillmentMessages: [
              {
                text: {
                  text: ['Text response yasir düz yazı'],
                },
              },
            ],
          },
        },
        createdAt: new Date(),
        user: false,
      },
    ],
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  openTheVideo = videoUri => {
    this.setState({videoUri, paused: false});
  };

  sendMessage = (message, user) => {
    const {messages} = this.state;
    const postMessage = {
      _id: messages.length + 1,
      text: message,
      createdAt: new Date(),
      user,
    };
    this.setState({
      messages: [...messages, postMessage],
      sendText: '',
    });
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    }, 100);
  };

  onSend(message) {
    this.sendMessage(message, true);
    Dialogflow_V2.requestQuery(
      message,
      result => this.sendMessage(result, false),
      error => console.log(error),
    );
  }

  renderTypes = (item, type) => {
    switch (type) {
      case 'res_text':
        return item.text.map((_, i) => {
          return <AnswerRes key={`answerResX_${i}`} message={_} />;
        });
      case 'res_question_box':
        return (
          <QuestionButton
            key="res_question_box"
            question={item.text}
            buttonTitle={item.buttonTitle}
          />
        );
      case 'res_image_box':
        return <AnswerImage key="res_image_box" uri={item.image} />;
      case 'res_answer_button':
        return (
          <View key="res_answer_button" style={styles.answerBtn}>
            {item.answer.map((_, i) => {
              return <AnswerButton key={`answerButton_${i}`} text={_} />;
            })}
          </View>
        );
      case 'res_multi_buttons':
        return (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={item.multiButton}
            contentContainerStyle={styles.buttonsList}
            renderItem={_ => {
              return (
                <AnswerButtonMulti
                  key={`answerButtonMulti_${_.item}`}
                  text={_.item}
                />
              );
            }}
          />
        );
      case 'res_routing_card':
        return (
          <FlatList
            key="res_routing_card"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.buttonsList}
            horizontal
            data={item.routingCard}
            renderItem={_ => {
              return (
                <RoutingCard
                  key={`routingCard_${_.index}`}
                  title={_.item.title}
                  uri={_.item.videoImage}
                  onPress={() => this.openTheVideo(_.item.video)}
                />
              );
            }}
          />
        );
      default:
    }
  };

  render() {
    const {messages, sendText, paused, videoUri} = this.state;
    console.log(messages);
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        {!paused && (
          <VideoPopup
            paused={paused}
            uri={videoUri}
            onPress={() => {
              this.setState({videoUri: undefined, paused: true});
            }}
          />
        )}
        <View style={styles.messageWrapper}>
          <FlatList
            ref={ref => {
              this.scrollView = ref;
            }}
            showsVerticalScrollIndicator={false}
            data={messages}
            renderItem={({item, i}) => {
              return item.user ? (
                <AnswerUser message={item.text} />
              ) : (
                item.text.queryResult.fulfillmentMessages.map(_ => {
                  if (_.text) {
                    return (
                      <AnswerRes key={`answerRes_${i}`} message={_.text.text} />
                    );
                  }
                  if (_.payload) {
                    return this.renderTypes(_.payload, _.payload.type);
                  }
                })
              );
            }}
          />
        </View>
        <AnswerKeyboard
          value={sendText}
          onChangeText={val => this.setState({sendText: val})}
          onPress={() => this.onSend(sendText)}
        />
      </View>
    );
  }
}

export default Main;
