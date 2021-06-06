import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {cardData} from "./config";

const CreatorProfilesContainer = styled.div`
    min-height: 800px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: Poppins, Open Sans;
    margin-top: 50px;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: column;
        padding: 50px 0px;
    }
    @media screen and (max-width: 600px) {
        padding: 20px 0px;
    }
`;

export default function CreatorProfiles() {
    return (
        <CreatorProfilesContainer>
            {
                cardData.map(({ title, text, color }, index) => {
                    return <Card title={title} text={text} color={color} key={index} />
                })
            }
        </CreatorProfilesContainer>
    );
};