
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
<<<<<<< HEAD
import { Screen_flatlist } from './src/screens/Screen_flatlist';
=======
import { Screen_flatlist} from './src/screens/Screen_flatlist';
>>>>>>> 867e46da5be184fe375487c5b3d3a6ebbba20c9d
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
          <Screen_flatlist/>
         </SafeAreaView>
        
        // </NavigationContainer>    
      )
   };
}
