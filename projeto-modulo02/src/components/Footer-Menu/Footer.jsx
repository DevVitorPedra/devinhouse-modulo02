import React from 'react'
import { StyledFooterDiv,StyledBrandName } from './styles/StyledFooter'
import { SharedP } from '../SharedComponents/styles/StyledSharedComponents'
export default function Footer() {
    return (
      <StyledFooterDiv>
         <SharedP>Desenvolvido por </SharedP> <StyledBrandName>VSP®</StyledBrandName>
      </StyledFooterDiv>
    )
    }
