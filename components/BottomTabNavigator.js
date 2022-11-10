import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride.js";
import RideHistoryScreen from "../screens/RideHistory.js";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          
          { 
            //<Tab.Screen name="Ride" component={RideScreen} />
            <Tab.Screen name="Ride History" component={RideHistoryScreen} />
          }
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
