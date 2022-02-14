import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 530px;
  margin-top: 50px;
`;

const Title = styled.h2`
    color: black;
    margin-bottom: 40px;
    font-size: 48px;
    font-family: Yeseva One, Open Sans;
        @media screen and (max-width: 1200px) {
            font-size: 40px;
        }
        @media screen and (max-width: 600px) {
            font-size: 35px;
            margin-top: 0px;
        }
`;

const Text = styled.div`
    color: black;
    font-size: 26px;
    font-family: Roboto, sans-serif;

    @media screen and (max-width: 600px) {
        font-size: 23px;
    }
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