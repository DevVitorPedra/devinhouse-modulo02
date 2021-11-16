import React, { useState, useEffect } from 'react'
import { SharedBar,SharedH1 } from '../../components/SharedComponents/styles/StyledSharedComponents';
import fetchingGames from '../../utils/gamesListFetcher';
import SearchBar from '../../components/SearchBar/SearchBar';
import { StyledLoading } from '../../components/SharedComponents/styles/StyledSharedComponents';
import GamesListRender from '../../components/GamesListRender/GamesListRender';

export default function GamesList() {
    const [games, setGames] = useState();
    useEffect(() => {
        fetchingGames(setGames)
    }, []);


    console.log(games)
    return (
        (!games) ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SharedH1>Carregando...</SharedH1>
            <StyledLoading />
        </div> : (
            <>
                <SharedBar> <SearchBar search='' /></SharedBar>

                <GamesListRender info={games} />
            </>

        )
    )
}

//TODO numero de itens na tela
