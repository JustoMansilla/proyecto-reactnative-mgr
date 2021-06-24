
import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  DrawerLayoutAndroid
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, getDataFetch } from './src/apiAsync/api';
import 'react-native-gesture-handler';
import {Screen_viewImportedCards} from './src/screens/Screen_viewImportedCards';
import { Screen_import } from './src/screens/Screen_import';
import { Screen_flatlist } from './src/screens/Screen_flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { Screen_bin } from './src/screens/Screen_bin';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutUs} from './src/screens/AboutUs';



const Drawer = createDrawerNavigator();
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
       <Drawer.Navigator
       initialRouteName="Screen_Flatlist"
       drawerPosition="left"
       drawerType= "slide"
       overlayColor= "light-blue"
       drawerStyle={{
        backgroundColor: '#blue',
       }}
       drawerContentOptions={{
         activeTintColor: 'black', 
         activeBackgroundColor: 'rred', 
         inactiveTintColor: 'blue'
       }}
       >
        
        <Drawer.Screen name='Screen_Flatlist' component={Screen_flatlist}></Drawer.Screen>
        <Drawer.Screen name='Screen_viewImportedCards' component={Screen_viewImportedCards}></Drawer.Screen>
        <Drawer.Screen name='Screen_bin' component={Screen_bin}></Drawer.Screen>
        <Drawer.Screen name='Screen_import' component={Screen_import}></Drawer.Screen>
        <Drawer.Screen name='About Us' component={AboutUs}></Drawer.Screen>


       </Drawer.Navigator>
     </NavigationContainer>
        
            
      )
   };
}
