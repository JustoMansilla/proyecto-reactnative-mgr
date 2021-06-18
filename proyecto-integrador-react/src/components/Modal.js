import React, {Component} from "react";
import { 
    View, 
    SafeAreaView,
    ScrollView,
    TextInput,
    Image,
    Text,
    Pressable,
    Modal,
    Button,
    TouchableOpacity} 
    from 'react-native'
import { styles } from '../styles/styles'




class ModalComponent extends Component {
  
    constructor(){
        super();
        this.state = {
     showModal: false
        }
    }
    render(){
     

        return(
            <SafeAreaView>
            <Button title="mostrar modal" onPress={() => this.setState({ShowModal: this.setState.showModal}) }>
            <Modal visible={this.setState.showModal}
            animationType={"slide"}
            transparent={false}>
               <View styles={styles.modalContainer}> 
               <View style= {styles.modal}>
                   <Text style= {styles.textModal}>Hola</Text> 
                   <Text style={styles.closeButton} onPress= {( ) => this.setState({ showModal: false})}> X </Text>
                   </View>
                </View>
            </Modal>
            </Button>
            </SafeAreaView>
                                
        )
    };
    
}

export default ModalComponent;