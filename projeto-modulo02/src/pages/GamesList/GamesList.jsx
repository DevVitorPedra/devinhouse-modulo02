import React, { useState, useEffect } from 'react'
import { StyledNewsLoading } from '../News/styles/StyledNewsCard';
import fetchingGames from '../../utils/gamesListFetcher';
import SearchBar from '../../components/SearchBar/SearchBar';
import GamesListRender from '../../components/GamesListRender/GamesListRender';
import { StyledCommentsH1, StyledCommentsInfoCard } from '../../components/Comments/styles/StyledComments';
export default function GamesList() {
    const [games, setGames] = useState();
    useEffect(() => {
        fetchingGames(setGames)
    }, []);


    console.log(games)
    return (
        (!games) ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledCommentsH1>Loading...</StyledCommentsH1>
            <StyledNewsLoading />
        </div> : (
            <>
                <StyledCommentsInfoCard> <SearchBar search='' /></StyledCommentsInfoCard>

                <GamesListRender info={games} />
            </>

        )
    )
}

//TODO numero de itens na tela
