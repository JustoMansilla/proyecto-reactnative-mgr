import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button, FlatList, TouchableOpacity} from 'react-native'
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


async Reset (key){
  try{

      await AsyncStorage.removeItem(key)
      let resultado = [];
      getDataBorrado(resultado, "@TarjetasEliminadas")

       this.setState({tarjetasBorradas:  [] })
      } catch(error){
      console.log(error);
    }
  
}
borrarItem(characteridx){
  console.log( characteridx);
  let resultados =this.state.tarjetasBorradas.filter((contactos)=> {
    
      return( characteridx!== contactos.login.uuid )
  })
  
    this.setState({tarjetasBorradas: resultados})
    storeDataBorrado(this.state.tarjetasBorradas, "@TarjetasEliminadas")

  }
  
  

  render(){

      return(
        
          <SafeAreaView style={styles.container}>
            <Pressable   style={styles.modalBtnText}  onPress={()=> this.Reset("@TarjetasEliminadas")} >
                <Text  > Vaciar papelera</Text>
            </Pressable>      
          {
            <FlatList
              style={styles.flat}
              data={this.state.tarjetasBorradas}
              keyExtractor={ (item, idx) => idx.toString()}
  
  
              renderItem={ ({item}) =>
                (


            <DeleteCard
            
            onDelete= {this.borrarItem.bind(this)}
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

        </SafeAreaView>
        

      )
  };
  
};





