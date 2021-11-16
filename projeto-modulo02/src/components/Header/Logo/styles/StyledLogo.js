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
background-image: url(${logobg});
background-position:center;
background-size: cover;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
  
`


