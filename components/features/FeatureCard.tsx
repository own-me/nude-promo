import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    height: 500px;
    width: 250px;
    background-color: brown;
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

export default function FeatureCard({ title, icon, text }) {
    return (
        <CardContainer>
            <Title>{title}</Title>
            <Icon src={icon} />
            <Text>{text}</Text>
        </CardContainer>
    );
};