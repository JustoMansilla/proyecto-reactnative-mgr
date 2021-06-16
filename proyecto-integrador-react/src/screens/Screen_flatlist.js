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
  StyleSheet
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

                <View style={styles.card}>
                    <Text style={styles.text}>{item.name.first}</Text>
                    <Text style={styles.text}>{item.name.last}</Text>
                </View>
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
                            <View >
                                    <FlatList data= {this.state.contactos} 
                                    renderItem= {this.renderItem} 
                                    keyExtractor = {this.keyExtractor}
                                    ></FlatList>
                            </View>
                        )

             }

}

// poner todo el css

const styles = StyleSheet.create({
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
        width: 150,
        height: 100
    },
    text: {
        fontSize: 20
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
})