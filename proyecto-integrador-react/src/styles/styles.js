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
        flex: 1,
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
    alignItems: 'center',
    height: '100%'
},
card: {
    backgroundColor: 'green',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: "95%",
    height: 400
},
text: {
    fontSize: 20,
    color:"black",
    margin: 5
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
        width: "80%",
        height: "80%",
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'blue',
        elevation: 30

        
    },

    textModal: {
        fontSize: 17,
        margin: 5 
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
        width: 200,
        height: 180,
        margin: 10,
        position: 'relative',
      },
      image: {
        width: 50,
        height: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'relative',
        alignSelf: 'center',
        margin: 10,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 0,
      },
      SearchBar: {
        height: 50,
        width:350,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#00b8a9',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: 'azure', 
  },
  containerActivity: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 250

  }
})




export {styles};