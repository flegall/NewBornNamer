/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash';
import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const firstNames = [
  'Mary',
  'Lisa',
  'Barbara',
  'Jennifer',
  'Sharon',
];

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Pick up a baby name...',
    header: {
      tintColor: 'deeppink',
    },
  };

  state = {
    choiceA: firstNames[0],
    choiceB: firstNames[1],
    votes: {},
  };

  choose(choice: string) {
    this.setState((state) => {
      const { votes } = state;
      const currentVoteForTheChoice = votes[choice] || 0;
      const [choiceA, choiceB] = _.shuffle(firstNames);
      return {
        votes: { ...votes, [choice]: currentVoteForTheChoice + 1 },
        choiceA, choiceB,
      };
    });
  }

  done() {
    const { navigate } = this.props.navigation;
    const { votes } = this.state;

    navigate('Results', { votes });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`It's ${this.state.choiceA} !`}
          color='darkviolet'
          onPress={() => this.choose(this.state.choiceA)}
        />
        <Button
          title={`It's ${this.state.choiceB} !`}
          color='darkviolet'
          onPress={() => this.choose(this.state.choiceB)}
        />
        <Button
          title="Show my Favorite !"
          color='darkviolet'
          onPress={() => this.done()}
        />
      </View>
    );
  }
}

class ResultsScreen extends Component {
  static navigationOptions = {
    title: 'And the winner is ...',
    header: {
      tintColor: 'deeppink',
    },
  };

  render() {
    const votes = this.props.navigation.state.params.votes;

    const [name, votesCount] = _(votes)
      .toPairs()
      .maxBy(([name, votesCount]) => votesCount) || [];

    return (
      <View style={styles.container}>
        {name ?
          <Text style={styles.result}>{name} with {votesCount} votes!!</Text> :
          <Text style={styles.result}>No votes so far !</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'lightpink',
    paddingTop: 40,
    paddingBottom: 20,
  },
  result: {
    fontSize: 24,
    color: 'darkviolet',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const NewBornNamer = StackNavigator({
  Home: { screen: HomeScreen },
  Results: { screen: ResultsScreen},
});


AppRegistry.registerComponent('NewBornNamer', () => NewBornNamer);
