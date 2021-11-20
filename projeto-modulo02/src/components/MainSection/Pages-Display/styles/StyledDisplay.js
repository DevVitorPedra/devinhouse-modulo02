import styled from "styled-components";

export const StyledDisplay = styled.section`
    border-radius:12px;
    transition:all 1.5s ease-out;
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    overflow-y:scroll;
    gap:8px;
    opacity:0.6;
    height:65vh;
    background-color:${props => props.theme.colors.background};
    box-shadow:0px 0px 10px 5px ${props => props.theme.colors.shadows};
    margin-top:10px;
    :hover{
        opacity:1;
        transition:all 1s;
    }
   
`
