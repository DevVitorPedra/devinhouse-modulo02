import React, { useContext } from 'react'
import { StyledGamesCard, StyledGamesDescription, StyledGamesImg, StyledGamesTitle } from '../../pages/GamesList/styles/StyledGamesList';
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext/SearchContext';
export default function GamesListRender(props) {
    const { value } = useContext(SearchContext)
    const filtered = props.info.filter((element) => {
        return element.title.toLowerCase().includes(value.toLowerCase())
    })
    return (
        filtered.map((element) => {
            return (
                <StyledGamesCard key={element.id}>
                    <Link to={`/gamedetails/${element.id}`}>
                        <StyledGamesImg src={element.thumbnail} />
                        <StyledGamesTitle>{element.title}</StyledGamesTitle>
                        <StyledGamesDescription>{element.short_description}</StyledGamesDescription>
                    </Link>
                </StyledGamesCard>
            )
        })
    )
}
