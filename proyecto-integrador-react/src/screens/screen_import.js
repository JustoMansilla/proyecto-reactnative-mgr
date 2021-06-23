import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Screen_import extends Component {
    constructor (){
        super();
        this.state ={
           usuarios: []
        }
    }

componentDidMount() {
    fetch('https://randomuser.me/api?results=15')
    .then ( response => response.json() )
    .then (result=>{
        this.setState({usuarios: result.results});
})
}

async guardarDatos(){ 
try {
    const jsonUsers = JSON.stringify(this.state.usuarios);
    await AsyncStorage.setItem("Users", jsonUsers);
    Alert.alert("Datos guardados");
} catch (error) {
    console.log(error);
        }
    }


    render(){
        const values = this.state.usuarios.map (item =>
                <View  key={item.login.uuid}>
                        <Text style={styles.text}>{item.name.first} {item.name.last}</Text>
                </View> 
        )

        return (
            <SafeAreaView>
                <ScrollView>
                <Header/>
            <View>
                <View style={{backgroundColor: 'white', alignItems: 'center', borderRadius: '10%', margin: 30}}>
                <Text style={{fontSize: 30, alignItems: 'center', margin: 10, textAlign: 'center'}}>Tarjetas importadas del fetch</Text>
                </View>

                {values}

                <TouchableOpacity
                    onPress={this.guardarDatos.bind(this)}
                    style={{backgroundColor: 'white', alignItems: 'center', borderRadius: '10%', margin: 30}}>
                        <Text style={{fontSize: 30, margin: 10}}>Guardar Datos</Text>
                </TouchableOpacity>
            </View>
                </ScrollView>
            </SafeAreaView>
                )
    }
}

export { Screen_import}