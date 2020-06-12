import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import WorkoutBox from './WorkoutBox';
import WorkoutSummary from './WorkoutSummary';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class FullBody extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      workouts: []
    };

    this.getWorkouts = this.getWorkouts.bind(this);
  }

  componentDidMount(){
   this.getWorkouts();
  }

  getWorkouts(){
    axios.get('http://localhost:3100/full', {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
      .then(results => {
        this.setState({
          workouts: results.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <View style={styles.page}>
          <ScrollView>
            <Image source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/fullBodyHeader.jpg' }}
              style={styles.headerImage} />
              <Text style={styles.headerText}>FULL BODY</Text>
            <View style={styles.workoutCount}>
              <Text style={styles.countText}>{this.state.workouts.length} Workouts </Text>
            </View>
            {this.state.workouts.map((workout, index) => {
              return (
                <WorkoutBox key={index} workout={workout} />
              )
            })}
          </ScrollView>
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
  workoutCount: {
    height: 30,
    borderTopColor: '#808080',
    borderBottomColor: '#808080',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    position: 'relative',
  },
  countText: {
    top: 5,
    left: 10,
  },
  headerText: {
    position: 'absolute',
    top: 300,
    left: 75,
    color: 'black',
    fontWeight: '900',
    fontSize: 48,
 }
});