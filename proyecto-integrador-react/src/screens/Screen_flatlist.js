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
  ScrollView
  
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
            elemento = {item}/>
         
                
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
                        <Text style={styles.navbarDetails}> Dashboard </Text>            
                    </View> 

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
                 
                    
               
             </SafeAreaView>
                        )

             }

}


