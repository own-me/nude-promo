import React from "react";
import styled from "styled-components";

const HeroTextContainer = styled.div`
    max-width: 765px;
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
    font-size: 30px;
    margin: 20px 0px 40px 20px;
    letter-spacing: 3px;

    @media screen and (max-width: 1200px) {
        font-size: 30px;
        margin: 20px 0px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        margin: 10px 0px;
    }
`;

const Colored1 = styled.span`
    color: #FB74FE;
`;

const Colored2 = styled.span`
    color: #4B48FD;
`;

export default function HeroText() {    
    return (
        <HeroTextContainer>
            <MainText>
                Buy, trade, sell, view and promote your hottest digital <FancyTextAssets>"assets"</FancyTextAssets> as <FancyTextNFTs>NFTs</FancyTextNFTs>
            </MainText>
            <SubText>Our home for <Colored1>adult content </Colored1>in the <Colored2>web3 metaverse.</Colored2></SubText>
        </HeroTextContainer>
    );
};