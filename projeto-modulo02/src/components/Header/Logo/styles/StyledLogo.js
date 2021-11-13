import styled from "styled-components";
import logobg from '../../../../assets/images/logo-bg.jpg'

export const StyledLogo = styled.h1`
  width: 100%;
  height:70px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:60px;
  animation:shadow-pulsate 1.5s infinite;
  @keyframes shadow-pulsate {
    0%{
      text-shadow: 0px 0px 55px  ${props => props.theme.colors.shadows};
     
    }
    50%{
      text-shadow: 0px 0px 10px  ${props => props.theme.colors.shadows};
      color:black
    }
    100%{
      text-shadow: 0px 0px 55px  ${props => props.theme.colors.shadows};
     
    }
  }
`
export const Logo = styled.div`
color:${props => props.theme.colors.textHover};
border-radius:12px;
box-shadow:0px 0px 30px 5px ${props => props.theme.colors.shadows};
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


