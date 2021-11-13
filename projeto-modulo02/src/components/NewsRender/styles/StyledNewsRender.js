import styled from "styled-components";


export const StyledNewsCard = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
gap:10px;
width:100%;
color:${props=>props.theme.colors.text};
min-height:150px;
border-radius:12px;
border:2px solid ${props =>props.theme.colors.border};
:hover{
        text-shadow: 0px 0px 28px  ${props =>props.theme.colors.shadows};
        color: ${props =>props.theme.colors.textHover};
        background-color:${props =>props.theme.colors.backgroundHover};

    }
`
export const StyledNewsImg = styled.img`
width:100px;
height:100px;
border-radius:10px;

`
export const StyledNewsTitle = styled.h2`
   
   

`
export const StyledNewsDescription= styled.p`
    

`


export const StyledLink = styled.a`
    text-decoration:none;
    color:white;
    border-radius:12px;
    width:100%;
   
   
`