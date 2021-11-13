import React, { useContext } from 'react'
import { StyledThemeButton } from './styles/StyledThemeButton'
import { Light,Dark } from '../../GlobalStyle/Themes/themes'
import { ThemeContext } from 'styled-components'
export default function ThemeButton(props) {
    const { colors } = useContext(ThemeContext)
    console.log(props)
    return (
      (props.current===Light)?<StyledThemeButton onClick={props.toggleTheme}><i className="bi bi-moon-stars-fill"></i></StyledThemeButton>:
      <StyledThemeButton onClick={props.toggleTheme}><i className="bi bi-brightness-high-fill"></i></StyledThemeButton>
    )
}
