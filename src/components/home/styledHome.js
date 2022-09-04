import styled from "styled-components";


export const Container = styled.div`
    background-color:#000000;
    color:#E7E7E7;
    height:100vh;
    padding-left:120px;
    padding-right:120px;
    display:flex;
    justify-content:center;
    flex-direction:column;

    @media (max-width: 768px) {
        padding-left:50px;
        padding-right:50px;
    }

`
export const Heading1Wrapper = styled.div`
    display:flex;

    @media (max-width: 768px) {
        flex-wrap:wrap;
    }
`

export const Heading1 = styled.h1`
    font-size: 48px;
    margin-right:20px;

    @media (max-width: 768px) {
        font-size: 32px;
        margin-right:10px;
    }
`
export const Heading5 = styled.h1`
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const Span = styled.span`
    color:#9797cd;
`

export const OptionWrapper = styled.div`
    margin-top:20px;
`

export const Option = styled.ul`
    list-style:none;
    display:flex;
    gap:20px;
    @media (max-width: 768px) {
        flex-direction:row;
        flex-wrap:wrap;
        gap:15px;
    }
`

export const List = styled.li`
    background-color: #9797cd;
    padding:6px 6px;
    border-radius:5px;
    color:#041C32;
    font-weight:bold;
    cursor:pointer;
    font-size:12px;
    @media (max-width: 768px) {
        font-size:8px;
    }
`

