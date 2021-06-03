import React from "react";
import styled from "styled-components";
import FundingText from "./FundingText";
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

export default function Funding() {
    return (
        <FundingContainer>
            <FundingHeader>Funding</FundingHeader>
            {
                fundingTextData.map(({ boldText, mainText }, index) => {
                    return <FundingText boldText={boldText} mainText={mainText} key={index} />
                })
            }
        </FundingContainer>
    );
};