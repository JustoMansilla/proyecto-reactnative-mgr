import React, {Component} from "react";
import { View, SafeAreaView, FlatList ,ScrollView,TextInput, Image,Text,Pressable, Button,StatusBar, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import TarjetaFavorita from "../components/CardFav";
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
      return( characteridx!== contactos.login.uuid )
    })
    this.setState({contactoFAV: resultados})
    storeDataFav(resultado, "@Favoritos")

    }



    borrarItem(characteridx){
      console.log( characteridx);
      let resultados =this.state.contactoFAV.filter((contactos)=> {
        return( characteridx!== contactos.login.uuid )
      })
      this.setState({contactoFAV: resultados})
      storeDataFav(this.state.contactoFAV, "@Favoritos")

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
                 
                  <Text style={{color: '#fca311', fontSize: 40, margin: 15, fontWeight: 'bold'}}> My Contacts </Text>

                  </View> 
              {
                <FlatList
                style={styles.flat}
                data={this.state.contactoFAV}
                keyExtractor={ (item, idx) => idx.toString()}
    
    
                renderItem={ ({item}) =>
                  (

              <TarjetaFavorita
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
                  >                
              </TarjetaFavorita>
  
                   )
  
  
              }
              
              />
              }
 
 
            </ScrollView>
          </SafeAreaView>
          

        )
    };
    
};
 
 

export default SavedContacts


