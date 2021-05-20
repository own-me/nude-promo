import React from "react";
import styled from "styled-components";

const CardContainer = styled.div<{ background: string }>`
    height: 500px;
    width: 250px;
    background-color: ${props => props.background};
    padding: 30px;
`;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 40px;
`;

const IconContainer = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

const Icon = styled.img`
    height: 100px;
`;

const Text = styled.div`
    color: white;
    font-size: 18px;
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