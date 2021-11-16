import React, { useContext } from 'react'
import { StyledGamesCard, StyledGamesDescription, StyledGamesImg, StyledGamesTitle } from '../../pages/GamesList/styles/StyledGamesList';
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext/SearchContext';
import { StyledCommentsInfoCard } from '../Comments/styles/StyledComments';
import { SharedBar } from '../SharedComponents/styles/StyledSharedComponents';
export default function GamesListRender(props) {
    const { value } = useContext(SearchContext)
    const filtered = props.info.filter((element) => {
        return element.title.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <>
        <SharedBar>
        {(value==='')?<StyledGamesDescription>Todos os resultados ({filtered.length})</StyledGamesDescription>:
        <StyledGamesDescription>Resultados para "{value}" ({filtered.length})</StyledGamesDescription>}
        </SharedBar>
        {
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
        })}
        </>
    )
}
