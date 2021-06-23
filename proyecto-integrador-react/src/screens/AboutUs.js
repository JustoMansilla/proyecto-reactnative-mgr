import React, {Component} from 'react'; 
import {styles} from '../styles/styles';
import {Header} from '../components/Header';

import {
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export class AboutUs extends Component { 
  render () {
      return(
        <View style={styles.container}> 
            <Header
            openDrawer = {this.props.navigation.openDrawer}
            />
            <View style={styles.container}>

            <ScrollView>
                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://freepikpsd.com/media/2019/10/people-png-silhouette-walking-4-Transparent-Images.png'}}></Image> 
                <Text style={styles.principalText}> Justo Mansilla </Text>
                <Text style={styles.secondaryText}>Buenos Aires, Argentina (21)</Text>
                </View>

                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://freepikpsd.com/media/2019/10/people-png-silhouette-walking-4-Transparent-Images.png'}}></Image> 
                <Text style={styles.principalText}> Lucas Romero </Text>
                <Text style={styles.secondaryText}> Buenos Aires, Argentina (21)</Text>
                </View>

                <View style={styles.tarjetaAbout}>
                <Image style={styles.image} source={{uri: 'https://freepikpsd.com/media/2019/10/people-png-silhouette-walking-4-Transparent-Images.png'}}></Image> 
                <Text style={styles.principalText}> Lucas Groszmann</Text>
                <Text style={styles.secondaryText}> Buenos Aires, Argentina (22)</Text>
                </View>
            </ScrollView>

            </View>
        </View>

      )
   }
}

export default AboutUs;