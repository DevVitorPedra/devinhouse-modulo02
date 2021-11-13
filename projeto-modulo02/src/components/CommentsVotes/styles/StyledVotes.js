import styled from "styled-components";

export const StyledVotesCard = styled.div`
    width:150px;
    height:50px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
export const  StyledUpVote = styled.button`
display:flex;
border-radius:50%;
    justify-content:center;
    align-items:center;
    width:25px;
    height:25px;
    border:1px solid black;
    background-color:green;
`
export const  StyledDownVote = styled.button`
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    border:1px solid black;
    background-color:red;
`
