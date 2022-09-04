import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background:#000000;
    padding:0;
    margin:0;
`

export const Thanks = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:100px;    

`

export const Heading3 = styled.p`
    margin-bottom:25px;
    color:#9797cd;
    font-size: 36px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const DownloadBtn = styled.div`
    cursor: pointer;
    width:8em;
    padding:10px 16px;
    color:#E7E7E7;
    border:2px solid #9797cd;
    border-radius:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.3s ease-in;
    margin-bottom:10px;

    &:hover{
        transition:all 0.3s ease-in;
        background-color: #9797cd;
        color:#000000;
        font-weight:bold;
    }
`
export const ThanksBtn = styled.div`
    cursor: pointer;
    width:8em;
    padding:10px 16px;
    color:#E7E7E7;
    border:2px solid #9797cd;
    border-radius:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.3s ease-in;
    margin-bottom:10px;

    &:hover{
        transition:all 0.3s ease-in;
        background-color: #9797cd;
        color:#000000;
        font-weight:bold;
    }
`

export const Desc = styled.p`
    font-size:12px;
    color:#E7E7E7;
`