import React from 'react'
import { Logo, StyledLogo } from './styles/StyledLogo'
import { Link } from 'react-router-dom'



export default function MainLogo() {
  return (
    <Logo className="logo">
      <Link className="logo-link" to={'/'}><StyledLogo>DEVinMMO</StyledLogo></Link>
    </Logo>
  )
}
