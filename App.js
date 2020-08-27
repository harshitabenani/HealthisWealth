import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ImageScreen from './image'
import DetailsScreen from './details'
import AboutScreen from './calculators/about'
import MetricScreen from './types/metric'
import ResultScreen from './results/resultb'
import ImperialScreen from './types/imperial'
import PaceScreen from './calculators/pace'
import PaceresScreen from './results/resultp'
import FatScreen from './calculators/fat'
import FatresScreen from './results/resultf'

const RootStack=createStackNavigator(
{
    ImageScreen:ImageScreen,

    Details:{
      screen:DetailsScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    
    About:{
      screen:AboutScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    Pace:{
      screen:PaceScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    Metric : {
      screen:MetricScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    Result : {
      screen:ResultScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    Imperial : {
      screen:ImperialScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },

    Paceres : {
      screen: PaceresScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },

    Fatres : {
      screen: FatresScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },

    Fat : {
      screen: FatScreen,
         navigationOptions:{

        headerShown:false

      },
   
    },
    

  },
  {
    initialRouteName:'ImageScreen', 
    
    
  },
 

  
)




const AppContainer = createAppContainer(RootStack);
 class App extends React.Component {

  render() {
    return ( <AppContainer /> )
  }
}

export default App
