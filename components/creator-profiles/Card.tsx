import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    @media screen and (max-width: 600px) {
        margin: 20px 0px;
    }
`;

const Title = styled.div<{ $color: string }>`
    font-size: 30px;
    font-family: Rock Salt, Open Sans;
    color: ${props => props.$color};

    @media screen and (max-width: 600px) {
        font-size: 22px;
    }
`;

const Text = styled.div`
    font-size: 25px;
    font-family: Poppins, Open Sans;
    padding: 10px 40px 40px 10px;

    @media screen and (max-width: 600px) {
        padding: 5px;
        font-size: 20px;
    }
`;

export default function Card({ title, text, color }) {
    return (
        <CardContainer>
            <Title $color={color}>{title}</Title>
            <Text>{text}</Text>
        </CardContainer>
    );
};