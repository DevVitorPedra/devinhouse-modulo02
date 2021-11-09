import styled from "styled-components";

export const StyledDisplay = styled.div`
border-radius:12px;
    width:100%;
    height:100%auto;
    background-color:${props=>props.theme.colors.background};
    box-shadow:0px 0px 10px 5px ${props=>props.theme.colors.primary};
    margin-left:10px;
    margin-top:10px;

`