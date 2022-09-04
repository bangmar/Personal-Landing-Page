import { Link } from "react-scroll";
import styled from "styled-components";


export const Container = styled.div`
    
    background-color:#000000;
    color:#E7E7E7;
    padding:50px 120px;
    display:grid;
    grid-template-columns:150px 150px 300px;
    @media (max-width: 768px) {
        padding-left:50px;
        padding-right:50px;
        grid-template-columns:1fr 1fr;

    }

`

export const Title = styled.h3`
    margin-bottom:10px;
    
`

export const Sub = styled.p`
    margin-bottom:10px;
    font-size:12px;
`

export const SiteMap = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:7px;
    @media (max-width: 768px) {
        margin-bottom:50px;
    }
`
export const SkillUsed = styled.ul`
    list-style:none;
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:7px;
    @media (max-width: 768px) {
        margin-bottom:50px;
    }
`

export const FootLink = styled(Link)`
    cursor: pointer;
    
    &:hover{
        color:#9797cd;
    }
    
`
export const Skill = styled.li`
    list-style:none;
`