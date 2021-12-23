import React from "react";
import styled from "styled-components";
import { moderationData } from "./config";
import ModerationRow from "./ModerationRow";

const ModerationContainer = styled.div`
    z-index: 1;
    padding-bottom: 50px;
`;

const ModerationContent = styled.div`
    padding-top: 50px;

    @media screen and (max-width: 1200px) {
        padding-top: 0px;
    }
`;

const ModerationHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 25px;
        text-align: center;
    }
`;

export default function Moderation() {
    return (
        <ModerationContainer id="moderation">
            <ModerationHeader>
                Moderation and Safety
            </ModerationHeader>
            <ModerationContent>
                {
                    moderationData.map(({ title, image, text, backgroundColor, triangle }, index) => {
                        return <ModerationRow
                            title={title}
                            image={image}
                            text={text}
                            backgroundColor={backgroundColor}
                            triangle={triangle}
                            key={index}
                        />
                    })
                }
            </ModerationContent>
        </ModerationContainer>
    );
}; 