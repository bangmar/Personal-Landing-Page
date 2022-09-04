import React from 'react'
import { CardContainer, CardHeader, CardImgContainer, CardImg, CardDesc, CardLink } from './styledCard'


function Card(props) {
    return (
        <CardContainer>
            <CardHeader>{props.title}</CardHeader>
            <CardImgContainer>
                <CardImg src={props.img}></CardImg>
            </CardImgContainer>
            <CardDesc>{props.desc}</CardDesc>
            <CardLink href={props.link} target='_blank'>get code</CardLink>
        </CardContainer>
    )
}

export default Card
