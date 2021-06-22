import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button} from 'react-native'
import { styles } from '../styles/styles'
import Modal2 from '../components/Modal'
import { getDataFetch } from '../api/api';



export class Cards extends Component {

  
    constructor(){
        super();
        this.state = {
            showModal: false,
            
        }
    }

    keyExtractor = (item , idx) =>idx.toString();
    renderItem = ({item}) => {
    return (

      
        <Modal2
        elemento = {item}/>
     
            
            )
}
   
    


      
    render(){
     

        return(
            <View style={styles.card}>
            <Image style={styles.image} source={{uri: this.props.elemento.picture.thumbnail}}/>
            
            <Text style={styles.text}>Nombre completo: {this.props.elemento.name.first} {this.props.elemento.name.last}</Text> 

            <Text style={styles.text}>E-mail: {this.props.elemento.email}</Text>

            <Text style={styles.text}>Nacimiento: {this.props.elemento.dob.date.substring(0, 10)} ({this.props.elemento.dob.age})</Text>
            <Modal2/>
                
        </View>
    
      
        )
    };
    
}



  