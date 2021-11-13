import React from 'react'
import { StyledNewsLoading } from './styles/StyledNewsCard'

import { useState, useEffect } from 'react';
import fetchingNews from '../../utils/newsFetcher'
import SearchBar from '../../components/SearchBar/SearchBar';
import NewsRender from '../../components/NewsRender/NewsRender';
import { StyledCommentsH1, StyledCommentsInfoCard } from '../../components/Comments/styles/StyledComments';


export default function News() {

    const [news, setNews] = useState();

    useEffect(() => {
        fetchingNews(setNews)

    }, []);


    console.log(news)
    return (

        (!news) ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledCommentsH1>Loading...</StyledCommentsH1> <StyledNewsLoading /></div> : (
            <>
                <StyledCommentsInfoCard> <SearchBar search='' /></StyledCommentsInfoCard>
                <NewsRender info={news} />
            </>

        )

    )
}
