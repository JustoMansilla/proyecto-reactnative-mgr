import React, {Component} from 'react'; 
import {
    View, Image,Text,Pressable, Modal, Button, TouchableOpacity
} from 'react-native';
import {styles} from '../styles/styles';
import ComponenteModal from './Modal';

class TarjetaFavorita extends Component {
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
    const { img, firstName, lastName,Email,city,State,Street,StreetNum,Tel, Country, Age,  Date,id,key, RegisterDate, Zipcode} = this.props;

        return(
            <View style={styles.card}>

                <Image style={styles.image} source={{uri: img}}/>
                
                <View style={styles.contenedorCard}>

                <Text style={styles.textContenedorCard}>Nombre completo: {firstName} {lastName}</Text> 

                <Text style={styles.textContenedorCard}>E-mail: {Email}</Text>

                <Text style={styles.textContenedorCard}>Nacimiento: {Date.substring(0, 10)} ({Age})</Text>

                </View>

                

                <TouchableOpacity onPress= {this.openModal} style={styles.posicionBtnCerrar}>
                    <View style={styles.btnVerMas}>
                        <Text style={{padding: 10, fontWeight: 'bold'}} >Ver más</Text>
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
                   Zipcode={Zipcode}
                  />
                  
                <Pressable style={styles.buttonBorrar} onPress= {this.props.onDelete.bind(this,id)}>
                    <Text style={{padding: 10, fontWeight: 'bold'}}>X</Text>
                </Pressable>

            </View>
        )
    }
}

export default TarjetaFavorita;