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
.slide-in{
    transition:all 2s ease-in;
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

}
.slide-out{
    transition:all 2s ease-in;
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

}
`