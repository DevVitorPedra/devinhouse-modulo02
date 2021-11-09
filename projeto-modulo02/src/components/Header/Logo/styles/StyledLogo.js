import styled from "styled-components";
import logobg from '../../../../assets/images/logo-bg.jpg'

export const StyledLogo = styled.h1`
  width: 100%;
  height:70px;
  display:flex;
  text-shadow: 0px 0px 35px  ${props =>props.theme.colors.purple};
  justify-content:center;
  align-items:center;
  font-size:60px;

`;
export const Logo = styled.div`
color:${props=>props.theme.colors.primary};
border-radius:12px;
box-shadow:0px 0px 30px 5px ${props=>props.theme.colors.primary};
width: 100%;

height: 200px;
background-image: url(${logobg});
background-position:center;
background-size: cover;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

`


