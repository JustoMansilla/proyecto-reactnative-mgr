import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getDataFetch } from '../api/api';

export class ActivityIndicatorG extends Component {
constructor(){
    super();
    this.state={
        activity: true,
    }
};
render(){

    return(
        <View>
            <Text onPress={() => this.setState({activity: !this.state.activity})}>Load Cards</Text>
           {this.state.activity &&
            <ActivityIndicatorG 
             size="large"
             color="green" 
             />}
        </View>
        )


    }

}