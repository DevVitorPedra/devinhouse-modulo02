import axios from "axios";

  export default async function fetchingGames(setGamesList){
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        headers: {
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
          'x-rapidapi-key': 'a57976d07amshc41a6c736c88fd7p1c5fd4jsn677ba99c4864'
        }
      };
      
     await axios.request(options).then(function (response) {
      console.log(response.data);
      setGamesList(response.data)
  }).catch(function (error) {
      console.error(error);
  });
  }