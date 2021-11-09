import React from 'react'
import Logo from '../Logo/Logo'
import TopMenu from '../Top-Menu/TopMenu'

export default function MainHeader() {
    return (
        <div className="header">
            <Logo/>
            <TopMenu/>
        </div>
    )
}
