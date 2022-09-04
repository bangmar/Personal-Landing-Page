import styled from "styled-components"



export const Container = styled.div`
    background-color:#000000;
    padding-left:120px;
    padding-right:120px;
    padding-bottom:75px;
    @media (max-width: 768px) {
        padding-left:50px;
        padding-right:50px;
    }

`

export const Heading1 = styled.h1`
    padding-top:75px;    
    font-size: 48px;
    margin-bottom:20px;
    text-align:right;
    color:#9797cd;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`

export const Options = styled.div`
    display:flex;    
    gap:20px;
    justify-content:flex-end;
`

export const Option = styled.h5`
    font-size:16px;
    font-weight:bold;
    letter-spacing:2px;
    transition:all 0.3s ease-in-out;
    border:2px solid #E7E7E7;
    padding:8px 16px;
    border-radius:10px;
    box-sizing:border-box;
    cursor: pointer;


    &:hover{
        transition:all 0.3s ease-in-out;
        background-color:#9797cd;
        color:#000000;
    }
`