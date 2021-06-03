import React from "react";
import styled from "styled-components";

const FundingTextContainer = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 30px;
    padding: 20px 10%;
`;

const BoldText = styled.span`
    font-family: Yeseva One, Open Sans;
    font-size: 32px;
`;

export default function FundingText({ boldText, mainText }) {
    return (
        <FundingTextContainer>
            <BoldText>{boldText}</BoldText>
            {mainText}
        </FundingTextContainer>
    );
};