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


class Screen_viewImportedCards extends Component {
   constructor (){
       super();
       this.state ={
           importedUsers: [],
           

       }
   }
   componentDidMount(){

   }

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

 
   render(){
       const values = this.state.importedUsers.map( item =>
        <Text key={item.login.uuid}
        style= {{fontSize: 20}}>{item.name.first}{item.name.last}</Text>
        )
     return (

         <SafeAreaView>
             <Header/>
         <View> 

            <View style={{backgroundColor: 'white', alignItems: 'center', borderRadius: '10%', margin: 30}}>
                <Text style={{fontSize: 30, alignItems: 'center', margin: 10, textAlign: 'center'}}>Valores importados</Text>
            </View>

             {values}

             <TouchableOpacity onPress={ this.getData.bind (this)} style={{backgroundColor: 'white', alignItems: 'center', borderRadius: '10%', margin: 30}}>
                  <Text style={{fontSize: 30, alignItems: 'center', margin: 10, textAlign: 'center'}}> Recuperar datos</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress= { () => this.setState({importedUsers: []})} style={{backgroundColor: 'white', alignItems: 'center', borderRadius: '10%', margin: 30}}>
                <Text style={{fontSize: 30, alignItems: 'center', margin: 10, textAlign: 'center'}}> Borrar datos importados</Text>
             </TouchableOpacity>

         </View>
         </SafeAreaView>
     )
   }
}
export {Screen_viewImportedCards}