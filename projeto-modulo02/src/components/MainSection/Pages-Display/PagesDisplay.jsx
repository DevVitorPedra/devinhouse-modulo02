import React from 'react'
import { StyledDisplay, StyledLabel } from './styles/StyledDisplay'
import { Routes, Route} from 'react-router-dom'
import GamesList from '../../../pages/GamesList/GamesList'
import News from '../../../pages/News/News'
import Intro from '../../../pages/Intro/Intro'
import GameDetails from '../../../pages/GameDetails/GameDetails'
export default function PagesDisplay() {
    return (
        <StyledDisplay>
        <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/gameslist" element={<GamesList/>}/>
            <Route path="/gamedetails/:id" element={<GameDetails />}/>

        </Routes>
       
        </StyledDisplay>
    )
}
