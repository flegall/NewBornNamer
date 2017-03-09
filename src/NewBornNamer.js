/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import FIRST_NAMES from './FirstNames';

export default class NewBornNamer extends Component {
  state: {
    choiceA: string,
    choiceB: string,
    votes: { [firstName: string]: number },
  } = {
    choiceA: FIRST_NAMES[0],
    choiceB: FIRST_NAMES[1],
    votes: FIRST_NAMES.reduce(
      (votes, firstName) => ({ ...votes, [firstName]: 0 }),
      {},
    ),
  };

  chooseA = () => {
    this.choose(this.state.choiceA);
  };

  chooseB = () => {
    this.choose(this.state.choiceB);
  };

  choose(choice: string) {
    const { votes } = this.state;
    const [choiceA, choiceB] = _.shuffle(FIRST_NAMES);
    this.setState({
      votes: { ...votes, [choice]: votes[choice] + 1 },
      choiceA,
      choiceB,
    });
  }

  done = () => {};

  render() {
    const { choiceA, choiceB } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Pick up a baby name...
        </Text>

        <View style={styles.names}>
          <Button
            onPress={this.chooseA}
            title={`It's ${choiceA} !`}
            color="#841584"
          />
          <Button
            onPress={this.chooseB}
            title={`It's ${choiceB} !`}
            color="#841584"
          />
        </View>

        <Button
          styles={styles.done}
          onPress={this.done}
          title="Show my favorite !"
          color="#4b00fc"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'lightpink',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 40,
    color: '#fc0064',
  },
  names: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  done: {
    fontSize: 50,
  },
});

AppRegistry.registerComponent('NewBornNamer', () => NewBornNamer);
