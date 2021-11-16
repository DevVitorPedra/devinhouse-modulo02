import styled from "styled-components";


export const StyledSearch = styled.input`
min-width:50%;
transition:all 2s ease-out;
    color:${props=>props.theme.colors.text};
    box-sizing:border-box;
    margin:0;
    padding:0;
    border:none;
    border-bottom:1px solid ${props=>props.theme.colors.text};
    background-color:${props=>props.theme.colors.background};
    &:focus{
        outline:none;
        border-bottom:1px solid ${props=>props.theme.colors.text};
    }
`