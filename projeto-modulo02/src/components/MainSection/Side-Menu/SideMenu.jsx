import React from 'react'
import { SideMenuBoard, SideMenuButtons } from './styles/StyledSideMenu'


export default function SideMenu() {
    return (
        
     <SideMenuBoard>
         <input/>
       <SideMenuButtons backgroundcolor="red"> Categorias</SideMenuButtons>
         <SideMenuButtons backgroundcolor="yellow">Plataformas</SideMenuButtons>
         <SideMenuButtons  backgroundcolor="green"></SideMenuButtons>
     </SideMenuBoard>
     
    )
}
