import React, {useState} from 'react'
import { createGlobalStyle } from 'styled-components'


import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Education from "../education/Education";
import Project from "../project/Project";
import Footer from "../footer/Footer";
import Sidebar from '../sidebar/Sidebar';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`



export default function Landing() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Navbar isOpen = {isOpen} toggleOpen = {toggleOpen}/>
            <Sidebar isOpen = {isOpen} toggleOpen = {toggleOpen}/>
            <Home/>
            <About/>
            <Education/>
            <Project/>
            <Footer/>
        </React.Fragment>
    )
}
