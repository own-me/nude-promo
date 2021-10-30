import React from "react";
import styled from "styled-components";
import { moderationData } from "./config";
import ModerationRow from "./ModerationRow";


const ModerationContainer = styled.div`
    z-index: 1;
`;

const ModerationHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    padding:50px 0px;
        @media screen and (max-width: 1200px) {
        font-size: 32px;
        text-align: center;
        }

`;

export default function Moderation() {
    return (
        <ModerationContainer id="moderation">
            <ModerationHeader>
                Moderation and Safety
            </ModerationHeader>
        
           
            {
                moderationData.map(({ title, image, text, backgroundColor }, index) => {
                    return <ModerationRow 
                                title={title} 
                                image={image} 
                                text={text} 
                                backgroundColor={backgroundColor} 
                                key={index} 
                            />
                })
            }
            
        </ModerationContainer>
    );
};