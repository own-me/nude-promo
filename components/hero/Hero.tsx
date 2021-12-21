import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import bitch from "../../media/bitch.png";
import banner from "../../media/banner.png";

const HeroContainer = styled.div`
    margin: 7vh 50px 50px 0px;
    height: calc(100% - 50px);

    @media screen and (max-width: 1200px) {
        margin: 60px 0px 0px 0px;
        text-align: center;
        height: calc(100vh - 130px);
    }
    @media screen and (max-width: 600px) {
        padding: 10px 2%;
        margin: 10px 0px 0px 0px;
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

    @media screen and (max-width: 1200px) {
        bottom: 20%;
    }
`;

const HeroImageMobile = styled.img`
    width: 25%;
    @media screen and (min-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 1200px) {
        width: 25vh;
    }
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
            <HeroImageMobile src={bitch} />
            <HeroButton />
            <HeroImage src={bitch} />
            <HeroBannerImage src={banner} />
        </HeroContainer>
    );
};