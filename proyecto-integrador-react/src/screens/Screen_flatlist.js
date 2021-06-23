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
import { getDataFetch } from '../api/api';
import {Header} from '../components/Header';
import {styles} from '../styles/styles';
import {Cards} from '../components/Cards'




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
        //sete el estado de person con lo filtrado
          contactos: filtrado,
          textoBuscar: text,
      })
    } else {
      this.setState({
      // si no busco nada queda igual

        contactos:this.state.contactosOriginal}) 
    }
  }

    separator = () => {
        return ( 
            <View style={styles.separator}/>
        )
    }

    componentDidMount() {
        const results = getDataFetch()
        .then(results => {
            this.setState({contactos: results, activity: false});
        }
            )
        
    }

    keyExtractor = (item , idx) =>idx.toString();
    renderItem = ({item}) => {
    return (
        <Cards
        elemento = {item}
        onDelete = {this.borrarTarjeta.bind(this)}
        />  )
    }

async getData(){
    try{
        const resultado = await AsyncStorage.getItem("Users");
        this.setState({contactos: JSON.parse(resultado)});
        return resultado;
    }
    catch(error){
        console.log(error)
    }
} 

borrarTarjeta (idTarjeta){
    let nuevoArray = this.state.contactos.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta 
    });

    let tarjetasBorradas = this.state.contactos.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    this.setState({
      contactos: nuevoArray,
    
      tarjetasBorradas: tarjetasBorradas,
    })
    
  };

  async papeleraStorage(){
    try{
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        Alert.alert("Datos almacenados correctamente");
        console.log(this.state.tarjetasBorradas);
    }
    catch(error){
        console.log(error)
    }
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
                    <TextInput style={styles.SearchBar} placeholder="Search" onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}  />
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
                    </View>

                </ScrollView>
             </SafeAreaView>
             
                        )

             }

}


