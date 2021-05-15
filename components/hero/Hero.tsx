import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import candyHero from "../../media/candy-hero.svg";

const HeroContainer = styled.div`
    margin: 200px 50px 50px; 0px;
`;

const HeroImage = styled.img`
    position: absolute;
    right: 7%;
    height: 400px;
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
            <HeroButton />
            <HeroImage src={candyHero} />
        </HeroContainer>
    );
};