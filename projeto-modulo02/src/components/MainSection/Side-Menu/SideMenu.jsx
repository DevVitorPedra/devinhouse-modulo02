import React from 'react'
import { SideMenuBoard, SideMenuButtons, StyledMetalSlug } from './styles/StyledSideMenu'
import { Link } from 'react-router-dom'
import MetalSlug from '../../../assets/images/shooting-loading.gif'

export default function SideMenu() {
    return (

        <SideMenuBoard>
            <SideMenuButtons backgroundcolor="green"><Link to={'/gameslist'}>Jogos</Link></SideMenuButtons>
            <SideMenuButtons backgroundcolor="red"> <Link to={'/news'}>Notícias</Link></SideMenuButtons>
            <StyledMetalSlug src={MetalSlug}/>


        </SideMenuBoard>

    )
}
