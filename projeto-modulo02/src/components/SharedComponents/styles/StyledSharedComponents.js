import styled from "styled-components";
import Loading from '../../../assets/images/loading.gif'
export const StyledLoading = styled.img`
    width:400px;
   
    height:300px;
    border-radius:200px;
    background-image:url(${Loading});
    background-position:center;
    background-size:cover;
    opacity:1.8;
`
export const SharedH1 = styled.h1`
    color:${props=>props.theme.colors.text}
`
export const SharedP =styled.p`
color:${props=>props.theme.colors.text}
`
export const SharedBar = styled.div`
color:${props =>props.theme.colors.text};
display:flex;
flex-direction:column;
gap:10px;

    width:100%;
    height:auto;
    padding:10px;
    
`