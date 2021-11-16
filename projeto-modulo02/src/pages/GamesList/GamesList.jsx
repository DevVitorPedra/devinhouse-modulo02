import React, { useState, useEffect } from 'react'
import { StyledLoading } from '../../components/SharedComponents/styles/StyledSharedComponents';
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
            <StyledCommentsH1>Carregando...</StyledCommentsH1>
            <StyledLoading />
        </div> : (
            <>
                <StyledCommentsInfoCard> <SearchBar search='' /></StyledCommentsInfoCard>

                <GamesListRender info={games} />
            </>

        )
    )
}

//TODO numero de itens na tela
