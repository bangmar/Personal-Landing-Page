import React from 'react'
import { Container, Detail,SchName,SchLoc, SchInfo, SchMsg, SchInfoSpan, SchImg } from './styledSch'


function Sch(props) {
    return (
        <Container>
            <SchImg src={props.img}></SchImg>
            <Detail>
                <SchName>{props.name}</SchName>
                <SchLoc>{props.loc}</SchLoc>
                <SchInfo><SchInfoSpan>{props.study} {props.year}</SchInfoSpan></SchInfo>
                <SchMsg>{props.msg}</SchMsg>
            </Detail>
        </Container>
    )
}

export default Sch
