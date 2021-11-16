import React from 'react'
import { SharedP } from '../../components/SharedComponents/styles/StyledSharedComponents'
import { StyledNotFoundPage,StyledNotFoundImg } from './styles/StyledNotFound'

export default function NotFound() {
    return (
            <StyledNotFoundPage>
                <SharedP>
                    PÁGINA NÃO ENCONTRADA
                </SharedP>
                <StyledNotFoundImg/>
            </StyledNotFoundPage>
    )
}
