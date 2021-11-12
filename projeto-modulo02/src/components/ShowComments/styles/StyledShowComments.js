import styled from "styled-components";


export const StyledShowCommentsCard = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    gap:10px;
    border:2px solid white;
    border-radius:12px;
    padding:10px;

`

export const StyledShowSingleComment= styled.div`
    width:100%;
    height:auto;
   
    
`
export const  StyledShowUpVote = styled.button`
display:flex;
border-radius:50%;
    justify-content:center;
    align-items:center;
    width:25px;
    height:25px;
    border:1px solid black;
    background-color:green;
`
export const  StyledShowDownVote = styled.button`
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    border:1px solid black;
    background-color:red;
`
export const StyledShowVotes = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
    width:100px;
    height:40px;
`
export const StyledShowName = styled.h3`
    color:black;
    font-size:14px;
`
export const StyledShowCommentP=styled.p`
font-size:14px;
color:black;
`
