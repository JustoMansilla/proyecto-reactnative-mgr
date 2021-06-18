import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
    navbarButton: {
        width: 50,
        height: 40,
        backgroundColor: 'red',
    
        alignItems: 'center',
        justifyContent: 'center',
        right: 160,
        top: 20,
    },
    navbarText: {
        fontSize: 30,
        color: 'red'
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


   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
card: {
    backgroundColor: 'green',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 175,
    height: 200
},
text: {
    fontSize: 20,
    color:"black"
},
separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
},
image: {
    width: 50,
    height: 50
},
textVerMas: {
    fontSize: 15,
    color: 'white'
},

})


export {styles};