import styled from "styled-components";


export const StyledShowCommentsCard = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    gap:10px;
    border:2px solid ${props =>props.theme.colors.border};
    border-radius:12px;
    padding:10px;

`

export const StyledShowSingleComment= styled.div`
    width:100%;
    height:auto;
   
    
`

export const StyledShowName = styled.h2`
    color:${props=>props.theme.colors.text};
    font-size:16px;
`
export const StyledShowCommentP=styled.p`
font-size:14px;
color:${props=>props.theme.colors.text};
`
