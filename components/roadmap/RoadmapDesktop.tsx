import React from "react";
import styled from "styled-components";
import candy from "../../media/roadmap/candy.svg";
import candy1 from "../../media/roadmap/candy1.svg";
import candy2 from "../../media/roadmap/candy2.svg";
import candy3 from "../../media/roadmap/candy3.svg";

const RoadmapContainer = styled.div`
    width: 100%;
    min-height: 40%;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const RoadmapItem = styled.div<{ $offset?: boolean }>`
    height: 200px;
    width: 100%;
    text-align: center;
    ${props => props.$offset ? "margin-top: 172px" : ""};
`;

const RoadmapItemText = styled.div`
    padding: 20px;
    font-family: Poppins, Open Sans;
    font-size: 22px;
    margin: 0 auto;
    width: 200px;
`;

const RoadmapCandy = styled.img`
    max-width: 100%;
    height: 100px;
    padding: 20px;
`;

const VerticalLineContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 75px;
`;

const VerticalLineSection = styled.div`
    border-right: solid #ee98fd 2px;
    height: 100%;
`;

const HorizontalLine = styled.div<{ $offset?: boolean }>`
    border-bottom: 2px solid #bfbfbf;
    position: relative;
    top: ${props => props.$offset ? "-210px" : "-70px"};
    left: 50%;
    z-index: -1;
`;

export default function RoadmapDesktop() {
    return (
        <RoadmapContainer>
            <RoadmapItem>
                <RoadmapItemText>Build community, team and ideas.</RoadmapItemText>
                <VerticalLineContainer>
                    <VerticalLineSection />
                </VerticalLineContainer>
                <RoadmapCandy src={candy} />
                <HorizontalLine />
            </RoadmapItem>

            <RoadmapItem $offset={true}>
                <RoadmapCandy src={candy1} />
                <VerticalLineContainer>
                    <VerticalLineSection />
                </VerticalLineContainer>
                <RoadmapItemText>Testnet Launch.</RoadmapItemText>
                <HorizontalLine $offset={true} />
            </RoadmapItem>

            <RoadmapItem>
                <RoadmapItemText>Audit, test and review.</RoadmapItemText>
                <VerticalLineContainer>
                    <VerticalLineSection />
                </VerticalLineContainer>
                <RoadmapCandy src={candy2} />
                <HorizontalLine />
            </RoadmapItem>

            <RoadmapItem $offset={true}>
                <RoadmapCandy src={candy3} />
                <VerticalLineContainer>
                    <VerticalLineSection />
                </VerticalLineContainer>
                <RoadmapItemText>Mainnet Launch.</RoadmapItemText>
            </RoadmapItem>
        </RoadmapContainer>
    );
};