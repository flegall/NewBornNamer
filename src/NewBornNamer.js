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

import { StackNavigator } from 'react-navigation';

import FIRST_NAMES from './FirstNames';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Pick up a baby name...',
    header: {
      tintColor: '#fc0064',
    },
  };

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

  done = () => {
    const { navigate } = this.props.navigation;
    const { votes } = this.state;

    navigate('Results', { votes });
  };

  render() {
    const { choiceA, choiceB } = this.state;

    return (
      <View style={styles.container}>
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

class ResultsScreen extends Component {
  static navigationOptions = {
    title: 'And the winner is ...',
    header: {
      tintColor: '#fc0064',
    },
  };

  render() {
    const votes: {
      [fistName: string]: number,
    } = this.props.navigation.state.params.votes;

    const pairs = _.toPairs(votes);
    const [name, vote] = pairs.reduce(([aName, aVote], [bName, bVote]) => {
      return aVote >= bVote ? [aName, aVote] : [bName, bVote];
    });

    return (
      <View style={styles.container}>
        <Text>{name} !!</Text>
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
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fc0064',
  },
  names: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});

const NewBornNamer = StackNavigator({
  Home: { screen: HomeScreen },
  Results: { screen: ResultsScreen },
});

AppRegistry.registerComponent('NewBornNamer', () => NewBornNamer);
