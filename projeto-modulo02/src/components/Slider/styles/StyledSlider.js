import styled from "styled-components";



export const StyledSliderCard = styled.div`
    width:100%;
    height:100%;
    border:2px solid ${props =>props.theme.colors.border};
    border-radius:12px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
export  const StyledSliderImg = styled.img`
    height:100%;
    min-width:auto;
    border-radius:5px;
    transition: all 2s ease;
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
`
export const StyledSliderlist = styled.div`
    
    height:35%;
    display:flex;
    justify-content:space-evenly;

`
export const StyledSliderListImg = styled.img`
    height:100%;
    width:15%;
    border-radius:50%;
   
   

`