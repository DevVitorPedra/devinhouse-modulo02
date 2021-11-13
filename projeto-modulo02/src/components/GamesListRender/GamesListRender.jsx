import React from 'react'
import { StyledGamesCard, StyledGamesDescription, StyledGamesImg, StyledGamesTitle } from '../../pages/GamesList/styles/StyledGamesList';
import { Link } from 'react-router-dom';
export default function GamesListRender(props) {
    return (
        props.info.map((element)=>{
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
}
