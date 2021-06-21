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
import {Header} from '../components/Header';
import {styles} from '../styles/styles';
import {Cards} from '../components/Cards'




export class Screen_flatlist extends Component{
    constructor(){
        super()
        this.state = {
            contactos: [],
            activity: true,
           
        }
    }
    
    
    
        keyExtractor = (item , idx) =>idx.toString();
        renderItem = ({item}) => {
        return (

          
            <Cards
            item = {item}/>
         
                // <View style={styles.card}>
                //     <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
                    
                //     <Text style={styles.text}>Nombre completo: {item.name.first} {item.name.last}</Text> 

                //     <Text style={styles.text}>E-mail: {item.email}</Text>

                //     <Text style={styles.text}>Nacimiento: {item.dob.date.substring(0, 10)} ({item.dob.age})</Text>


                //     <Button
                //         title="Ver mas datos!"
                //         color="white"
                //         backgroundColor="black"
                //         onPress={() => Alert.alert("Edad: " + item.dob.age, "Ciudad/Estado: " + item.location.city + "-" + item.location.state, "Pais: " + item.location.country, "Codigo Postal: " + item.location.postcode, "Fecha de Registro:: " + item.registered, "Codigo Postal: " + item.location.postcode, "Tel.: " + item.phone)}
                //     />
                        
                // </View>
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
                    <SafeAreaView>
                    <View>
                        
                   
                        <View style={styles.navbar}> 
            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress= { () => this.props.navigation.openDrawer()}>
              <View style={styles.navbarButton}>
                <Text>E</Text>
              </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.navbarDetails}> Dashboards </Text>            
              </View> 

                        <View>
                        </View>

                            <View >
                               { this.state.activity 
                                     ? <ActivityIndicator color="green" 
                                        animating={this.state.activity} 
                                        size= "large"/>
                                    : <FlatList data= {this.state.contactos} 
                                         renderItem= {this.renderItem} 
                                        keyExtractor = {this.keyExtractor}
                                        
                                    ></FlatList>
                                }
                            </View>
                            
                    </View>
                 
                    
                
                    </SafeAreaView>
                        )

             }

}


