import React from "react";
import styled from "styled-components";
import { mainFeatures } from "./config";
import Feature from "./Feature";

const MainFeaturesHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;

    @media screen and (max-width: 1200px) {
        font-size: 45px;
    }
    @media screen and (max-width: 600px) {
        font-size: 32px;
        text-align: center;
    }
`;

export default function MainFeatures() {
    return (
        <>
            <MainFeaturesHeader>
                For Creators and Collectors
            </MainFeaturesHeader>
            {
                mainFeatures.map(({ header, image, text1, text2, imagePosition }, index) => {
                    return <Feature header={header} image={image} text1={text1} text2={text2} imagePosition={imagePosition} key={index} />
                })
            }
        </>
    );
};