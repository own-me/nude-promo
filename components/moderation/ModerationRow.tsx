import React from "react";
import styled from "styled-components";

const HiddenRow = styled.div`
    width: 100%;
    display: flexbox;
    align-items: center;
    align-content: stretch; 
    gap: 15%;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap-reverse ;
        flex-direction: column-reverse;
        align-items: center;
        align-content: center;
        justify-content: center;
    }    
`;

const ModerationRowContainer = styled.div<{ backgroundColor: string }>`
    max-width: 50%;
    background-color: ${props => props.backgroundColor};
    padding: 30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    margin: 30px;
    position: relative;

    @media screen and (max-width: 1200px) {
        max-width: 100%;
        margin: 0;
    }    
`;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 0;
    font-size: 32px;
    font-family: Poppins, Open Sans;

    @media screen and (max-width: 600px) {
        font-size: 24px;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 12px;
    }  
`;

const Text = styled.div`
    color: white;
    font-size: 23px;
    font-family: Poppins,Open Sans;
    text-align: left;
`;

const ModImg = styled.img`
    width: 200px;
    justify-content:center;

    @media screen and (max-width: 1200px) {
        justify-content: center;
        padding-top: 50px;
        position: relative;
        top: 25px;
    }
`;

const Triangle = styled.img`
    position: absolute;
    height: 110px;
    top: 34%;
    right: -80px;

    @media screen and (max-width: 1200px) {
        display: none;
    }    
`;

export default function ModerationRow({ title, text, image, backgroundColor, triangle }) {
    return (
        <HiddenRow>
            <ModerationRowContainer backgroundColor={backgroundColor}>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Triangle src={triangle} />
            </ModerationRowContainer>
            <ModImg src={image} />
        </HiddenRow>
    );
};