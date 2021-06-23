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
import { Cards } from '../components/Cards';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Screen_import} from './Screen_import'

class Screen_viewImportedCards extends Component {
   constructor (){
       super();
       this.state ={
           importedUsers: [],
           setItem: [],
           tarjetasBorradas: [],

       }
   }
   componentDidMount(){

   }
//    async getDataStorage(){
//        try {
//            const resultado = await AsyncStorage.getItem('Users');
//            this.setState({importedUsers:JSON.parse(resultado)});
//            return resultado;
//        } catch (error) {
//            console.log(error)
//        }
//    }


renderItem = ({item}) => {
    return (
      <Cards
      elemento = {item}
      onDelete = {this.borrarTarjeta.bind(this)}
      />
    )
  }

  keyExtractor = (item, idx) => idx.toString()
  
  async getData(){
      try{
          const resultado = await AsyncStorage.getItem("Users");
          this.setState({importedUsers: JSON.parse(resultado)});
          return resultado;
      }
      catch(error){
          console.log(error)
      }
  } 

  borrarTarjeta (idTarjeta){
    let nuevoArray = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta 
    });

    let tarjetasBorradas = this.state.importedUsers.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    this.setState({
      importedUsers: nuevoArray,
    
      tarjetasBorradas: tarjetasBorradas,
    })
    
  };

  async papeleraStorage(){
    try{
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        Alert.alert("Datos almacenados correctamente");
        console.log(this.state.tarjetasBorradas);
    }
    catch(error){
        console.log(error)
    }
} 
   render(){
       const values = this.state.importedUsers.map( item =>
        <Text key={item.login.uuid}
        style= {{fontSize: 20}}>{item.name.first}</Text>
        )
     return (
         <SafeAreaView>
             <Header/>
         <View> 
             <Text> Mostramos los valores importados</Text>
             {values}
             <TouchableOpacity onPress={ this.getData.bind (this)}>
                  <Text> Recuperar datos</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress= { () => this.setState({importedUsers: []})}>
                <Text> Borrar datos importados</Text>
             </TouchableOpacity>
         </View>
         </SafeAreaView>
     )
   }
}
export {Screen_viewImportedCards}