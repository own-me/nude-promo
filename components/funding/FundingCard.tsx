import React from "react";
import styled from "styled-components";

const FundingCardContainer = styled.div`
    margin: 20px;
`;

const FundingCardTitle = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 38px;
    text-align: center;
    margin-bottom: 5px;
`;

const FundingCardBox = styled.div`
    display: flex;
    align-items: center;
    border: 4px solid green;
    height: 200px;
    width: 500px;
    padding: 30px;
`;

const FundingCardText = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
`;

export default function FundingCard({ title, text }) {
    return (
        <FundingCardContainer>
            <FundingCardTitle>{title}</FundingCardTitle>
            <FundingCardBox>
                <FundingCardText>{text}</FundingCardText>
            </FundingCardBox>
        </FundingCardContainer>
    );
};