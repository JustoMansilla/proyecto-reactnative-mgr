import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Pressable,
  StatusBar
} from 'react-native';
import { getDataFetch, verMasCards } from '../apiAsync/api';
import {styles} from '../styles/styles';
import {Cards} from '../components/Cards';
import {getDataBorrado, storeDataBorrado,storeDataFav,getDataFav,getDataVerMas} from "../apiAsync/asyncFunction"

//PALETA DE COLORES

// #000000 , #14213d , #fca311 , #e5e5e5 , #ffffff


export class Screen_flatlist extends Component{
    constructor(){
        super()
        this.state = {
            text: '',
            contactos: [],
            search: '',
            activity: true,
            contactosOriginal:[],
            textoBuscado: " ",
            setItem: [],
            tarjetasBorradas: [],
            agregadas: " ",
            contactoFAV:[],
            resultado:[],

        }
    }
   
    componentDidMount(){
        //Fetch api
        getDataFetch()
        .then(resultado=> {
          this.setState({contactos : resultado, activity:false,
          contactosOriginal: resultado })
        })

        let contactosOriginal
        //get Borrado
        getDataBorrado('@TarjetasEliminadas')
        .then(resultadoBorrado=> {
          this.setState({tarjetasBorradas : resultadoBorrado })
        })
        //get fav
        getDataFav("@Favoritos")
     .then(resultadoFav=> {
      this.setState({contactoFAV : resultadoFav })
     })
    }

        
    //Ver mas tarjetas metodo    
    addCards(){
            verMasCards(this.state.agregadas) 
            .then(resultado => {
              this.setState({contactos: [...this.state.contactos, ...resultado]})
            })
          }


          //empieza metodo borrar
          borrarItem(idx){
            console.log( idx);
            let resultados =this.state.contactos.filter((contactos)=> {
              
              return( idx!== contactos.login.uuid)
            })
            let Borrado = this.state.contactos.filter((contactos)=> {
              return( idx== contactos.login.uuid )
            })
            let arrayBorrados = [...this.state.tarjetasBorradas, ...Borrado]
            this.setState({contactos: resultados, tarjetasBorradas: arrayBorrados})
            
            storeDataBorrado(arrayBorrados, '@TarjetasEliminadas')
          }

          //Guardar Contacto
          Save(characteridx){
            console.log( characteridx);
            let resultados =this.state.contactos.filter((contactos)=> {
              return( characteridx!== contactos.login.uuid )
            })
            let Favoritos = this.state.contactos.filter((contactos)=> {
              return( characteridx== contactos.login.uuid )
            })
            let arrayFavs = [...this.state.contactoFAV, ...Favoritos]
            this.setState({contactos: resultados, contactoFAV: arrayFavs})
            storeDataFav(arrayFavs, '@Favoritos')  
          }
            



          //  buscador
        filter(text){
          if (text.length > 0) {
            const personajes = this.state.contactos
            const filtrado = personajes.filter((item) =>{
            const itemData = item.name.first.toUpperCase()
            const lastName = item.name.last.toUpperCase()
            const age = item.dob.age.toString()
            const textData = text.toUpperCase()
            return (
            itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
              )})
            this.setState({
                contactos: filtrado,
                textoBuscado: text,
            })
          } else {
            this.setState({contactos:this.state.contactosOriginal}) 
          }
          console.log(text);

        }

        //metodo ver cards
          keyExtractor = (item , idx) =>idx.toString();
          
          renderItem = ({item}) => {
       
            {/*info en el return para simplificar el flatlist (destructuring)  */}

            return (
              <Cards
                  onDelete= {this.borrarItem.bind(this)}
                  onFav= {this.Save.bind(this)}
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
              />  )
          }

          render(){
            const { search } = this.state;
        
                return(
                    <SafeAreaView style={{flex: 1}}>
                      <StatusBar
                      barStyle='dark-content'                      
                      backgroundColor='#fca311'
                      />
                        <ScrollView >
        
                            <View style={styles.navbar}> 

                                
                                <Text style={{color: '#fca311', fontSize: 40, margin: 15, fontWeight: 'bold'}}> Dashboard </Text>

                            </View> 

                            {/* Input Buscador */}
                            <TextInput style={styles.barrasBusq} placeholder="Buscar aqui..." onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}  />


                            {/* Input y boton agregar tarjetas */}
                            <TextInput style={styles.barrasBusq} keyboardType="numeric" placeholder="Cuantas tarjetas desea agregar...?" onChangeText= {text => this.setState({agregadas: text})}  />

                          <TouchableOpacity  onPress={this.addCards.bind(this)}>
                            <Text style={{backgroundColor: 'white', margin: 10, borderRadius: 5, borderStyle: 'solid', borderWidth: 2, width: 100, fontWeight: 'bold', fontSize: 16, padding: 5}}> Agregar</Text>
                          </TouchableOpacity> 


                            <View>
        
                                       { this.state.activity 
                                             ? <ActivityIndicator color="green" 
                                                animating={this.state.activity} 
                                                size= "large"
                                                style={styles.containerActivity}
                                                style={styles.horizontal}/>
                                            : <FlatList data= {this.state.contactos} 
                                                 renderItem= {this.renderItem} 
                                                keyExtractor = {this.keyExtractor}
        
                                            ></FlatList>
                                        }
                                        
                              {/*Agregamos las cards  */}
          
                          
        
        
        
        
                            
                            </View>
        
                        </ScrollView>
                     </SafeAreaView>
        
                                )
        
                     }
        

   

                    }