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
    width: 275,
    height: 400
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

modalContainer: {
    flex : 1,
    justifyContent:"center",
    alignItems:'center'
         
    },

    modal: {
        width: 100,
        height:200,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'blue',
        elevation: 30

        
    },

    textModal: {
        fontSize: 20 
    },

    closeButton: {
        fontSize: 20,
        position: 'absolute',
        right: 20,
        top:10
    },
    principalTextModal: {
        fontSize: 24,
        padding: 5,
        fontWeight: 'bold'
    
    },
    moreContainer: {
        marginLeft: 2,
        marginTop: 5,
    },
    btnMas: {
        color: '#5E72E4',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 10,
    },
    modalCloseBtn: {
        color: '#ffffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnModal : {
        position: 'absolute',
        bottom: 560, 
        left: 380,
    },
    modalCloseBtnContainer: {
        backgroundColor: '#6200E8',
        width: 20,
        height: 20,
        borderRadius: 15,
    
    }, 
    cardImageModal: {
        width: 210,
        height: 210,
        marginTop: 10,
        borderRadius: 10,
    }, 
    modalBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    modal: {
        width: "80%",
        height: "80%",
        backgroundColor: "#FEF5E7",
        alignItems:'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 30,
        shadowColor: '#000000',
    
    }, 

})




export {styles};