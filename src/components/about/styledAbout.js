import styled from "styled-components"

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
    margin-right:20px;
    padding-top:50px;

    @media (max-width: 768px) {
        font-size: 32px;
        text-align:center;
    }
`

export const Desc = styled.div`
    display:grid;
    grid-template-columns:2fr 10fr;
    gap:20px;
    
    @media (max-width: 768px) {
        grid-template-columns:1fr;
    }

`

export const Img = styled.img`
    margin-top:35px;
    height:300px;
    opacity:1;
    transition:all 0.5s ease-in-out;
    box-shadow: -5px -7px 32px -20px rgba(0,0,0,0.75);
    filter:grayscale(0%);
    transform: rotate(3deg);
    
    &:hover{
        transform: rotate(0deg);
        filter:grayscale(20%);
        box-shadow: 5px 7px 20px -15px rgba(0,0,0,0.75);
    }

    @media (max-width: 768px) {
        justify-self:center
    }
    
`

export const AboutMe = styled.div`
    display:flex;
    flex-direction:column;
    padding:50px 30px;
    @media (max-width: 768px) {
        padding-top:20px;
    }
`

export const Parag = styled.p`
    font-size:1em;
    margin-bottom:20px;
    text-align:justify;
    line-height:25px;
    @media (max-width: 768px) {
        text-align:left;

    }
`

export const HTML = styled.span`
    color: #dd8533;
    font-weight:bold;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
`
export const CSS = styled.span`
    color: #294ddd;
    font-weight:bold;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
`
export const Js = styled.span`
    color: #cfd303;
    font-weight:bold;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
`


export const SosMed = styled.div`
    margin-top:-5px;
    display:flex;
    gap:5px;
`

export const SosMedIcon = styled.a`
    text-decoration:none;
    
`
export const Icon = styled.img`
    height:35px;
    cursor:pointer;
`