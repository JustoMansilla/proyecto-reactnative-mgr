export async function getDataFetch() {
    try {
        const resultado = await fetch('https://randomuser.me/api?results=10');
        const json = await resultado.json();
        return json.results;
    } catch (error) {
        console.log("ERROR:" + error);
    }
    
}