import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Message from '../Components/Message';
import Create from '../Components/Create'
import Profile from '../Components/Profile'
import Liste from '../Components/Liste'
import Icon from 'react-native-vector-icons/FontAwesome'
import {createStackNavigator} from '@react-navigation/stack'


const Stack=createStackNavigator()
 export const StackNavigator=() => {
    return(
        <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8"}}
          }>
        <Stack.Screen name="Liste" component={Liste} />
      </Stack.Navigator> 
    )
}





const Tab = createBottomTabNavigator()
export default function TabNavigator ()  {
    return <Tab.Navigator
    tabBarOptions={{
        activeTintColor:'#00818A'
    }}>
        <Tab.Screen name='Liste' component={Liste}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
       
        <Tab.Screen
            name='Message'
            component={Message}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="comments" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Create'
            component={Create}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="plus" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="user-circle" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>

    </Tab.Navigator>
}

const styles = StyleSheet.create({

})
