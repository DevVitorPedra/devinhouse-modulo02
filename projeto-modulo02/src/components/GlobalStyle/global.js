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
`