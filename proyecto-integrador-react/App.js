
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
import {screen_viewImportedCards} from './src/screens/screen_viewImportedCards.js';
import { screen_import } from './src/screens/screen_import';
import { screen_flatlist } from './src/screens/ screen_flatlist';
//import { NavigationContainer } from '@react-navigation/native';

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

        // <NavigationContainer>

         <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
         <Text>Probando</Text>
         <screen_flatlist/>
         </SafeAreaView>
        
        // </NavigationContainer>    
      )
   };
}
