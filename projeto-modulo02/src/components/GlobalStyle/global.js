import { createGlobalStyle } from "styled-components";
import montSerrat from '../../assets/fonts/Montserrat-Medium.ttf'
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
    background-color:${props=>props.theme.colors.background};
}
.side-menu-btn{
    width:90%;
    display:flex;
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
    color:white;
}
`