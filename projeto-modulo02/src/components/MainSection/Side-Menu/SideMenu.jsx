import React from 'react'
import { SideMenuBoard, SideMenuButtons, StyledMetalSlug } from './styles/StyledSideMenu'
import { Link } from 'react-router-dom'
import MetalSlug from '../../../assets/images/shooting-loading.gif'

export default function SideMenu() {
    return (

        <SideMenuBoard>
          <Link className="side-menu-btn" to={'/gameslist'}>  <SideMenuButtons backgroundcolor="green">Jogos</SideMenuButtons></Link>
          <Link className="side-menu-btn" to={'/news'}> <SideMenuButtons backgroundcolor="red"> Notícias</SideMenuButtons></Link>
        <StyledMetalSlug src={MetalSlug}/>
        </SideMenuBoard>

    )
}
