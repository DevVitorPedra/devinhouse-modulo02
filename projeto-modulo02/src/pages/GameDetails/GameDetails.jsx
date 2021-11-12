import React, { useState, useEffect,useReducer } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { StyledGameDetailsCard, StyledGameDetailsDivCard, StyledGameDetailsH3, StyledGamedetailsImg, StyledGameDetailsP, StyledGameDetailsReq, StyledGameDetailsSubtitles, StyledGameDetailsTitle } from './styles/StyledGameDetails';
import { StyledNewsLoading } from '../News/styles/StyledNewsCard';
import Slider from '../../components/Slider/Slider';
import Comments from '../../components/Comments/Comments';
import commentSave from '../../utils/commentSaver';
import ShowComments from '../../components/ShowComments/ShowComments';
import commentLoader from '../../utils/commentLoader';
import getDetails from '../../utils/detailsFetcher';


export default function GameDetails() {
    const match = useParams()
    console.log(match.id)

    const [game, setGame] = useState();
   // const [comments, dispatch] = useReducer(updateComments,[])
    console.log(game)
    useEffect(() => {
        getDetails(match.id,setGame)
    }, []);
 
    return (
        (!game) ?<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}> <StyledNewsLoading /></div> : (<>
            <StyledGameDetailsTitle>{game.title} </StyledGameDetailsTitle>
            <StyledGameDetailsP>({game.release_date})</StyledGameDetailsP>
            <Slider screenshots={game.screenshots} />
            <StyledGameDetailsCard>
                <StyledGameDetailsDivCard><div>
                    <StyledGameDetailsSubtitles>Gênero</StyledGameDetailsSubtitles>
                    <StyledGameDetailsP>{game.genre}</StyledGameDetailsP>
                </div>
                    <div>
                        <StyledGameDetailsSubtitles>Plataforma</StyledGameDetailsSubtitles>
                        <StyledGameDetailsP>{game.platform}</StyledGameDetailsP>
                    </div>

                </StyledGameDetailsDivCard>
                <StyledGameDetailsReq>
                    <StyledGameDetailsSubtitles>Requisitos minimos</StyledGameDetailsSubtitles>
                    <br />
                    <StyledGameDetailsDivCard>
                        <span><StyledGameDetailsH3>Sistema</StyledGameDetailsH3> <StyledGameDetailsP>{game.minimum_system_requirements.os}</StyledGameDetailsP> </span>
                        <br />
                        <span><StyledGameDetailsH3>Processador</StyledGameDetailsH3> <StyledGameDetailsP>{game.minimum_system_requirements.processor}</StyledGameDetailsP> </span>
                        <br />
                        <span><StyledGameDetailsH3>Memória</StyledGameDetailsH3> <StyledGameDetailsP>{game.minimum_system_requirements.memory}</StyledGameDetailsP> </span>
                    </StyledGameDetailsDivCard>
                    <StyledGameDetailsDivCard>

                        <span><StyledGameDetailsH3>Gráficos</StyledGameDetailsH3> <StyledGameDetailsP>{game.minimum_system_requirements.graphics}</StyledGameDetailsP> </span>
                        <br />
                        <span><StyledGameDetailsH3>Espaço HD</StyledGameDetailsH3> <StyledGameDetailsP>{game.minimum_system_requirements.storage}</StyledGameDetailsP> </span>
                    </StyledGameDetailsDivCard>
                </StyledGameDetailsReq>
            </StyledGameDetailsCard>

            <Comments saver = {commentSave} game={game.title}/>

            <ShowComments name='vitor' comment="baita jogo" likes ='10'/>
        </>
        )

    )
}
/** /TODO criar a pagina de detalhes,hero
 *  <StyledGameDetailsCard>
            <StyledGamedetailsImg src=/>
        </StyledGameDetailsCard>
 */