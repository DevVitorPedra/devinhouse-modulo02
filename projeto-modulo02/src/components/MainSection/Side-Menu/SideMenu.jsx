import React from 'react'
import { SideMenuBoard, SideMenuButtons } from './styles/StyledSideMenu'
import { Link } from 'react-router-dom'
import SearchBar from '../../SearchBar/SearchBar'


export default function SideMenu() {
    return (

        <SideMenuBoard>
            <SideMenuButtons backgroundcolor="green"><Link to={'/gameslist'}>Jogos</Link></SideMenuButtons>
            <SideMenuButtons backgroundcolor="red"> <Link to={'/news'}>Notícias</Link></SideMenuButtons>



        </SideMenuBoard>

    )
}
