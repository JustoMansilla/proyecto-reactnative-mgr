import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Screen_import extends Component {
    constructor (){
        super();
        this.state ={
           users: []
        }
    }

componentDidMount() {
    fetch('https://randomuser.me/api?results=10')
    .then ( response => response.json() )
    .then (result=>{
        this.setState({users: result.results});
})
}

async storeData(){ //antes de hacer stringify de state.users
try {
    const jsonUsers = JSON.stringify(this.state.users);
    await AsyncStorage.setItem("Users", jsonUsers);
    console.log("Datos almacenados");
} catch (error) {
    console.log(error);
        }
    }

//pasar values a flatslist

render(){
    const values = this.state.users.map (item =>
        <Text key={item.login.uuid}
        style={styles.text}>{item.name.first}</Text> )


return (
    <SafeAreaView>
        <Header/>
    <View>
        <Text>Mostrar tarjetas</Text>
        {values}
        <TouchableOpacity
            onPress={this.storeData.bind(this)}>
                <View><Text>Guardar Datos</Text></View>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
        )
    }
}

export { Screen_import}