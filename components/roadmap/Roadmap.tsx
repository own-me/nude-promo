import React from "react";
import styled from "styled-components";
import RoadmapMobile from "./RoadmapMobile";
import RoadmapDesktop from "./RoadmapDesktop";

const RoadmapHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
`;

export default function Roadmap() {
    return (
        <>
            <RoadmapHeader>Roadmap</RoadmapHeader>
            <RoadmapMobile />
            <RoadmapDesktop />
        </>
    );
};