import React from 'react'
import { Logo, MainMenu, StyledLogo } from './styles/StyledLogo'
import { Link } from 'react-router-dom'

import { LogoMenuButtons } from './styles/StyledLogo'



export default function MainLogo() {
  return (
    <Logo className="logo">
      <Link className="logo-link" to={'/'}><StyledLogo>DEVinMMO</StyledLogo></Link>
      <MainMenu>
           <LogoMenuButtons  ><Link className="logo-menu-btn" to={'/gameslist'}>Jogos</Link></LogoMenuButtons>
        <LogoMenuButtons >  <Link className="logo-menu-btn" to={'/news'}>  Notícias</Link></LogoMenuButtons>
      </MainMenu>
     
    </Logo>
  )
}
