import React, { useState,useEffect } from 'react'
import { StyledNewsLoading } from '../News/styles/StyledNewsCard';
import { StyledGamesCard, StyledGamesDescription, StyledGamesImg, StyledGamesTitle } from './styles/StyledGamesList';
import { Link } from 'react-router-dom';
import fetchingGames from '../../utils/gamesListFetcher';
export default function GamesList() {
    const [games, setGames] = useState();
    useEffect(() => {
      fetchingGames(setGames)
    }, []);


console.log(games)
    return (
        (!games)?<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>Loading...</h1>
        <StyledNewsLoading/>
        </div>:(
            games.map((element)=>{
                return (
                <StyledGamesCard key={element.id}>
                    <Link to={`/gamedetails/${element.id}`}>
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
