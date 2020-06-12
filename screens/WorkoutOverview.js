import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';



import FullBody from './Workouts/FullBody';
import WorkoutSummary from './Workouts/WorkoutSummary';
import WorkoutHome from './WorkoutHome';

export default function WorkoutOverview() {
  return (

    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <WorkoutHome />
        </View>
        <View style={styles.page} key="2">
          <FullBody />
        </View>
        <View style={styles.page} key="3">
          <WorkoutSummary />
        </View>
      </ViewPager>
    </View>
  );
}


const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

