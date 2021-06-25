import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button, FlatList, TouchableOpacity, StatusBar} from 'react-native'
import { styles } from '../styles/styles'
import DeleteCard from "../components/TarjetaBorrada";
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {storeDataBorrado, getDataBorrado} from "../apiAsync/asyncFunction"



export class Screen_bin extends Component {

  
  constructor(){
      super();
      this.state = {
        
          tarjetasBorradas:[],
          contactos:[],
          resultado:[],

      }
  }
  
componentDidMount() {
this._unsubscribe = this.props.navigation.addListener('focus', () => {            
   getDataBorrado("@TarjetasEliminadas")
   .then(resultado=> {
     this.setState({tarjetasBorradas : resultado })
   });
});
}
componentWillUnmount(){
this._unsubscribe()
}
     
//eliminar item 
borrarItem(characteridx){
  console.log( characteridx);
  let resultados =this.state.tarjetasBorradas.filter((contactos)=> {
    
      return( characteridx!== contactos.login.uuid )
  })
  
    this.setState({tarjetasBorradas: resultados})
    storeDataBorrado(this.state.tarjetasBorradas, "@TarjetasEliminadas")

  }
  //eliminado completo
  async deleteAll (key){
    try{
  
        await AsyncStorage.removeItem(key)
        let resultado = [];
        getDataBorrado(resultado, "@TarjetasEliminadas")
        this.setState({tarjetasBorradas:  [] })
        } catch(error){
        console.log(error);
      }
    
  }

  render(){

      return(
        
        <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle='dark-content'                      
          backgroundColor='#fca311'
          />
          <ScrollView >
          <View style={styles.navbar}> 
          
            <Text style={{color: '#fca311', fontSize: 40, margin: 15, fontWeight: 'bold'}}> Papelera </Text>

            </View> 

            <Pressable   style={styles.vaciarPapelera}  onPress={()=> this.deleteAll("@TarjetasEliminadas")} >
                <Text  style={{padding: 20, fontWeight: 'bold', fontSize: 16, color: 'black', alignItems: 'center'}}> Apretar para vaciar</Text>
            </Pressable>      
          {
            <FlatList
              style={styles.flat}
              data={this.state.tarjetasBorradas}
              keyExtractor={ (item, idx) => idx.toString()}
  
  
              renderItem={ ({item}) =>
                (


            <DeleteCard
            id= {item.login.uuid}
            firstName={item.name.first}
            img={item.picture.large}
            lastName={item.name.last}
            Email={item.email}
            city={item.location.city}
            Street={item.location.street.name}
            StreetNum={item.location.street.number}
            Country={item.location.country}
            State={item.location.state}
            Zipcode={ item.location.postcode}
            Age= {item.dob.age}
            Date= {item.dob.date}
            Tel= {item.phone}
            RegisterDate = {item.registered.date}
                />

                
           

                )


            }
          
          />
        }
         </ScrollView>
          </SafeAreaView>
        

      )
  };
  
};





