import React from "react";
import { useState } from "react";
import { Container, Heading3, Thanks, DownloadBtn,ThanksBtn, Desc } from "./styledCV";

import { FaCheck } from 'react-icons/fa';


const CV = () => {
    const [isClicked, setIsClicked] = useState(true)

    const onButtonClick = () => {
        fetch('CV_MarioRS.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mario Rudy S - CV.pdf';
                alink.click();
                setIsClicked(false)
            })
        })
    }
    
    return (
        <Container>
            <Thanks>
                <Heading3>CLICK DOWNLOAD TO SEE MY CV</Heading3>
                {
                    (isClicked) ? <DownloadBtn onClick={onButtonClick }>Download</DownloadBtn> : <ThanksBtn><FaCheck/></ThanksBtn>

                }
                <Desc>*refresh page if download dont start after button clicked</Desc>
            </Thanks>
        </Container>
    );
};

export default CV;