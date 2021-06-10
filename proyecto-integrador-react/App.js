
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
//import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         saludo: '',
         objeto:{
           nombre: '',
           apellido: ''
         }
      }
    };


    componentDidMount(){
      this.storageString();
      this.getStringStorage();

      this.storageObject();
      this.getObjectStorage();

      this.removeItem();

      this.getApi();
    }

    async storageString(value){
      try {
        await AsyncStorage.setItem('@myString',value)
      } catch (error){
        console.log(error);
      }
    }

    async getStringStorage(){
      try{
        const value = await AsyncStorage.getItem('@myString')
        if(value !== null){
          this.setState({ saludo: value})
        }
      } catch (error){
        console.log(error);
      }
    }

    async storageObject(value){
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@myObject', jsonValue)
      } catch (error){
        console.log(error);
      }
    }

    async getObjectStorage(){
      try {
        const value = await AsyncStorage.getItem('@myObject');
        if (value !== null){
          const objetoRecuperado = JSON.parse(value);
          this.setState({objeto: objetoRecuperado})
        } else {
          console.log('No se encontró ningún valor');  
        }
      } catch (error){
        console.log(error);
      }
    }

    async removeItem(key) {
      try {
        await AsyncStorage.removeItem(key);  
      } catch (error){
        console.log(error);
      }
    }

    async getApi () {
      try {
        let respuesta = await getDataFetch();
      }catch (error) {
        console.log(error);
      }
    }
    



    render(){

      //const { saludo, objeto } = this.state;

      return(

        // <NavigationContainer>

        // <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>

        // <Text> {saludo} </Text>

        // <TouchableOpacity onPress={() => this.storageString('Aca va un string')}> 
        //   <Text> Guardar Saludo (string) </Text>
        // </TouchableOpacity>

        // <Text>{'${objeto.nombre} ${objeto.apellido}'}</Text>

        // <TouchableOpacity onPress={() => this.storageObject({nombre: 'Justo', apellido: 'Mansilla'})}> 
        //   <Text> Guardar Nombre (objeto literal)</Text>
        // </TouchableOpacity>
        
        // </SafeAreaView>
        
        // </NavigationContainer>
        //<screen_import/>
  <Text>Probando</Text>
      )
   };
}
