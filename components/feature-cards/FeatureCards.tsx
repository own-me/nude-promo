import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import { featureCardsData } from "./config";

const FeatureCardsContainer = styled.div`
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

export default function FeatureCards() {
    return (
        <FeatureCardsContainer>
            {
                featureCardsData.map(({ title, icon, text, background }, index) => {
                    return <FeatureCard title={title} icon={icon} text={text} background={background} key={index} />
                })
            }
        </FeatureCardsContainer>
    );
};