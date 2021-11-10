import React from 'react'
import { SideMenuBoard, SideMenuButtons } from './styles/StyledSideMenu'
import { Link } from 'react-router-dom'


export default function SideMenu() {
    return (
        
     <SideMenuBoard>
         <label htmlFor="search">Pesquisar</label>
         <input type="text" />
         <SideMenuButtons  backgroundcolor="green"><Link to={'/gameslist'}>Todos os jogos</Link></SideMenuButtons>
         <SideMenuButtons backgroundcolor="red"> <Link to={'/news'}>Notícias</Link></SideMenuButtons>
         
         
        
     </SideMenuBoard>
     
    )
}
