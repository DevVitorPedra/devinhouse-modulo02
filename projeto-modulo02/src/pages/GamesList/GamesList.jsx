import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { StyledNewsLoading } from '../News/styles/StyledNewsCard';
import { StyledGamesCard, StyledGamesDescription, StyledGamesImg, StyledGamesTitle } from './styles/StyledGamesList';
import { Link } from 'react-router-dom';

export default function GamesList() {
    const [games, setGames] = useState();
    useEffect(() => {
      fetchingGames()
    }, []);



const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': 'a57976d07amshc41a6c736c88fd7p1c5fd4jsn677ba99c4864'
  }
};

const fetchingGames = async() =>{
   await axios.request(options).then(function (response) {
	console.log(response.data);
    setGames(response.data)
}).catch(function (error) {
	console.error(error);
});
}
console.log(games)
    return (
        (!games)?<StyledNewsLoading/>:(
            games.map((element,idx)=>{
                return (
                <StyledGamesCard key={idx+1}>
                    <Link to={"/gamedetails/:id"}>
                    <StyledGamesImg src={element.thumbnail}/>
                    <StyledGamesTitle>{element.title}</StyledGamesTitle>
                    <StyledGamesDescription>{element.short_description}</StyledGamesDescription>
                    </Link>
                </StyledGamesCard>
                )    
            })
        
        )
    )
}
