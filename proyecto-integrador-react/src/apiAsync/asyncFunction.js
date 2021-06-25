
import AsyncStorage from '@react-native-async-storage/async-storage';

//data borrado
export const storeDataBorrado=async (value,key) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
    }
  }


export const getDataBorrado=async (key)=>{
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
    }
    }    

//data fav
export const storeDataFav=async (value,key) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
      }
    }



export const getDataFav=async (key)=>{
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
        }
        }


//data mas
export const getDataVerMas=async (key)=>{
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
        }
        }
