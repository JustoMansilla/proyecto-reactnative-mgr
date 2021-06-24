export async function getDataFetch() {
    try {
        let resultado = await fetch('https://deelay.me/18/randomuser.me/api?results=10');
        let json = await resultado.json();
        return json.results;
    } catch (error) {
        console.error(error);
        console.log("ERROR:" + error);
    }
    
} 

export const verMasCards = async (cantidad)=> {
    try {
      const response = await fetch("https://deelay.me/18/randomuser.me/api/?results="+ cantidad);
      let agregarCards = await response.json();
      return agregarCards.results;
          

    } catch (error) {
      console.log(error);
      return [];
    }
   
    }