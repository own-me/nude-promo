import React from "react";
import styled from "styled-components";

const CardContainer = styled.div<{ background: string }>`
    height: 550px;
    max-width: 300px;
    background-color: ${props => props.background};
    padding: 30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    margin: 30px;

    @media screen and (max-width: 600px) {
        margin: 20px 5px;
    }
`;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 40px;
    font-size: 30px;
`;

const IconContainer = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

const Icon = styled.img`
    height: 150px;
`;

const Text = styled.div`
    color: white;
    font-size: 20px;
`;

export default function FeatureCard({ title, icon, text, background }) {
    return (
        <CardContainer background={background}>
            <Title>{title}</Title>
            <IconContainer>
                <Icon src={icon} />
            </IconContainer>
            <Text>{text}</Text>
        </CardContainer>
    );
};