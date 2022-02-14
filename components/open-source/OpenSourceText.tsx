import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 530px;
  margin: 40px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    font-family: Yeseva One, Open Sans;
`;


const Text = styled.div`
    color: black;
    font-size: 26px;
    font-family: Roboto, sans-serif;
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