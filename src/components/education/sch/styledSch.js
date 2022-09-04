import styled from "styled-components"

export const Container = styled.div`
    color:#E7E7E7;
    margin-top:55px;
    display:grid;
    grid-template-columns:1fr 2fr;
    gap:75px;

    @media (max-width: 768px) {
        margin-top:15px;
        grid-template-columns:1fr;
    }

`

export const Detail = styled.div`
    padding:5px;
`
export const SchImg = styled.img`
    justify-self:end;
    height:300px;
    box-shadow: 2px -12px 22px -5px #e7e7e744;
    transition: all 2s ease-in-out;
    @media (max-width: 768px) {
        margin-top:20px;
        margin-bottom:-35px;
        height:150px;
    }
`

export const SchName = styled.h3`
    margin-bottom:8px;
    font-size:24px;
    text-align:left;

`
export const SchLoc = styled.p`
    margin-bottom:30px;
    font-size:12px;
    text-align:left;
`
export const SchInfo = styled.p`
    margin-bottom:10px;
    font-size:16px;
    text-align:left;
`
export const SchMsg = styled.p`
    margin-bottom:20px;
    font-size:16px;
    text-align:left;
    line-height:22px;
`
export const SchInfoSpan = styled.span`
    color:#9797cd;
`