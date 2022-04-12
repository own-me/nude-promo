import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {cardData} from "./config";

const CreatorProfilesContainer = styled.div`
    min-height: 800px;
    margin-top: 50px;
`;

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 75px;
    @media screen and (max-width: 600px) {
        padding: 10px;
    }
`;

const MainHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 45px;
    }
    @media screen and (max-width: 600px) {
        font-size: 32px;
        text-align: center;
    }
`;

export default function CreatorProfiles() {
    return (
        <CreatorProfilesContainer>
            <MainHeader>Creator Profiles</MainHeader>
            <CardGrid>
                {
                    cardData.map(({ title, text, color }, index) => {
                        return <Card title={title} text={text} color={color} key={index} />
                    })
                }
            </CardGrid>
        </CreatorProfilesContainer>
    );
};