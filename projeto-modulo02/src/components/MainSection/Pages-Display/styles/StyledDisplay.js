import styled from "styled-components";

export const StyledDisplay = styled.main`
border-radius:12px;
transition:all 2s ease-out;
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    overflow-y:scroll;
    gap:8px;
    border:${props=>props.theme.colors.border};
    height:65vh;
    background-color:${props=>props.theme.colors.background};
    box-shadow:0px 0px 10px 5px ${props=>props.theme.colors.shadows};
    margin-left:10px;
    margin-top:10px;
    ::-webkit-scrollbar {
        display: none;
    }
`
