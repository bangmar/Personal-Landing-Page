import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as routerLink } from "react-router-dom";


export const Nav = styled.nav`
    background-color:transparent;
    padding-left:120px;
    padding-right:120px;
    padding-top:30px;
    right:0;
    left:0;
    top: 0;

    display:flex;
    align-items:baseline;
    justify-content:space-between;
    position:fixed;
    z-index:10;
    
    @media (max-width: 768px) {
        padding-left:50px;
        padding-right:50px;
        
    }

`

export const NavBrand = styled(Link)`
    font-size:32px;
    letter-spacing:-5px;
    font-weight:bold;
    cursor: pointer;
`

export const HamburgerIcon = styled.div`
    display:none;
    
    @media (max-width: 768px) {
        display:block;
        position:absolute;
        right:0;
        font-size:1.5rem;
        cursor: pointer;
        padding-right:50px;
    }
`

export const NavLinks = styled.ul`
    color:#E7E7E7;
    display:flex;
    gap:30px;
    align-items:center;
    box-sizing:border-box;

    @media (max-width: 768px) {
        gap:20px;
    }
`



export const MyLink = styled(Link)`
    font-size:16px;
    position:relative;
    cursor: pointer;    
    transition: 0.1s all ease-in;
    
    &:hover{
        font-weight:bold;
    }

    &:hover::after{
        content:"";
        position:absolute;
        height:100%;
        width:3px;
        right:-10px;
        background-color:#9797cd;
    }
    @media (max-width: 768px) {
        display:none;
    }
    

`

export const NavBtn = styled(routerLink)`
    padding:10px 16px;
    background-color:#9797cd;
    color:#000000;
    font-weight:bold;
    border-radius:6px;
    border:none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.3s ease-in-out;
        border:1px solid #9797cd;
        background-color:transparent;
        color:#9797cd;
    }
    @media (max-width: 768px) {
        display:none;
    }
`