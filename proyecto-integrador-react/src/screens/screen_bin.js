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
   getDataBorrado("@tarjetaEliminadas")
   .then(resultado=> {
     this.setState({tarjetasBorradas : resultado })
   });
});
}
componentWillUnmount(){
this._unsubscribe()
}



borrarItem(characteridx){
  console.log( characteridx);
  let resultados =this.state.tarjetasBorradas.filter((contactos)=> {
    
      return( characteridx!== contactos.login.uuid )
      //comparo idx con el uuid
  })
  
    // seteo de estado
    this.setState({tarjetasBorradas: resultados})
    storeDataBorrado(this.state.tarjetasBorradas, "@tarjetaEliminadas")

  }

  render(){

      return(
        
          <SafeAreaView style={styles.container}>
            <Text>hola</Text>                 
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





