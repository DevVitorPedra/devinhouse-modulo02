import React from 'react'
import { StyledLogo } from './styles/StyledLogo'
import shadowmourne from '../../../assets/images/shadowmourne1.jpg'

export default function Logo() {
    return (
        <div className="logo">
           <img style={{height:100, width:100}}src={shadowmourne} alt="shadowmourne" /> <h1><StyledLogo>DEVinMMO</StyledLogo></h1>

        </div>
    )
}
