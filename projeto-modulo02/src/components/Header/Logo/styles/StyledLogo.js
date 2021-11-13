import styled from "styled-components";
import logobg from '../../../../assets/images/logo-bg.jpg'

export const StyledLogo = styled.h1`
  width: 100%;
  height:70px;
  display:flex;
  text-shadow: 0px 0px 35px  ${props => props.theme.colors.purple};
  justify-content:center;
  align-items:center;
  font-size:60px;
  animation:shadow-pulsate 1.5s infinite;
  @keyframes shadow-pulsate {
    0%{
      text-shadow: 0px 0px 55px  ${props => props.theme.colors.purple};
      color:black;
    }
    50%{
      text-shadow: 0px 0px 0px  ${props => props.theme.colors.purple};
      color:white;
    }
    100%{
      text-shadow: 0px 0px 35px  ${props => props.theme.colors.purple};
      color:black;
    }
  }
`
export const Logo = styled.div`
color:${props => props.theme.colors.primary};
border-radius:12px;
box-shadow:0px 0px 30px 5px ${props => props.theme.colors.primary};
width: 100%;

height: 180px;
background-image: url(${logobg});
background-position:center;
background-size: cover;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
  
`


