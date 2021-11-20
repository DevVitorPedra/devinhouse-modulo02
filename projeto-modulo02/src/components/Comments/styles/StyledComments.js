import styled from "styled-components";

export const StyledCommentsCard = styled.div`
    width:100%;
    height:100%;
    border-radius:12px;
    border:2px solid ${props=>props.theme.colors.border};
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    gap:15px;
    
`
export const StyledCommentsInputsCard = styled.div`
    width:100%;
    height:auto;
    padding:10px;
    display:flex;
    

`
export const StyledCommentsInfoCard = styled.div`
color:${props =>props.theme.colors.text};
display:flex;
flex-direction:column;
gap:10px;

    width:100%;
    height:auto;
    padding:10px;
    
`
export const StyledCommentsForm = styled.form`
    
`
export const StyledCommentsBtn = styled.button`
    width:100px;
    height: 30px;
    color:${props=>props.theme.colors.textHover};
    border-radius:10px;
    background-color:${props=>props.theme.colors.btns};
    :hover{
        box-shadow:0px 0px 12px  5px ${props=>props.theme.colors.shadows};
    }
    `
export const StyledCommentsInput = styled.input`
    width:200px auto;
    height:20px;
    
`
export const StyledCommentsTextarea = styled.textarea`
    max-width:200px;
    min-width:100px;
    min-height:50px;
    max-height:50px;
    
`
export const StyledCommentsH1 = styled.h1`
    color:${props =>props.theme.colors.text};
    
`
export const StyledCommentsWarning = styled.p`
    color:red;
    font-size:14px;
`



