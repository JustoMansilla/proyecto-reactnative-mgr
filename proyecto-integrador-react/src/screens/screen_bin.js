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
import {Header} from '../components/Header';
import {styles} from '../styles/styles';

export class Screen_bin extends Component { 
    render () {
        return(
          <SafeAreaView>
            <Header/>
          <View> 
              <Text>Papelera de Reciclaje</Text>
          </View>
          </SafeAreaView>
        )
     }
  }

