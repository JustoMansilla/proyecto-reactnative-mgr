import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import {getDataFetch, verMasCards} from '../apiAsync/api'




export class Cards extends Component {

  
    constructor(){
        super();
        this.state = {
            showModal: false,
            
        }
    }
      
    render(){
     
        return(
            <View>
                <Text>
                    HOla
                </Text>
            </View>
    
      
        )
    };
    
}



  