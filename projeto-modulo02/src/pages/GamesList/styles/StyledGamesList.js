import styled from "styled-components";

export const StyledGamesCard = styled.div`
    border:2px solid  ${props =>props.theme.colors.border};;
    width:24%;
    color:${props =>props.theme.colors.text};
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
    
    :hover{
        text-shadow: 0px 0px 25px  ${props =>props.theme.colors.shadows};
        color: ${props =>props.theme.colors.textHover};
        background-color:${props =>props.theme.colors.backgroundHover};
        a{
        color:${props =>props.theme.colors.textHover};
        text-decoration:none;
    }

    }
    a{
        color:black;
        text-decoration:none;
    }

`
export const StyledGamesImg = styled.img`
    width:100%;
  margin-top:5px;

`
export const StyledGamesTitle = styled.h2`
margin-top:5px;
color:${props =>props.theme.colors.text};
  
`
export const StyledGamesDescription = styled.p`
color: ${props =>props.theme.colors.text};
margin-top:15px;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 8; /* number of lines to show */
   -webkit-box-orient: vertical;
  

`
