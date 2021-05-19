import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import bitch from "../../media/bitch.png";

const HeroContainer = styled.div`
    margin: 200px 50px 50px; 0px;
`;

const HeroImage = styled.img`
    position: absolute;
    height: 800px;
    top: 30%;
    right: 7%;
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
            <HeroButton />
            <HeroImage src={bitch} />
        </HeroContainer>
    );
};