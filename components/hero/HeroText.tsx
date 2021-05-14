import React from "react";
import styled from "styled-components";

const HeroTextContainer = styled.div`
    max-width: 600px;
`;

const MainText = styled.span`
    font-family: Yeseva One, Open Sans;
    font-size: 40px;
    line-height: 2.0;
`;

const FancyTextAssets = styled.span`
    font-family: Rock Salt, Open Sans;
    color: #D83DFF;
`;

const FancyTextNFTs = styled.span`
    font-family: Rock Salt, Open Sans;
    color: #269ADB;
`;

export default function HeroText() {
    return (
        <HeroTextContainer>
            <MainText>
                Buy, trade, sell, view and promote your hottest digital <FancyTextAssets>"assets"</FancyTextAssets> as <FancyTextNFTs>NFTs</FancyTextNFTs>
            </MainText>
        </HeroTextContainer>
    );
};