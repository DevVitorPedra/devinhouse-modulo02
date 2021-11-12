import axios from "axios";
export default async function getDetails(id,setGameDetails){


    const options = {
        method: 'GET',
        url: `https://mmo-games.p.rapidapi.com/game`,
        params: { id: `${id}` },
        headers: {
            'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
            'x-rapidapi-key': 'a57976d07amshc41a6c736c88fd7p1c5fd4jsn677ba99c4864'
        }
    };

    await axios.request(options).then(function (response) {
        console.log(response.data);
        setGameDetails(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}
