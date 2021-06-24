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
} from 'react-native';
import { getDataFetch, verMasCards } from '../apiAsync/api';
import {styles} from '../styles/styles';
import {Cards} from '../components/Cards';
import {getDataBorrado, storeDataBorrado,storeDataFav,getDataFav,getDataVerMas} from "../apiAsync/asyncFunction"




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
          this.setState({contactos : resultado, activity:false })
        })
        //get Borrado
        getDataBorrado('@tarjetaEliminada')
        .then(resultadoBorrado=> {
          this.setState({tarjetasBorradas : resultadoBorrado })
        })
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
              //  guardo en var resultados el filtro de person
              return( idx!== contactos.login.uuid)
              //comparo idx con el uuid
            })
            let Borrado = this.state.contactos.filter((contactos)=> {
                //   guardo en var borraos el filtro de person  
              return( idx== contactos.login.uuid )
            })
            // seteo el estado 
            let arrayBorrados = [...this.state.tarjetasBorradas, ...Borrado]
            this.setState({contactos: resultados, tarjetasBorradas: arrayBorrados})
            
            storeDataBorrado(arrayBorrados, '@tarjetaEliminadas')
          }

          //Guardar Contacto
          Save(characteridx){
            console.log( characteridx);
            let resultados =this.state.contactos.filter((contactos)=> {
              //  guardo en var resultados el filtro de person
              return( characteridx!== contactos.login.uuid )
              //comparo idx con el uuid
            })
            let Favoritos = this.state.contactos.filter((contactos)=> {
                //   guardo en var borraos el filtro de person  
              return( characteridx== contactos.login.uuid )
            })
            // seteo el estado 
            let arrayFavs = [...this.state.contactoFAV, ...Favoritos]
            this.setState({contactos: resultados, contactoFAV: arrayFavs})
            storeDataFav(arrayFavs, '@Favoritos')  
          }
            



          //  buscador
        filter(text){
          if (text.length > 0) {
              // var text = target.value
            const personajes = this.state.contactos
            const filtrado = personajes.filter((item) =>{
            const itemData = item.name.first.toUpperCase()
            const lastName = item.name.last.toUpperCase()
            const age = item.dob.age.toString()
            const textData = text.toUpperCase()
            return (
            itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
                  // comparo name o last name o age con el valor ingresado .
              )})
            this.setState({
                contactos: filtrado,
                textoBuscado: text,
            })
          } else {
            this.setState({contactos:this.state.personOriginal}) 
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
                        <ScrollView style={{flex: 1}}>
        
                            <View style={styles.navbar}> 
                                <View style={styles.navbarContainer}>
                                    <TouchableOpacity onPress= { () => this.props.navigation.openDrawer()}>
                                        <View style={styles.navbarButton}>
                                            <Text>E</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.navbarDetails}> Dashboard </Text>
                            </View> 

                            <TextInput style={styles.SearchBar} placeholder="Search" onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}  />


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
          
                            <TextInput keyboardType="numeric" className = "mas" placeholder="Cuantas tarjetas desea agregar...?" onChangeText= {text => this.setState({agregadas: text})}  />
                            <TouchableOpacity  onPress={this.addCards.bind(this)}>
                            <Text> Agregar</Text>
                            </TouchableOpacity> 
                            </View>
        
                        </ScrollView>
                     </SafeAreaView>
        
                                )
        
                     }
        

   

                    }