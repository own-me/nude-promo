import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    margin-bottom: 40px;
    font-size: 30px;
`;


const Text = styled.div`
    color: black;
    font-size: 20px;
`;

interface OpenSourceTextProperties {
    title: string;
    text: string;
};

export default function OpenSourceText({ title, text }: OpenSourceTextProperties) {
    return (
        <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </TextContainer>
    )
};