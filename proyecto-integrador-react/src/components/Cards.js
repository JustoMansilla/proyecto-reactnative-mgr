import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import {getDataFetch} from '../api/api'





export class Cards extends Component {

  
    constructor(){
        super();
        this.state = {
            showModal: false,
            
        }
    }

//     keyExtractor = (item , idx) =>idx.toString();
//     renderItem = ({item}) => {
//     return (

      
//         <Modal2
//         elemento = {item}
//         onDelete={}/>
     
            
//             )
// }
   
    


      
    render(){
     
        

        return(
            <View style={styles.card}>
            <Image style={styles.image} source={{uri: this.props.elemento.picture.thumbnail}}/>
            
            <Text style={styles.text}>Nombre completo: {this.props.elemento.name.first} {this.props.elemento.name.last}</Text> 

            <Text style={styles.text}>E-mail: {this.props.elemento.email}</Text>

            <Text style={styles.text}>Nacimiento: {this.props.elemento.dob.date.substring(0, 10)} ({this.props.elemento.dob.age})</Text>

            <TouchableOpacity onPress= {() => this.setState({showModal: true})} style={styles.closeButton}>
                    <View style={styles.moreContainer}>
                        <Text  style={styles.btnDescripcion}>Ver más</Text>
                       
                    </View>
            </TouchableOpacity> 


            {/* <Button title = "Delete" onPress={this.props.onDelete.bind(this, this.props.elemento.id)}></Button> */}

            {/* <Modal2/>  */}

            <Modal visible={this.state.showModal} animationType="fade" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Image style={styles.image} source={{uri: this.props.elemento.picture.large}}></Image>
                            <Text style= {styles.textModal}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
                            <Text style= {styles.textModal}>
                            <Text style={styles.textModal}> Email:  </Text>
                                {this.props.elemento.email}</Text> 
                            <Text style={styles.textModal}>
                                <Text style={styles.textModal}>Fecha de nacimiento: </Text>
                                {this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)
                            </Text> 

                            <Text style= {styles.textModal}>
                                <Text style={styles.textModal}>Calle y número: </Text>
                                {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}
                            </Text>
                            <Text style= {styles.textModal}>
                                <Text style={styles.textModal}> Ciudad/Estado: </Text>
                                {this.props.elemento.location.city}/{this.props.elemento.location.state}
                            </Text>
                            <Text style= {styles.textModal}> 
                                <Text style={styles.textModal}> País: </Text>
                                {this.props.elemento.location.country}
                            </Text>
                            <Text style= {styles.textModal}>
                                <Text style={styles.textModal}> Código postal: </Text>
                                {this.props.elemento.location.postcode}
                            </Text>
                            <Text style= {styles.textModal}> 
                                <Text style= {styles.textModal}> Fecha de Registro: </Text>
                                {this.props.elemento.registered.date.substring(0, 10)}
                            </Text>
                            <Text style= {styles.textModal}> 
                                <Text style= {styles.textModal}> Teléfono: </Text> 
                                {this.props.elemento.phone}
                            </Text>

                            <TouchableOpacity style={styles.closeButton} onPress= {() => this.setState({showModal: false})}>
                                <View style={styles.modalCloseBtnContainer}>
                                    <Text style={styles.textStyle}>X</Text>
                                </View>
                            </TouchableOpacity>

                            {/* <Text style= {styles.textModal}> 
                                <Text style= {styles.textModal}> {this.state.comentario} </Text>                            
                            </Text> */}

                            {/* <TextInput style={styles.InputCantUsuarios} placeholder='Ingresar comentario' multiline numberOfLines={2}></TextInput> */}

                            {/* <TouchableOpacity>
                                <View style={styles.btnComentar}>
                                    <Pressable>
                                        <Text style={styles.modalBtnText}>COMENTAR</Text>
                                    </Pressable>
                                </View>
                            </TouchableOpacity> */}

                            
                        </View>
                    </View>
                </Modal>
                <Button title = "BORRAR" onPress={this.props.onDelete.bind(this, this.props.elemento.id)}></Button>
        </View>
    
      
        )
    };
    
}



  