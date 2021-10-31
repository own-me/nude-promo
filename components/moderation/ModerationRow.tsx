import React from "react";
import styled from "styled-components";

const HiddenRow = styled.div`
    width:100%;
    display: flexbox;
    align-items: center;
    align-content: stretch; 
    gap: 20%;
    @media screen and (max-width: 1200px) {
        flex-wrap: wrap-reverse ;
        flex-direction: column-reverse;
        align-items: center;
        align-content: center;
        justify-content: center;
    }    
`;

const ModerationRowContainer = styled.div<{ backgroundColor: string }>`
    height: 200px;
    max-width: 50%;
    background-color: ${props => props.backgroundColor};
    padding: 30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    margin: 30px;   
    @media screen and (max-width: 1200px) {
        height: 400px;
        max-width: 300px;
    }
`;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 10px;
    font-size: 30px;
    font-family: Rock Salt, Open Sans;
    @media screen and (max-width: 600px) {
        font-size: 24px;
    }
`;

const Text = styled.div`
    color: white;
    font-size: 20px;
    font-family: Poppins,Open Sans;
    text-align: center;
    @media screen and (max-width: 600px) {
        margin-top: 20%;
    }
`;

const ModImg = styled.img`
    width: 200px;
    justify-content:center;
    @media screen and (max-width: 1200px) {
        justify-content: center;
        padding: 60px 0px;
    }
`;

export default function ModerationRow({ title, text, image, backgroundColor }) {
    return (
        <HiddenRow>
            <ModerationRowContainer backgroundColor={backgroundColor}>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </ModerationRowContainer>
            <ModImg src={image} />
        </HiddenRow>
    );
};