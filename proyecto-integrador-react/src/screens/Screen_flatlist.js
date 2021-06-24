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
            textoBuscar: " ",
            visible: 6,
            setItem: [],
            tarjetasBorradas: []
        }
    }
   
    componentDidMount(){
        //Fetch api
        getDataFetch()
        .then(resultado=> {
          this.setState({contactos : resultado, activity:false })
        })
    }

        
    //Ver mas tarjetas metodo    
    addCards(){
            verMasCards(this.state.vermas) 
            .then(resultado => {
              this.setState({contactos: [...this.state.contactos, ...resultado]})
            })
          }


        //metodo ver cards
          keyExtractor = (item , idx) =>idx.toString();
          
          renderItem = ({item}) => {
       
            {/*info en el return para simplificar el flatlist (destructuring)  */}

            return (
              <Cards
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
          
                            <TextInput keyboardType="numeric" className = "mas" placeholder="Cuantas tarjetas desea agregar...?" onChangeText= {text => this.setState({vermas: text})}  />
                            <TouchableOpacity  onPress={this.addCards.bind(this)}>
                            <Text> Agregar</Text>
                            </TouchableOpacity> 
                            </View>
        
                        </ScrollView>
                     </SafeAreaView>
        
                                )
        
                     }
        

   

                    }