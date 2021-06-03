import React from "react";
import styled from "styled-components";

const FundingContainer = styled.div`
    display: flex;
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
        </FundingContainer>
    );
};