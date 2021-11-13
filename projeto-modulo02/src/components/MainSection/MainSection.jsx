import React from 'react'
import PagesDisplay from './Pages-Display/PagesDisplay'
import SideMenu from './Side-Menu/SideMenu'
import { StyledMainSection } from './styles/styles'

export default function MainSection() {
    return (
        <StyledMainSection>
            <SideMenu />
            <PagesDisplay />
        </StyledMainSection>
    )
}
