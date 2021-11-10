import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/latestnews',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': 'a57976d07amshc41a6c736c88fd7p1c5fd4jsn677ba99c4864'
  }
};

export const fetchingNews = async()=>{
  await axios.request(options).then(function (response) {
console.log(response.data)
return response.data
}).catch(function (error) {
	console.error(error);
});
} 

