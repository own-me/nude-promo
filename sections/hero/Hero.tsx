import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import lolipopGirl from "../../media/lolipop-girl.png";
import banner from "../../media/banner.png";
import TestNetButton from "./TestNetButton";

const HeroContainer = styled.div`
    margin: 7vh 50px 50px 50px;
    height: calc(100% - 50px);
    @media screen and (max-width: 1200px) {
        margin: 10px 0px 0px 0px;
        text-align: center;
        height: calc(100vh - 130px);
    }
    @media screen and (max-width: 600px) {
        padding: 10px 2%;
        height: calc(100% - 60px);
    }
`;

const HeroImage = styled.img`
    position: absolute;
    width: 25%;
    top: 25%;
    right: 10%;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const HeroBannerImage = styled.img`
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -20%;
    z-index: -2;
    @media screen and (max-width: 1400px) {
        bottom: 10%;
    }
    @media screen and (max-width: 600px) {
        bottom: 20%;
    }
    @media(min-height: 650px) and (max-height:800px) {
        bottom: -33%; 
    }
`;

const HeroImageMobile = styled.img`
    width: 25%;
    @media screen and (min-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 1200px) {
        width: 27vh;
        margin: 0px 70px 0px 70px;
    }
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
            <HeroButton />
            <TestNetButton />
            <HeroImageMobile src={lolipopGirl} />
            <HeroImage src={lolipopGirl} />
            <HeroBannerImage src={banner} />
        </HeroContainer>
    );
};