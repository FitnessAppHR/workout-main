import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';

import Core from './Workouts/Core.js'

export default function WorkoutOverview() {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Core />
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
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

