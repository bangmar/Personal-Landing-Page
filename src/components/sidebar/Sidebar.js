import React, {useState} from 'react'
import { Container,SideLink, Mylink, SideBtn } from '../sidebar/styledSidebar'
import './sidebar.css'


function Sidebar(props) {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <Container className={colorChange ? 'sidebar colorChange' : 'sidebar'} isOpen = {props.isOpen} >
            <SideLink>
                <Mylink to="about" spy={true} smooth={true} offset={-100} duration={500} onClick = {props.toggleOpen}>About</Mylink>
                <Mylink to="education" spy={true} smooth={true} offset={-70} duration={500} onClick = {props.toggleOpen}>Education</Mylink>
                <Mylink to="project" spy={true} smooth={true} offset={-50} duration={500} onClick = {props.toggleOpen}>Project</Mylink>
                <SideBtn to='/cv'>Download CV</SideBtn>
            </SideLink>
        </Container>
    )
}

export default Sidebar