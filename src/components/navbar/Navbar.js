import React, {useState} from 'react'
import { Nav, NavBrand, NavLinks, MyLink, NavBtn, HamburgerIcon } from '../navbar/styledNavbar'
import './nav.css'
import { animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar (props) {

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
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavBrand className={colorChange ? 'navBrand colorChange' : 'navBrand'} onClick={()=>{
                    scroll.scrollToTop()
                }}>Rudy</NavBrand>
                
                

                <NavLinks className={colorChange ? 'navlink colorChange' : 'navlink'}>
                    
                    <MyLink to="about" spy={true} smooth={true} offset={-100} duration={500}>About</MyLink>

                    <MyLink to="education" spy={true} smooth={true} offset={-70} duration={500}>Education</MyLink>

                    <MyLink to="project" spy={true} smooth={true} offset={-50} duration={500}>Project</MyLink>
                    
                    <NavBtn to="/cv">Download CV</NavBtn>

                    <HamburgerIcon className={colorChange ? 'hamburger active' : 'hamburger'}  onClick =  {props.toggleOpen}>
                    {props.isOpen? <FaTimes onClick = {props.toggleOpen}/> : <FaBars onClick = {props.toggleOpen}/>}
                    </HamburgerIcon>

                </NavLinks>
            </Nav>        
    )
}

export default Navbar
