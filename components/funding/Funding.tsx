import React from "react";
import styled from "styled-components";
import FundingText from "./FundingText";
import FundingCard from "./FundingCard";
import { fundingTextData, fundingCardData } from "./config";

const FundingContainer = styled.div`
    
`;

const FundingHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 40px;
        text-align: center;
    }
`;

const FundingCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    margin: 40px 0px;
`;

export default function Funding() {
    return (
        <FundingContainer>
            <FundingHeader>Funding</FundingHeader>
            {
                fundingTextData.map(({ boldText, mainText }, index) => {
                    return <FundingText boldText={boldText} mainText={mainText} key={index} />
                })
            }
            <FundingCardsContainer>
                {
                    fundingCardData.map(({ title, text }, index) => {
                        return <FundingCard title={title} text={text} key={index} />
                    })
                }
            </FundingCardsContainer>
        </FundingContainer>
    );
};