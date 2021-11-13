import styled from "styled-components";

export const StyledGameDetailsCard = styled.div`
    height:100%auto;
    width:100%;
    border-radius:12px;
    border:2px solid ${props =>props.theme.colors.border};
`



export const StyledGameDetailsTitle = styled.h1`
    color:${props =>props.theme.colors.text};

`

export const StyledGameDetailsSubtitles = styled.h2`
    color:${props =>props.theme.colors.text};

`
export const StyledGameDetailsP = styled.p`
    color:${props =>props.theme.colors.text};

`
export const StyledGameDetailsReq = styled.div`
background-color:gray;

display:flex;
flex-direction:column;
align-items:flex-start;
padding:10px;
border-radius:12px;

`

export const StyledGameDetailsDivCard= styled.div`
    width:100%;
    height:120px;
    display:flex;
    justify-content:flex-start;
    gap:40px;

`
export const StyledGameDetailsH3 = styled.h3`
    color:${props =>props.theme.colors.text};
`