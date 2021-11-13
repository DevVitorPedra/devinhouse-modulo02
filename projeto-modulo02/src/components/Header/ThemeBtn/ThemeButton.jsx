import React, { useContext } from 'react'
import { StyledThemeButton } from './styles/StyledThemeButton'
import { Light,Dark } from '../../GlobalStyle/Themes/light'

export default function ThemeButton() {
    
 
    return (
      ("currentTheme"==='Light')?<StyledThemeButton><i className="bi bi-moon-stars-fill"></i></StyledThemeButton>:
      <StyledThemeButton><i class="bi bi-brightness-high-fill"></i></StyledThemeButton>
    )
}
