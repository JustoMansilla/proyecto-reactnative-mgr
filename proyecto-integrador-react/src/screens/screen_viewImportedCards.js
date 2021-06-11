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

class screen_viewImportedCards extends Component {
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
// flatlist
   render(){
       const values = this.state.importedUsers.map( item =>
        <Text key={item.login.uuid}
        style= {{fontSize: 20}}>{item.name.first}</Text>
        )
     return (
         <View> 
             <Text> Mostramos los valores importados</Text>
             {values}
             <TouchableOpacity onPress={ this.getDataStorage.bind (this)}>
                 <View> <Text> recuperar datos</Text></View>
             </TouchableOpacity>

             <TouchableOpacity onPress= { () => this.setState({importedUsers: []})}>
                 <View> <Text> Borrar datos importados</Text></View>
             </TouchableOpacity>
         </View>
     )
   }
}
export {screen_viewImportedCards}