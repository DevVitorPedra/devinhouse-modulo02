import React from 'react'
import MainLogo from '../Logo/Logo'
import ThemeButton from '../ThemeBtn/ThemeButton'


export default function MainHeader(props) {
    return (
        <div className="header">
            <MainLogo />
            <ThemeButton current ={props.current}toggleTheme={props.toggle}/>
        </div>
    )
}
