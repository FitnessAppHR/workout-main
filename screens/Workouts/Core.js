import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Exercise from './Exercise'

export default class Core extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      exercises: [{object: 2}, {object: 2}]
    };

    // this.getCoreWorkouts = this.getCoreWorkouts.bind(this);
  }

  // componentDidMount(){
  //  this.getCoreWorkouts();
  // }

  // getCoreWorkouts(){
  //   axios.get('endpoint')
  //     .then(results => {
  //       this.setState({
  //         exercises: results.data
  //       })
  //     })
  // }

  render() {
    return (
      <View style={styles.page}>
        <Image source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/coreHeader.jpg' }}
          style={styles.headerImage} />
        {this.state.exercises.map( (exercise, index) => {
          return (
            <Exercise key={index} exercise={exercise} style={styles.exerciseBox}/>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  headerImage: {
    width: 400,
    height: 400,
  },
  exerciseBox: {
    width: 400,
    height: 100,
    borderBottomColor: 'black',
  }

});