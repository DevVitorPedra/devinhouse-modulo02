import styled from "styled-components";

export const StyledThemeButton = styled.button`
    position:absolute;
    top:60px;
    right:20px;
    border-radius:10px;
    width:40px;
    height:40px;
    font-size:28px;
    box-shadow:0px 0px 20px 5px ${props =>props.theme.colors.shadows};
    color:${props =>props.theme.colors.themeBtn};
    background-color:${props =>props.theme.colors.themeBG};
`
//<i class="bi bi-moon-stars-fill"></i> moon
//<i class="bi bi-brightness-low-fill"></i> sun