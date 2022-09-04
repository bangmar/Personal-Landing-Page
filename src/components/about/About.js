import React from 'react'
import { Container, Heading1, Desc, Img, AboutMe, Parag, HTML, CSS, Js, SosMed, SosMedIcon,Icon } from './styledAbout'

import img from '../assets/img/aboutMe.png'
import instagram from '../assets/icon/instagramIcon.png'
import github from '../assets/icon/gitIcon.png'
import gmail from '../assets/icon/gmailIcon.png'

const About = () => {
    return (
        <Container id='about'>
            <Heading1>About me</Heading1>
            <Desc>
                <Img src={img} alt="MarioRS" title='Mario'></Img>
                <AboutMe>
                    <Parag>Halo, nama lengkap saya Mario Rudy Silalahi dan berusia 20 tahun. Saya seorang mahasiswa aktif disalahsatu Institut Teknologi tepatnya Institut Teknologi Telkom Purwokerto. saya merupakan mahasiswa angkatan 2020. Saya masuk kedalam Jurusan Teknik Informatika Fakultas Informatika.</Parag>
                    <Parag>Front-End Website Development merupakan satu dari sekian hal yang saya minati dalam hidup khusunya dibilang technology. dalam beberapa bulan belakang saya mulai mendalami teknologi yang digunakan dalam pengembangan website khusunya bagian antarmuka dengan mempelajari <HTML>HTML</HTML> <CSS>CSS</CSS> dan <Js>Javascript</Js> dan setelah mulai memahaminya sekarang seang mendalami library ReactJs</Parag>
                    <Parag>Follow me on</Parag>
                    <SosMed>
                        <SosMedIcon href='https://www.instagram.com/mariorudyss/' target='_blank'><Icon src={instagram} alt='ig' title='instgramAccount'></Icon></SosMedIcon>

                        <SosMedIcon href='mailto:mariosihaloho@gmail.com' target='_blank'><Icon src={gmail} alt='gmail' title='gmailAccount'></Icon></SosMedIcon>
                        
                        <SosMedIcon href ='https://github.com/Mariorudd' target ='_blank'><Icon src={github} alt='git' title='githubAccount'></Icon></SosMedIcon>

                        
                    </SosMed>
                </AboutMe>
                
            </Desc>
            
        </Container>
    )
}

export default About
