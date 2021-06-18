
import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, getDataFetch } from './src/api/api';
import 'react-native-gesture-handler';
import {Screen_viewImportedCards} from './src/screens/Screen_viewImportedCards.js';
import { Screen_import } from './src/screens/Screen_import';
import { Screen_flatlist } from './src/screens/Screen_flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicatorG } from './src/screens/ActivityIndicatorG';
import { createStackNavigatior } from '@react-navigation/stack'
import { startClock } from 'react-native-reanimated';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         objeto:[],
      }
    };

//poner navegacion
    render(){

      return(

         <NavigationContainer>
           <stack.Navigator>
             <Stack.Screen name= "Screen_import" component = {Screen_import}/>
             <Stack.Screen name= "Screen_viewImport" component = {Screen_viewImport}/>
           </stack.Navigator>
         <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
          <Screen_flatlist/>
         </SafeAreaView>
        
         </NavigationContainer>    
      )
   };
}
