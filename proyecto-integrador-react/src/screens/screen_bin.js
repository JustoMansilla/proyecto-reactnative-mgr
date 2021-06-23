import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarjetaBorrada from '../components/TarjetaBorrada';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../styles/styles';

export class Screen_bin extends Component { 

  constructor(){
    super();
    this.state ={
        tarjetasBorradas: [], 
    }
  } 

  async getTarjetaEliminada () {
    try{
        const resultado = await AsyncStorage.getItem("Papelera");
        this.setState({tarjetasBorradas: JSON.parse(resultado)});
        return resultado;
    }
    catch(error){
        console.log(error)
    }
  }




    render () {

      const valores = this.state.tarjetasBorradas.map( item =>
        <TarjetaBorrada elemento = {item.login.uuid} elemento = {item}/>)

        return(

          <SafeAreaView>
          <View> 

            <Header/>
          <Text style = {{width:"100%", marginTop: "50%"}}>Papelera</Text>
  
         
  
          {valores}
  
          <TouchableOpacity onPress={this.getTarjetaEliminada.bind(this)}>
            <View>
              <Text>Ver datos borrados</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={ () => this.setState({tarjetasBorradas: [] })}>
            <View>
              <Text>Eliminar</Text>
            </View>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      )
        
     }
  }

