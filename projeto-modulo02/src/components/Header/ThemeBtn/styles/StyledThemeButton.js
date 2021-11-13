import styled from "styled-components";

export const StyledThemeButton = styled.button`
    position:absolute;
    top:20px;
    right:20px;
    border-radius:10px;
    width:30px;
    height:30px;
    font-size:18px;
    color:${props =>props.theme.colors.themeBtn};
    background-color:lightblue;
`
//<i class="bi bi-moon-stars-fill"></i> moon
//<i class="bi bi-brightness-low-fill"></i> sun