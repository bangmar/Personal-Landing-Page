import React, {  useEffect, useState } from 'react'
import Sch from './sch/Sch'
import { Container, Heading1, Options, Option } from './styledEducation'
import {highSchool, university} from './dataSchool'
import './education.css'

function Education() {

    const [sch, setSch] = useState('Highschool')
    const selected = document.querySelectorAll('h5')

    const showData = (e) => {
        setSch(e.target.innerText)
        
    }

    useEffect(()=>{
        selected.forEach(el => {
            if(el.classList.contains('actived')){
                el.classList.remove('actived')
            }
            else{
                el.classList.add('actived')

            }
        })
    },[selected])

    return (
        <Container id='education'>
            <Heading1>Education</Heading1>  
            <Options>
                <Option onClick={showData} className='option actived'>Highschool</Option>
                <Option onClick={showData} className='option'>University</Option>
            </Options>
            {(sch === 'Highschool') ? <Sch {...highSchool}/> : <Sch {...university}/>}
        </Container>
    )
}

export default Education
