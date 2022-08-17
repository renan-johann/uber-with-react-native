import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import tw from 'twrnc';
import { createStackNavigator } from '@react-navigation/stack';

const MapScreen = () => {
  
  const Stack = createStackNavigator();

  return (
    <View>

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      
      <View style={tw`h-1/2`}></View>
      <Stack.Navigator>
      
      </Stack.Navigator>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})