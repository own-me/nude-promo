import React from "react";
import styled from "styled-components";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

const HeroContainer = styled.div`
    margin: 200px 50px 50px; 0px;
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
            <HeroButton />
        </HeroContainer>
    );
};