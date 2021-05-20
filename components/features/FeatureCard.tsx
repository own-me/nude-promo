import React from "react";
import styled from "styled-components";

const CardContainer = styled.div<{ background: string }>`
    height: 500px;
    width: 250px;
    background-color: ${props => props.background};
`;

const Title = styled.h2`
    color: white;
`;

const Icon = styled.img`
    height: 100px;
`;

const Text = styled.div`
    color: white;
`;

export default function FeatureCard({ title, icon, text, background }) {
    return (
        <CardContainer background={background}>
            <Title>{title}</Title>
            <Icon src={icon} />
            <Text>{text}</Text>
        </CardContainer>
    );
};