import styled from "styled-components";

export const SideMenuBoard = styled.div`
gap:10px;
display:flex;
flex-direction:column;
align-items:center;
padding:10px;
margin-top:10px;
height:400px;
width:25%;
background-color:${props=> props.theme.colors.darkblue};
border-radius:12px;
box-shadow:0px 0px 10px 5px ${props=>props.theme.colors.primary};
`
export const SideMenuButtons = styled.li`

height:30px;
width:90%;
border-radius:12px;
color:white;
display:flex;
justify-content:center;
align-items:center;
background-color:${props=>props.theme.colors.purple};
:hover{
    box-shadow:0px 0px 15px 5px ${props=>props.theme.colors.purple};
}

`
