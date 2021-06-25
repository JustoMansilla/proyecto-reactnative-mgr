import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({

 // #000000 , #14213d , #fca311 , #e5e5e5 , #ffffff
  

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
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
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
    alignItems: 'center',
    height: '100%'
    },
    card: {
        backgroundColor: '#fca311',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 4,
        margin: 10,
        padding: 5,
        width: "95%",
        height: 500
    },
    text: {
        fontSize: 20,
        color:"black",
        margin: 5,
        fontWeight: '600'
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textVerMas: {
        fontSize: 15,
        color: 'white'
    },

    modalContainer: {
        flex : 1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: '#fca311',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 4,
        margin: 20,
        padding: 5,
        width: "85%",
        height: 300,
        marginLeft: 30
            
        },

        modal: {
           backgroundColor: 'white',
           borderRadius: 10,

            
        },

        textModal: {
            fontSize: 17,
            margin: 5 
        },

        posicionBtnCerrar: {
            fontSize: 20,
            position: 'absolute',
            right: 5,
            top: 35
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
          },
          tarjetaAbout: {
            backgroundColor: '#ffffff',
            borderRadius: 10,
            width: 250,
            height: 280,
            margin: 20,
            position: 'relative',
            borderStyle: 'solid',
            borderWidth: 2
          },
          image: {
            width: 120,
            height: 120,
            position: 'relative',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 10,
            borderWidth: 2,
          },
        scrollView: {
            backgroundColor: 'white',
            marginHorizontal: 0,
          },
          barrasBusq: {
            height: 50,
            width:350,
            margin: 10,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 5,
            borderColor: '#000000',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 3,
            borderRadius: 10,
            backgroundColor: 'white', 
            marginLeft: 13,
      },
      containerActivity: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 250
      },
      btnCerrar:{
            width: 40,
            alignItems: "center",
            borderWidth: 1,
            paddingLeft: 10,
            margin: 5,
            borderColor: 'black',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 3,
            borderRadius: 10,
            backgroundColor: 'black', 
      },
      btnSelec:{
        margin: 10,
        color: 'white',
      },
      contenedorCard:{
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        borderWidth: 1,
        borderStyle: 'solid'
      },
      textContenedorCard: {
        fontSize: 17,
        fontWeight: '600',
        margin: 10,
      },
      btnVerMas:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1
      },
      buttonBorrar:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        width: '16%',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1
      },
      buttonFav:{
        backgroundColor: 'white',
        color: '#fca311',
        margin: 10,
        borderRadius: 5,
        width: '16%',
        borderStyle: 'solid',
        borderWidth: 1
      },
      textAbout:{
        fontSize: 15,
        margin: 10,
      },
      vaciarPapelera:{
        backgroundColor: 'white',
        width: '70%',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 3,
        marginLeft: '15%'

      },
      principalText: {
        fontSize: 22,
        color: '#000000',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 5,
        fontWeight: 'bold',
    },
    secondaryText: {
    fontSize: 14,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
}, 
    })




export {styles};


// #000000 , #14213d , #fca311 , #e5e5e5 , #ffffff
