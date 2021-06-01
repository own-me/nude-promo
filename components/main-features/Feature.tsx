import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
    min-height: 40%;
`;

const FeatureGrid = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 125px;
    align-items: center;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        margin-top: 50px;
    }
`;

const FeatureImage = styled.img`
    width: 80%;
    max-width: 500px;
    max-height: 500px;
    flex-grow: 1;

    @media screen and (min-width: 1200px) {
        display: block;
    }
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const FeatureImageMobile = styled.img`
    width: 80%;
    max-width: 500px;
    flex-grow: 1;
    margin-bottom: 50px;

    @media screen and (min-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 1200px) {
        display: block;
    }
    @media screen and (max-width: 600px) {
        max-width: 300px;
        margin-bottom: 25px;
    }
`;

const FeatureTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 75px;

    @media screen and (max-width: 1200px) {
        padding: 0px;
    }
`;

const FeatureTextHeader = styled.div`
    font-family: Rock Salt, Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 35px;
    }
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

const FeatureText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins, Open Sans;
    
    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
        font-size: 25px;
    }
    @media screen and (max-width: 600px) {
        margin: 20px 0px;
        font-size: 22px;
    }
`;

export default function Feature({ image, header, text1, text2, imagePosition }) {
    return (
        <FeatureContainer>
            <FeatureGrid>
                <FeatureImageMobile src={image} />
                {
                    imagePosition === "left" && <FeatureImage src={image} />
                }
                <FeatureTextContainer>
                    <FeatureTextHeader>
                        {header}
                    </FeatureTextHeader>
                    <FeatureText>
                        {text1}
                    </FeatureText>
                    <FeatureText>
                        {text2}
                    </FeatureText>
                </FeatureTextContainer>
                {
                    imagePosition === "right" && <FeatureImage src={image} />
                }
            </FeatureGrid>
        </FeatureContainer>
    );
};