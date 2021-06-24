import React, {Component} from 'react'; 
import { getDataFetch } from '../apiAsync/api';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
  Button,
  DrawerLayoutAndroid,
  Pressable
} from 'react-native';
import {styles} from '../styles/styles';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';



export class Header extends Component {
    render() {
        return (
            <View style={styles.navbar}> 
            <View style={styles.navbarContainer}>
              <Pressable onPress= { () => this.props.navigation.openDrawer()}>
                <Text>E</Text>
              </Pressable>
            </View>
            <Text style={styles.navbarDetails}> Dashboards </Text>            
              </View> 
        )
    }
}