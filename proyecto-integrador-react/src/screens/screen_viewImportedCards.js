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
import AsyncStorage from '@react-native-async-storage/async-storage';

class Screen_viewImportedCards extends Component {
   constructor (){
       super();
       this.state ={
           importedUsers: []
       }
   }
   componentDidMount(){

   }
   async getDataStorage(){
       try {
           const resultado = await AsyncStorage.getItem('Users');
           this.setState({importedUsers:JSON.parse(resultado)});
           return resultado;
       } catch (error) {
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
             <TouchableOpacity onPress={ this.getDataStorage.bind (this)}>
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