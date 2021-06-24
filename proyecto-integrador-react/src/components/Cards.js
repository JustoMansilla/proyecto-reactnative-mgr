import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import {getDataFetch, verMasCards} from '../apiAsync/api'
import ComponenteModal from '../components/Modal'




export class Cards extends Component {

  
    constructor(){
        super();
        this.state = {
            showModal: false
            
        }
    }

    openModal =  ()=> this.setState({showModal: true});
    closeModal =  ()=> this.setState({showModal: false});
      
    render(){
     
    //Destructuring de las propiedades de la Card
    const { img, firstName, lastName,Email,city,State,Street,StreetNum,Tel, Country, Age, RegisterDate, Date,id,key} = this.props;

        return(
            <View style={styles.card}>

                <Image style={styles.image} source={{uri: img}}/>
                
                <Text style={styles.text}>Nombre completo: {firstName} {lastName}</Text> 

                <Text style={styles.text}>E-mail: {Email}</Text>

                <Text style={styles.text}>Nacimiento: {Date.substring(0, 10)} ({Age})</Text>

                <TouchableOpacity onPress= {this.openModal} style={styles.closeButton}>
                    <View >
                        <Text >Ver más</Text>
                    </View>                 
                </TouchableOpacity>

                <ComponenteModal
                  AparezcaCerrado={this.state.showModal}
                  Modal= {this.openModal.bind(this)}
                  cerrarModal= {this.closeModal.bind(this)}
                
                   img={img}
                   firstName={firstName}
                   lastName={lastName}
                   Email={Email}
                   city={city}
                   State={Street}
                   StreetNum={StreetNum}
                   Tel={Tel}
                   Country={Country}
                   Age={Age}
                   RegisterDate={RegisterDate} 
                   Date={Date}
                   id={id}
                  />
                  <Pressable style={styles.buttonBorrar} onPress= {this.props.onDelete.bind(this,id)}>
                 <Text styles={styles.text}>X</Text>
                 </Pressable>
                 <Pressable style={styles.buttonBorrar} onPress= {this.props.onFav.bind(this,id)}>
                <Text>
                    FAV
                </Text>
                 </Pressable>

            </View>



      
        )
    };
    
}



  