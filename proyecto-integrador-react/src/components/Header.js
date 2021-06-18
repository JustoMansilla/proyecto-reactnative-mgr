import React, {Component} from 'react'; 
import { getDataFetch } from '../api/api';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
  Button
} from 'react-native';
import {styles} from '../styles/styles';

export class Header extends Component {
    render() {
        return (
            <View style={styles.navbar}> 
            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress= { () => this.props.navigation.openDrawer()}>
              <View style={styles.navbarButton}>
                <Text>E</Text>
              </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.navbarDetails}> Dashboards </Text>            
              </View> 
        )
    }
}