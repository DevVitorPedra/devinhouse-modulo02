import styled from "styled-components";
import Loading from '../../../assets/images/loading.gif'

export const StyledNewsCard = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
gap:10px;
width:100%;
min-height:150px;
border-radius:12px;
border:2px solid white;
:hover{
        text-shadow: 0px 0px 18px  ${props =>props.theme.colors.purple};
        color: ${props =>props.theme.colors.primary};
        background-color:#101010;

    }
`
export const StyledNewsImg = styled.img`
width:100px;
height:100px;
border-radius:10px;

`
export const StyledNewsTitle = styled.h2`
    color:black;
   

`
export const StyledNewsDescription= styled.p`
    

`

export const StyledNewsLoading = styled.img`
    width:500px;
    height:400px;
    border-radius:200px;
    background-image:url(${Loading});
    background-position:center;
    background-size:cover;

`
export const StyledLink = styled.a`
    text-decoration:none;
    color:black;
    border-radius:12px;
    width:100%;
   
   
`