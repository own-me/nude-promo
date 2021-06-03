import React from "react";
import styled from "styled-components";

const FundingCardContainer = styled.div`
    margin: 30px;
`;

const FundingCardTitle = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 38px;
    text-align: center;
    margin-bottom: 10px;
`;

const FundingCardBox = styled.div<{ $borderColor: string }>`
    display: flex;
    align-items: center;
    border: 4px solid ${props => props.$borderColor};
    height: 200px;
    width: 500px;
    padding: 30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
`;

const FundingCardText = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
`;

export default function FundingCard({ title, text, color }) {
    return (
        <FundingCardContainer>
            <FundingCardTitle>{title}</FundingCardTitle>
            <FundingCardBox $borderColor={color} >
                <FundingCardText>{text}</FundingCardText>
            </FundingCardBox>
        </FundingCardContainer>
    );
};