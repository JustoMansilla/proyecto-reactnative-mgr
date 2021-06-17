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
} from 'react-native';
import { getDataFetch } from '../api/api';

export class Screen_flatlist extends Component{
    constructor(){
        super()
        this.state = {
            contactos: [],
            activity: true
        }
    }
    
    
    
        keyExtractor = (item , idx) =>idx.toString();
        renderItem = ({item}) => {
        return (

          
                <View style={styles.card}>
                    <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
                    <Text style={styles.text}>{item.name.first}</Text>
                    <Text style={styles.text}>{item.name.last}</Text>

                    <Button
                        title="Ver mas datos!"
                        color="white"
                        backgroundColor="black"
                        onPress={() => Alert.alert("Edad: " + item.dob.age, "Ciudad/Estado: " + item.location.city + "-" + item.location.state, "Pais: " + item.location.country, "Codigo Postal: " + item.location.postcode, "Fecha de Registro:: " + item.registered, "Codigo Postal: " + item.location.postcode, "Tel.: " + item.phone)}
                    />
                        
                </View>
                )
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
   

    render(){
    
                return(
                    <View>
                        <View style={styles.headerBorder}>
                            <Text>Dashboard</Text>
                        </View>

                            <View >
                               { this.state.activity 
                                     ? <ActivityIndicator color="green" 
                                        animating={this.state.activity} 
                                        size= "large"/>
                                    :  <FlatList data= {this.state.contactos} 
                                         renderItem= {this.renderItem} 
                                        keyExtractor = {this.keyExtractor}
                                         numColumns={2}
                                    ></FlatList>
                                }
                            </View>
                    </View>
                        )

             }

}

// poner todo el css

const styles = StyleSheet.create({
    headerBorder:{
flex:1,
backgroundColor: "#39ff14",
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'green',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 5,
        padding: 5,
        width: 175,
        height: 200
    },
    text: {
        fontSize: 20
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    image: {
        width: 50,
        height: 50
    },
    textVerMas: {
        fontSize: 15,
        color: 'white'
    }
})