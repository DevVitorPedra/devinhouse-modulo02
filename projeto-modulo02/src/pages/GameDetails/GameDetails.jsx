import React, { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom';
import { StyledGameDetailsCard, StyledGameDetailsDivCard, StyledGameDetailsH3, StyledGameDetailsP, StyledGameDetailsReq, StyledGameDetailsSubtitles, StyledGameDetailsTitle } from './styles/StyledGameDetails';
import { StyledNewsLoading } from '../News/styles/StyledNewsCard';
import Slider from '../../components/Slider/Slider';
import Comments from '../../components/Comments/Comments';
import commentSave from '../../utils/commentSaver';
import ShowComments from '../../components/ShowComments/ShowComments';
import commentLoader from '../../utils/commentLoader';
import getDetails from '../../utils/detailsFetcher';
import { SearchContext } from '../../components/SearchContext/SearchContext';


export default function GameDetails() {
    const { value, setValue } = useContext(SearchContext)
    const match = useParams()
    const [comments, setComments] = useState()
    console.log(comments)
    const [game, setGame] = useState();

    useEffect(() => {
        getDetails(match.id, setGame)
        setComments(commentLoader(match.id))
        return () => {
            setValue('')
        }
    }, []);

    return (

        (!game) ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> <StyledNewsLoading /></div> : (<>
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

            <Comments saver={commentSave} id={game.id} />

            {(!comments) ? <h1>Nenhum comentário ainda...</h1> : comments.map((element, idx) => { return (<ShowComments gameId={match.id} id={idx} key={idx + 1} name={element.name} comment={element.comment} likes={element.likes} />) })}



        </>


        )


    )
}
/** /TODO criar a pagina de detalhes,hero
 *  <StyledGameDetailsCard>
            <StyledGamedetailsImg src=/>
        </StyledGameDetailsCard>
 */