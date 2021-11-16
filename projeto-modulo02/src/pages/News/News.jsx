import React from 'react'
import { SharedH1,SharedBar, StyledLoading } from '../../components/SharedComponents/styles/StyledSharedComponents'
import { useState, useEffect } from 'react';
import fetchingNews from '../../utils/newsFetcher'
import SearchBar from '../../components/SearchBar/SearchBar';
import NewsRender from '../../components/NewsRender/NewsRender';

export default function News() {

    const [news, setNews] = useState();

    useEffect(() => {
        fetchingNews(setNews)

    }, []);


   
    return (

        (!news) ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SharedH1>Carregando...</SharedH1> <StyledLoading /></div> : (
            <>
                <SharedBar> 
                    <SearchBar search='' />
                    </SharedBar>
                <NewsRender info={news} />
            </>

        )

    )
}
