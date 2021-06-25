
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
import { Screen_flatlist } from './src/screens/Screen_flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { Screen_bin } from './src/screens/Screen_bin';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutUs} from './src/screens/AboutUs';
import SavedContacts from './src/screens/MisContactos';



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
       overlayColor= "white"

       drawerStyle={{
        backgroundColor: 'black',
        color: '#fff'
       }}

       drawerContentOptions={{
         activeTintColor: 'black', 
         activeBackgroundColor: '#fca311', 
         inactiveTintColor: 'white'
       }}
       >
        
        <Drawer.Screen name='Principal' component={Screen_flatlist}></Drawer.Screen>
        <Drawer.Screen name='Papelera' component={Screen_bin}></Drawer.Screen>
        <Drawer.Screen name='Mis Contactos' component={SavedContacts}></Drawer.Screen>
        <Drawer.Screen name='About Us' component={AboutUs}></Drawer.Screen>

       



       </Drawer.Navigator>
     </NavigationContainer>
        
            
      )
   };
}
