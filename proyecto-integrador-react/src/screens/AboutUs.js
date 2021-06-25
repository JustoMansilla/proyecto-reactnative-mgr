import React, {Component} from 'react'; 
import {styles} from '../styles/styles';
import {
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';

export class AboutUs extends Component { 
  render () {
      return(
        <SafeAreaView style={{flex: 1}}>
        <StatusBar
        barStyle='dark-content'                      
        backgroundColor='#fca311'
        />
          <ScrollView >

              <View style={styles.navbar}> 

                
                  <Text style={{color: '#fca311', fontSize: 40, margin: 15, fontWeight: 'bold'}}> About us </Text>

              </View> 

            <ScrollView>
                <View style={styles.container2}>

                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://media.giphy.com/media/izztvFoIOI0Cc/giphy.gif'}}></Image> 
                <Text style={styles.principalText}> Justo Mansilla </Text>
                <Text style={styles.secondaryText}>Buenos Aires, Argentina (21)</Text>
                <Text style={styles.secondaryText}> jmansilla@udesa.edu.ar</Text>

                </View>

                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://media.giphy.com/media/134DVXcD94sOWI/giphy.gif'}}></Image> 
                <Text style={styles.principalText}> Lucas Romero </Text>
                <Text style={styles.secondaryText}> Buenos Aires, Argentina (21)</Text>
                <Text style={styles.secondaryText}> lromeropeluffo@udesa.edu.ar</Text>

                </View>

                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://media.giphy.com/media/jR02MShfuA0Pw83pZs/giphy.gif'}}></Image> 
                <Text style={styles.principalText}> Lucas Groszmann</Text>
                <Text style={styles.secondaryText}> Buenos Aires, Argentina (22)</Text>
                <Text style={styles.secondaryText}> lgroszmann@udesa.edu.ar</Text>

                </View>
                </View>

            </ScrollView>

            </ScrollView>
          </SafeAreaView>

      )
   }
}

export default AboutUs;