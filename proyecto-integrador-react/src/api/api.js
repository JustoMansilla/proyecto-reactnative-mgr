export async function getDataFetch() {
    try {
        let resultado = await fetch('https://randomuser.me/api?results=10');
        let json = await resultado.json();
        return json.results;
    } catch (error) {
        console.error(error);
        console.log("ERROR:" + error);
    }
    
} 