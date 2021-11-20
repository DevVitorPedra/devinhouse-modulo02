import { createGlobalStyle } from "styled-components";
import montSerrat from '../../assets/fonts/Montserrat-Medium.ttf'
import logobg from '../../assets/images/EaH.gif'
export default createGlobalStyle`

@font-face {
    font-family:MontSerrat;
    src: url(${montSerrat}) ;
}
*{
    
    margin:0;
    padding:2px;
    box-Sizing:border-box;
    

}
body{
    font-family:'MontSerrat';
    background-image:url(${logobg});
    background-size:cover;
    background-color:${props=>props.theme.colors.background};
    transition:all 1.5s ease-out;
   
}
.logo-menu-btn{
    width:100%;
    color:white;
    text-decoration:none;
    display:flex;
    opacity:1.5;
 
    justify-content:center;
   
}
.slider-img{
    height:70%;
    min-width:auto;
    border-radius:5px;
    transition: all 2s ease;
   
}
.logo-link{
    text-decoration:none;
    opacity:1;
    color:white;
    animation:shadow-pulsate 2.5s infinite ease-in;
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
  
}
`