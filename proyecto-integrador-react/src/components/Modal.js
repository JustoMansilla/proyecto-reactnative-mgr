// import React, {Component} from "react";
// import { 
//     View, 
//     SafeAreaView,
//     ScrollView,
//     TextInput,
//     Image,
//     Text,
//     Pressable,
//     Modal,
//     Button,
//     TouchableOpacity} 
//     from 'react-native'
// import { styles } from '../styles/styles'




// export class componenteModal extends Component {
  
//     constructor(){
//         super();
//         this.state = {
//      showModal: false
//         }
//     }
//     render(){
     

//         return(
//             <SafeAreaView>
//             <Pressable title="mostrar modal" onPress={() => this.setState({ShowModal: this.setState.showModal}) }>
//             <Modal visible={this.setState.showModal}
//             animationType={"slide"}
//             transparent={false}>
//                <View styles={styles.modalContainer}> 
//                <View style= {styles.modal}>
//                    <Text style= {styles.textModal}>Hola</Text> 
//                    <Text style={styles.closeButton} onPress= {( ) => this.setState({ showModal: false})}> X </Text>
//                    </View>
//                 </View>
//             </Modal>
//             </Pressable>
//             </SafeAreaView>
                                
//         )
//     };
    
// }

import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Modal2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Modal2;

