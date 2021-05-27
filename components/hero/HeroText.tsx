import React from "react";
import styled from "styled-components";

const HeroTextContainer = styled.div`
    max-width: 700px;
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
        max-width: 100%;
    }
`;

const MainText = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 55px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    margin: 20px 0px;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 26px;
        margin: 5px 0px;
    }
`;

const FancyTextAssets = styled.span`
    font-family: Rock Salt, Open Sans;
    color: #D83DFF;
`;

const FancyTextNFTs = styled.span`
    font-family: Rock Salt, Open Sans;
    color: #269ADB;
`;

const SubText = styled.div`
    font-family: Shadows Into Light, Open Sans;
    color: #2A2825;
    font-size: 35px;
    margin: 20px 0px 40px 20px;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 30px;
        margin: 20px 0px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        margin: 10px 0px;
    }
`;

const ColoredStar = styled.span`
    color: #FB74FE;
`;

export default function HeroText() {    
    return (
        <HeroTextContainer>
            <MainText>
                Buy, trade, sell, view and promote your hottest digital <FancyTextAssets>"assets"</FancyTextAssets> as <FancyTextNFTs>NFTs</FancyTextNFTs>
            </MainText>
            <SubText>Promiscuous <ColoredStar>*</ColoredStar> Dangerous <ColoredStar>*</ColoredStar> Lucrative</SubText>
        </HeroTextContainer>
    );
};