import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import WorkoutSummary from './WorkoutSummary';



export default class ExerciseBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      time: this.props.time,
    };
  }

  render() {

    return (

      <View style={styles.box} >
        <Image source={{ uri: this.props.exercise.img }} style={styles.thumbnail} />
        <View style={styles.textBlock}>
          <Text style={styles.textTitle} >{this.props.exercise.name}</Text>
          <Text style={styles.textSub}>{this.props.exercise.equipment}</Text>
          <Text style={styles.textSub}>{this.props.exercise.reps}</Text>
        </View>
        <Text style={styles.textTime}> {this.props.time}</Text>
      </View>
    )

  }
}



const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 415,
    height: 100,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    backgroundColor: '#fff',

  },
  thumbnail: {
    height: 99,
    width: 99,
  },
  textBlock: {
    position: 'absolute',
    top: 20,
    left: 150,
  },
  textTitle: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'left',
  },
  textSub: {
    position: 'relative',
    fontFamily: 'Arial',
    textAlign: 'left',
  },
  textTime: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontFamily: 'Arial',
  }
});
