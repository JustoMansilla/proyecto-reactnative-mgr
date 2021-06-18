import React, {Component} from 'react'; 
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
  Button
} from 'react-native';
import {styles} from '../Styles';

export class Header extends Component {
    render() {
        return (
            <View style={styles.navbar}> 
            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress= { () => this.props.navigation.openDrawer()}>
              <View style={styles.navbarButton}>
              </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.navbarDetails}> Dashboards </Text>            
              </View> 
        )
    }
}