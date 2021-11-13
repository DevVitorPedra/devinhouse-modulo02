import React from 'react'
import { StyledNewsLoading, StyledLink, StyledNewsCard, StyledNewsDescription, StyledNewsTitle, StyledNewsImg } from './styles/StyledNewsCard'
import { useState, useEffect } from 'react';
import fetchingNews from '../../utils/newsFetcher'


export default function News() {
    const [news, setNews] = useState();

    useEffect(() => {
        fetchingNews(setNews)

    }, []);
  
    
    console.log(news)
    return (
        
        (!news) ?<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Loading...</h1> <StyledNewsLoading /></div> :  (
            
            news.map((element, idx) => {
                
                return (
                    <StyledLink key={idx + 1} href={element.article_url} target="_blank">
                        <StyledNewsCard >
                            <StyledNewsImg src={element.thumbnail} />
                            <div>
                                <StyledNewsTitle>{element.title}</StyledNewsTitle>
                                <StyledNewsDescription>{element.short_description}</StyledNewsDescription>
                            </div>
                        </StyledNewsCard>
                    </StyledLink>
                )
            })
            
        )
        
    )
}
/**
 * article_content: "<p><img class=\"aligncenter size-large\" src=\"../file/2021/11/dysterra-beta-2-709x418.jpg\" alt=\"Dysterra Beta 2\" width=\"709\" height=\"418\" /></p>\r\n<p>On November 15, Kakao Games and developer Reality MagiQ will kick off the second beta test for their upcoming futuristic game Dysterra. Featuring a variety of game elements, Dysterra is a large-scale online survival crafting game in which players fight over a highly-desired mineral, Terrasite. Features of the game include building bases and obtaining landmarks in various regions that allow them to control the climate – meaning they can bring on their own natural disasters to mess with other players.</p>\r\n<p>Players also participate in FPS combat using both melee weapons and firearms. To obtain better weapons, they’ll also need to build research facilities to produce them, and they’ll definitely want the better weapons as Terrasite is not the only thing they’ll be fighting over. There are also valuable supply drops necessary to survival.</p>\r\n<p>As noted on Steam, Dysterra is still a work in progress and has no predicted launch date. That said, the game is listed on Steam and those wanting to participate in testing will need to <a title=\"Dysterra Steam Page\" href=\"https://store.steampowered.com/app/1527890/Dysterra/\" target=\"_blank\" rel=\"noopener\">request access via the game’s page</a>. The upcoming beta test will run for seven days, from November 15 to November 22.</p>\r\n<p><iframe src=\"https://www.youtube.com/embed/lgm65hAbpGk\" title=\"YouTube video player\" width=\"709\" height=\"418\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"></iframe></p>"
article_url: "https://www.mmobomb.com/news/kakao-games-announces-second-beta-test-sci-fi-game-dysterra"
id: 130662
main_image: "https://www.mmobomb.com/file/2021/11/dysterra-beta-2.jpg"
short_description: "Signups are available now if you have a passion for crafting."
thumbnail: "https://www.mmobomb.com/file/2021/11/dysterra-beta-2-218x150.jpg"
title: "Kakao Games Announces Second Beta Test For Sci-Fi Game Dysterra"
 */