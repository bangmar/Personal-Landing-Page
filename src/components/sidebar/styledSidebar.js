import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as routerLink } from "react-router-dom";

export const Container = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    top:0;
    left:0;
    transition: 0.3s all ease-in-out;
    background-color:#E7E7E7;
    opacity: ${({isOpen}) => (isOpen? '100%' :'0')};
    display: ${({isOpen}) => (isOpen? 'inline' :'none')};
    top:${({isOpen}) => (isOpen? '100px' : '-100%')};
`

export const SideLink = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    gap:50px;
    padding-top:50px;

`

export const Mylink = styled(Link)`
    color:#000000;
    cursor: pointer;
    justify-self:center;
    font-weight:bold;
    font-size:20px;

    text-decoration:underline;

`

export const SideBtn = styled(routerLink)`
    padding:12px 16px;
    background-color:#9797cd;
    color:#000000;
    font-weight:bold;
    border-radius:6px;
    border:none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration:none;
    width:200px;
    text-align:center;
    justify-self:center;
`