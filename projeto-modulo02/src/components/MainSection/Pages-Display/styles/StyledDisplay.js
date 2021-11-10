import styled from "styled-components";

export const StyledDisplay = styled.div`
border-radius:12px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:scroll;
    gap:5px;
    height:400px;
    background-color:${props=>props.theme.colors.background};
    box-shadow:0px 0px 10px 5px ${props=>props.theme.colors.primary};
    margin-left:10px;
    margin-top:10px;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const StyledLabel = styled.label`
    color:white;

`