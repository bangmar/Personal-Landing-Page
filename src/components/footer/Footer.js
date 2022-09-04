import React from 'react'
import { Container, SiteMap, Title, FootLink, SkillUsed, Skill, Sub } from './styledFooter'
function Footer() {
    return (
        <Container>
            <SiteMap>
                <Title>SiteMap:</Title>
                <FootLink to="about" spy={true} smooth={true} offset={-100} duration={500}>About</FootLink>
                <FootLink to="education" spy={true} smooth={true} offset={-70} duration={500}>Education</FootLink>
                <FootLink to="project" spy={true} smooth={true} offset={-50} duration={500}>Project</FootLink>
            </SiteMap>
            <SkillUsed>
                <Title>Skill</Title>
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>JavaScript</Skill>
                <Skill>ReactJs</Skill>
                <Skill>BootStrap</Skill>
            </SkillUsed>
            <SkillUsed>
                <Title>This Website Build with React JS</Title>
                <Sub>@2022 Mario Rudy Silalahi, All Right Reserved</Sub>
            </SkillUsed>
        </Container>
    )
}

export default Footer
