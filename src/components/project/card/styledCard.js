import styled from "styled-components";


export const CardContainer = styled.div`
    background-color:#041C32;
    padding:20px 40px;
    min-height:150px;
    border-radius:8px;
    box-shadow: -1px 10px 5px -5px rgba(0,0,0,0.55);    
    transition:all 0.2s ease-in;
    &:hover{
        transition:all 0.2s ease-out;
        position:relative;
        top:-15px;
        box-shadow: -4px 35px 5px -20px rgba(0,0,0,0.48);
    }

`

export const CardHeader = styled.h5`
    font-size:20px;
    font-weight:bold;
    color:#E7E7E7;
`


export const CardDesc = styled.p`
    font-size:14px;
    color:#E7E7E7;
    margin-top:25px;
    margin-bottom:10px;

`

export const CardImgContainer = styled.div`
    width:100%;
    height:150px;
    background-color:red;
    margin-top:25px;
    overflow:hidden;
`

export const CardImg = styled.img`
    width:100%;
    height:100%;
    transition:all .3s ease-in-out;
    &:hover{
        transform:scale(1.08)
    }
`

export const CardLink = styled.a`
    text-decoration:none;
    color:#9797cd;
    font-style:italic;
    font-size:14px;
    cursor: pointer;
`