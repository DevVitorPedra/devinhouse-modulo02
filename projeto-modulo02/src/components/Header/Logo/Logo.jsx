import React from 'react'
import ThemeButton from '../ThemeBtn/ThemeButton'
import { Logo, StyledLogo, StyledLogoImg } from './styles/StyledLogo'
import { Link } from 'react-router-dom'



export default function MainLogo() {
  return (
    <Logo className="logo">
      <StyledLogo><Link className="logo-link" to={'/'}><StyledLogo>DEVinMMO</StyledLogo></Link> </StyledLogo>
    </Logo>
  )
}
