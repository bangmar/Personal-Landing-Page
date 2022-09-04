import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import {Container, Heading1,Heading1Wrapper, Heading5, Span, OptionWrapper, Option, List} from './styledHome'

function Home() {

    const teks = ["Programmer", "Developer", "Enginner"]
    const [option, setOption] = useState(teks[0])

    const clicked = (e) => {
        setOption(e.target.innerText)
    }


    return (
        <Container>
            <Heading5>Hola, I’m <Span>Mario Rudy Silalahi</Span></Heading5>
            <Heading1Wrapper>
                <Heading1>
                    An enthusiastic
                </Heading1>
                <Heading1>
                    <Span>
                    <Typewriter
                            options={{
                                strings: `${option}`,
                                autoStart: true,
                                loop: false,
                                wrapperClassName:Span
                            }}
                        />
                    </Span>
                </Heading1>
            </Heading1Wrapper>

            <OptionWrapper>
                <Option>
                    {teks.map((item, key) => {
                                return <List key={key} onClick={clicked} >{item}</List>
                    })}
                </Option>
            </OptionWrapper>
                    
        </Container>
        
    )
}

export default Home