import styled from "styled-components";



export const StyledSliderCard = styled.div`
    width:100%;
    height:100%;
    border:2px solid ${props =>props.theme.colors.shadows};
    border-radius:12px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
export  const StyledSliderImg = styled.img`
    height:70%;
    min-width:auto;
    border-radius:5px;
    transform:scale(1);
    transition: all 2s ease
`
export const StyledSliderlist = styled.div`
    
    height:35%;
    display:flex;
    justify-content:space-evenly;

`
export const StyledSliderListImg = styled.img`
    height:100%;
    border-radius:50%;
    width:auto;
   

`