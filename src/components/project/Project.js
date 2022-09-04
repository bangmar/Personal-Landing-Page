import React, { useEffect, useState } from 'react'
import { Container, Heading1, Desc, Line, ProjectContainer } from './styledProject'
import Card from './card/Card'
import { project1,project2, project3, project4, project5 } from './dataProject'

function Project() {

    return (
        <Container id='project'>
            <Heading1>Recent Project</Heading1>
            <Desc>below are some mini projects that I work on independently or fulfill my college assignments</Desc>
            <Line/>
                
            <ProjectContainer>
                <Card {...project1}/>
                <Card {...project2}/>
                <Card {...project3}/>
                <Card {...project4}/>
                <Card {...project5}/>
                
            </ProjectContainer>
            
        </Container>
    )
}

export default Project