import styled from "styled-components";

export const Container = styled.div`
    color:#041C32;
    background-color:#E7E7E7;
    padding-left:120px;
    padding-right:120px;
    padding-bottom:50px;
    
    @media (max-width: 768px) {
        padding-left:50px;
        padding-right:50px;
    }
`

export const Heading1 = styled.h1`
    font-size: 48px;
    padding-top:50px;
    text-align:center;
    
    @media (max-width: 768px) {
        font-size: 32px;
        text-align:center;
    }

`

export const Desc = styled.p`
    font-size:14px;
    text-align:center;
    margin-top:10px;
    letter-spacing:2px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const Line = styled.div`
    width:100%;
    height:5px;
    background-color:#000000;
    margin-top:20px;
`

export const ProjectContainer = styled.div`
    margin-top:50px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    gap:25px;
    justify-content: center;
    @media (max-width: 768px) {
        gap:30px;
    }
`