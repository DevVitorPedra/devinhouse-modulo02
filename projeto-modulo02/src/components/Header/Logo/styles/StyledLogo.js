import styled from "styled-components";
import logobg from '../../../../assets/images/EaH.gif'
export const StyledLogo = styled.h1`
  width: 100%;
  height:70px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:8vw;

`
export const Logo = styled.div`
color:${props => props.theme.colors.textHover};
border-radius:12px;
box-shadow:0px 0px 30px 5px ${props => props.theme.colors.shadows};
width: 100%;
height: 25vh;
min-height: 140px;
opacity:1.6;
background-position:center;
background-size: cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  
`
export const MainMenu = styled.nav`
    width:100%;
    height:30px;
    opacity:1;
    display:flex;
    justify-content:space-evenly;


  `
export const LogoMenuButtons = styled.button`

height:30px;
width:fit-content;
border:none;
color:white;
display:flex;
margin-top:18px;
opacity:1.6;
font-size:22px;
justify-content:center;
align-items:center;
background-color:transparent;
background: 
    
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}
:hover{
  
   background-size: 0 0.1em, 100% 0.1em
    

`



