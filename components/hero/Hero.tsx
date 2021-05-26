import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import bitch from "../../media/bitch.png";

const HeroContainer = styled.div`
    margin: 200px 50px 50px 0px;
    height: calc(100% - 340px);

    @media screen and (max-width: 1200px) {
        margin: 100px 0px 0px 0px;
        text-align: center;
        height: calc(100vh - 130px);
    }
`;

const HeroImage = styled.img`
    position: absolute;
    width: 25%;
    top: 25%;
    right: 7%;

    @media screen and (max-width: 1200px) {
        display: none;
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
        </HeroContainer>
    );
};