import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteUsers from '../src/components/DeleteUsers';
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
        <DeleteUsers key = {item.login.uuid} elemento = {item}/>)
        return(
          <View> 
          <Text style = {{width:"100%", marginTop: "50%"}}>Papelera</Text>
  
         
  
          {valores}
  
          <TouchableOpacity onPress={this.getTarjetaEliminada.bind(this)}>
            <View>
              <Text>Ver datos borrados</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={ () => this.setState({tarjetasBorradas: [] })}>
            <View>
              <Text style={{color: 'red'}}>BORRAR DE FORMA PERMANENTE</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
        
     }
  }

