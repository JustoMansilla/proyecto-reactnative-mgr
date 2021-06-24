import React, {Component} from "react";
import { View, SafeAreaView, FlatList ,ScrollView,TextInput, Image,Text,Pressable, Button} from 'react-native'
import { styles } from '../styles/styles'
import TarjetaBorrada from "../components/CardFav";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getDataFav,storeDataFav} from "../apiAsync/asyncFunction"




class SavedContacts extends Component {

  
    constructor(){
        super();
        this.state = {
          
            
          contactoFAV:[],
          contactos:[],
          resultado:[],

         


        }
    }


   componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {            
       getDataFav("@Favoritos")
       .then(resultado=> {
        this.setState({contactoFAV : resultado })
       });
      });
    }
    componentWillUnmount(){
      this._unsubscribe()
    
    }

  borrarItem(characteridx){
    console.log( characteridx);
    let resultados =this.state.contactoFAV.filter((contactos)=> {
      //  guardo en var resultados el filtro de personBorrada
      return( characteridx!== contactos.login.uuid )
      //comparo idx con el uuid
    })
    // seteo el estado 
    this.setState({contactoFAV: resultados})
    storeDataFav(resultado, "@Favoritos")

    }



    borrarItem(characteridx){
      console.log( characteridx);
      let resultados =this.state.contactoFAV.filter((contactos)=> {
        //  guardo en var resultados el filtro de personBorrada
        return( characteridx!== contactos.login.uuid )
        //comparo idx con el uuid
      })
      // seteo el estado 
      this.setState({contactoFAV: resultados})
      storeDataFav(this.state.contactoFAV, "@contactoFAV")

      }
         
  
    render(){
      

        return(
          
            <SafeAreaView style={styles.container}>
              {
                <FlatList
                style={styles.flat}
                data={this.state.tarjetasBorradas}
                keyExtractor={ (item, idx) => idx.toString()}
    
    
                renderItem={ ({item}) =>
                  (

              <TarjetaBorrada
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
                  //RegisterDate = {item.registered.date}
                  >                
              </TarjetaBorrada>
  
                   )
  
  
              }
              
              />
              }
          </SafeAreaView>
          

        )
    };
    
};
 
 

export default SavedContacts


