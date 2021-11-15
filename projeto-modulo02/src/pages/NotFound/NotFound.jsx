import React from 'react'
import { StyledCommentsH1 } from '../../components/Comments/styles/StyledComments'
import { StyledNotFoundPage,StyledNotFoundImg } from './styles/StyledNotFound'

export default function NotFound() {
    return (
            <StyledNotFoundPage>
                <StyledCommentsH1>
                    PÁGINA NÃO ENCONTRADA
                </StyledCommentsH1>
                <StyledNotFoundImg/>
            </StyledNotFoundPage>
    )
}
