import React from "react";
import styled from "styled-components";

const FundingTextContainer = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 25px;
    padding: 20px 5%;

    @media screen and (max-width: 600px) {
        font-size: 20px;
        padding: 20px 5%;
    }
`;

const BoldText = styled.span`
    font-family: Yeseva One, Open Sans;
    display: block;
    margin-bottom: 10px;
    font-size: 34px;

    @media screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

export default function FundingText({ boldText, mainText }) {
    return (
        <FundingTextContainer>
            <BoldText>{boldText}</BoldText>
            {mainText}
        </FundingTextContainer>
    );
};