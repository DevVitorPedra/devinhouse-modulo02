import styled from "styled-components";
import NotFound from '../../../assets/images/7AV.gif'

export const StyledNotFoundPage = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;

` 
export const StyledNotFoundImg = styled.div`
        width:20%;
        height:50%;
        background-size:cover;
        background-image:url(${NotFound})
`