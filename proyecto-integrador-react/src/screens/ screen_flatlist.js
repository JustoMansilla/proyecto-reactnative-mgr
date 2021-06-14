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
} from 'react-native';
import { getDataFetch } from '../api/api';

export class Screen_flatlist extends Component{
    constructor(){
        super()
        this.state = {
            contactos: []
        }
    }
    
    
    
        keyExtractor = (item , idx) =>idx.toString();
        renderItem = ({item}) => {
        return (
            //traer todo lo que queramos de la api
                    <Text>{item.name.first}</Text>,
                    <Text>{item.name.last}</Text>

                )
    }

    componentDidMount() {
        const results = getDataFetch()
        .then(results => {
            this.setState({contactos: results});
        }
            )
        
    }
   

    render(){
    
                return(
                            <View>
                                    <FlatList data= {this.state.contactos} 
                                    renderItem= {this.renderItem} 
                                    keyExtractor = {this.keyExtractor}
                                    ></FlatList>
                            </View>
                        )

             }

}

// poner todo el css