import styled from "styled-components";

export const StyledFooterDiv = styled.footer`
    width:100%;
    text-align:center;
    height:5vh;
    margin-top:10px;
    display:flex;
    justify-content:center;
    color:black;
    background-color:${props =>props.theme.colors.background};
    border:2px solid ${props =>props.theme.colors.border};
    border-radius:12px;
    box-shadow:0px 0px 20px 5px ${props =>props.theme.colors.shadows};
    align-items:center;
   
`
export const StyledBrandName = styled.h1`
font-size:3vh;
 color:${props =>props.theme.colors.text};

 
`

