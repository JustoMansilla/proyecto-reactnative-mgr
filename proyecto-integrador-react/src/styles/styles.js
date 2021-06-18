import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
    navbarButton: {
        width: 50,
        height: 40,
        backgroundColor: '#1C265C',
    
        alignItems: 'center',
        justifyContent: 'center',
        right: 160,
        top: 20,
    },
    navbarText: {
        fontSize: 30,
    
    }, 
    navbarContainer: {
        position: 'absolute'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C265C',
        width: '100%',
        height: '10%',
        
        
    }, 
    navbarDetails: {
        display: 'flex',
       color: '#05BC97',
       fontSize: 30, 
       margin: 15, 
       fontWeight: 'bold'
   },



})


export {styles};