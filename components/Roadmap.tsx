import React from "react";
import styled from "styled-components";

const RoadmapContainer = styled.div`
    width: 100%;
    height: 60%;
`;

const RoadmapHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
`;

const RoadmapItem = styled.div`
    height: 200px;
    width: 250px;
`;

const RoadmapItemText = styled.div`
    padding: 20px;
    font-family: Poppins, Open Sans;
    font-size: 20px;
    text-align: center;
`;

const RoadmapCandy = styled.img`

`;

const VerticalLineContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 75px;
`;

const VerticalLineSection = styled.div`
    border-right: solid black 2px;
    height: 100%;
`;

export default function Roadmap() {
    return (
        <RoadmapContainer>
            <RoadmapHeader>Roadmap</RoadmapHeader>
            <RoadmapItem>
                <RoadmapItemText>Build community, team and ideas.</RoadmapItemText>
                <VerticalLineContainer>
                    <VerticalLineSection />
                </VerticalLineContainer>
            </RoadmapItem>
        </RoadmapContainer>
    );
};