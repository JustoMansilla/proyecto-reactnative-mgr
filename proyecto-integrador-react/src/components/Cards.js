import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button} from 'react-native'
import { styles } from '../styles/styles'
// import ModalComponent from '../components/Modal'
import { getDataFetch } from '../api/api';



export class Cards extends Component {

  
    constructor(){
        super();
        this.state = {
            // showModal: false,
            
        }
    }


    // showModal =  ()=> this.setState({isOpen: true});


      
    render(){
     

        return(
            <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
            
            <Text style={styles.text}>Nombre completo: {item.name.first} {item.name.last}</Text> 

            <Text style={styles.text}>E-mail: {item.email}</Text>

            <Text style={styles.text}>Nacimiento: {item.dob.date.substring(0, 10)} ({item.dob.age})</Text>


            <Button
                title="Ver mas datos!"
                color="white"
                backgroundColor="black"
                onPress={() => Alert.alert("Edad: " + item.dob.age, "Ciudad/Estado: " + item.location.city + "-" + item.location.state, "Pais: " + item.location.country, "Codigo Postal: " + item.location.postcode, "Fecha de Registro:: " + item.registered, "Codigo Postal: " + item.location.postcode, "Tel.: " + item.phone)}
            />
                
        </View>

      
        )
    };
    
}


