import styled from "styled-components";

export const StyledGamesCard = styled.div`
    border:2px solid white;
    width:24%;
    
    height:100%;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    text-decoration:none;
    overflow:hidden;
   text-overflow:ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
    color:white;
    :hover{
        text-shadow: 0px 0px 8px  ${props =>props.theme.colors.purple};
        color: ${props =>props.theme.colors.primary};
        background-color:#101010;

    }
    a{
        color:white;
        text-decoration:none;
    }

`
export const StyledGamesImg = styled.img`
    width:100%;
  margin-top:5px;

`
export const StyledGamesTitle = styled.h2`
margin-top:5px;
  
`
export const StyledGamesDescription = styled.p`
margin-top:15px;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 8; /* number of lines to show */
   -webkit-box-orient: vertical;
  

`