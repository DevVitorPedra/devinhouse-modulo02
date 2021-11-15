import styled from "styled-components";

export const SideMenuBoard = styled.aside`
gap:10px;
display:flex;
border:2px solid ${props=>props.theme.colors.border};
flex-direction:column;
align-items:center;
padding:10px;
margin-top:10px;
height:65vh;
width:25%;
background-color:${props=> props.theme.colors.background};
border-radius:12px;
box-shadow:0px 0px 10px 5px ${props=>props.theme.colors.shadows};
a{
    text-decoration:none;
    color:${props=>props.theme.colors.textHover};
}
`
export const SideMenuButtons = styled.li`

height:30px;
width:90%;
border-radius:12px;
display:flex;
justify-content:center;
align-items:center;
background-color:${props=>props.theme.colors.btns};
:hover{
    box-shadow:0px 0px 15px 5px ${props=>props.theme.colors.shadows};
    color:white;

}

`
export const StyledMetalSlug = styled.img`
    width:100%;
    min-width:150px;
    
`
