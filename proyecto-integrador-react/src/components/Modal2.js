import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import { FontAwesome } from '@expo/vector-icons';



class Modal2 extends Component {
  
    constructor(){
        super();
        this.state = {
        showModal: false,
       
        }
    }
    render(){
        const { img, firstName, lastName,Email,city,State,Street,StreetNum,Tel, Country, Age,RegisterDate, Date,id,key, Zipcode} = this.props;

        return(
        
            <Modal visible={this.props.AparezcaCerrado} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Image style={styles.image} source={{uri: img}}></Image>
                    <Text style= {styles.textModal}>{firstName} {lastName} </Text>
                    <Text style= {styles.textModal}>
                    <Text style={styles.textModal}> Email:  </Text>
                        {Email}</Text> 
                    <Text style={styles.textModal}>
                        <Text style={styles.textModal}>Fecha de nacimiento: </Text>
                        {Date.substring(0,10)} ({Age} años)
                    </Text> 

                    <Text style= {styles.textModal}>
                        <Text style={styles.textModal}>Calle y número: </Text>
                        {Street} N˚{StreetNum}
                    </Text>
                    <Text style= {styles.textModal}>
                        <Text style={styles.textModal}> Ciudad/Estado: </Text>
                        {city}/{State}
                    </Text>
                    <Text style= {styles.textModal}> 
                        <Text style={styles.textModal}> País: </Text>
                        {Country}
                    </Text>
                    <Text style= {styles.textModal}>
                        <Text style={styles.textModal}> Código postal: </Text>
                        {Zipcode}
                    </Text>
                    {/* <Text style= {styles.textModal}> 
                        <Text style= {styles.textModal}> Fecha de Registro: </Text>
                        {RegisterDate.substring(0, 10)} */}
                    {/* </Text> */}
                    <Text style= {styles.textModal}> 
                        <Text style= {styles.textModal}> Teléfono: </Text> 
                        {Tel}
                    </Text>

                
                    <TouchableOpacity onPress= {this.props.cerrarModal.bind(this)} style={styles.modalCloseBtn} > 
                        <Text>Cerrar modal</Text>
                    </TouchableOpacity>           
                
                    
                </View>
            </View>
        </Modal>         
        )
    };
    
}

export default Modal2;

