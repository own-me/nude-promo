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
    flex-direction: column;
    padding: 0px 0px 50px 0px;
    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

const RoadmapItem = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const RoadmapItemText = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    width: 200px;
    margin-left: 20px;
    @media screen and (max-width: 1200px) {
        width: 180px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const RoadmapCandy = styled.img`
    max-width: 100%;
    height: 100px;
    padding: 20px;
    @media screen and (max-width: 600px) {
        height: 85px;
    }
`;

const HorizontalLineContainer = styled.div`
    height: 100%;
    width: 100px;
    padding: 0px 10px;
    @media screen and (max-width: 1200px) {
        width: 40px;
    }
`;

const HorizontalLineSection = styled.div`
    border-bottom: solid #ee98fd 2px;
    height: 50%;
`;

const VerticalLine = styled.div<{ $offset?: boolean }>`
    border-left: 2px solid #bfbfbf;
    position: relative;
    top: 100px;
    left: 75px;
    height: 100%;
    z-index: -1;
    @media screen and (max-width: 600px) {
        left: 65px;
    }
`;

export default function RoadmapMobile() {
    return (
        <RoadmapContainer>
            <RoadmapItem>
                <VerticalLine />
                <RoadmapCandy src={candy} />
                <HorizontalLineContainer>
                    <HorizontalLineSection />
                </HorizontalLineContainer>
                <RoadmapItemText>
                    Build community, team and ideas.
                </RoadmapItemText>
            </RoadmapItem>

            <RoadmapItem>
                <VerticalLine />
                <RoadmapCandy src={candy1} />
                <HorizontalLineContainer>
                    <HorizontalLineSection />
                </HorizontalLineContainer>
                <RoadmapItemText>
                    Testnet Launch.
                </RoadmapItemText>
            </RoadmapItem>

            <RoadmapItem>
                <VerticalLine />
                <RoadmapCandy src={candy2} />
                <HorizontalLineContainer>
                    <HorizontalLineSection />
                </HorizontalLineContainer>
                <RoadmapItemText>
                    Audit, test and review.
                </RoadmapItemText>
            </RoadmapItem>

            <RoadmapItem>
                <RoadmapCandy src={candy3} />
                <HorizontalLineContainer>
                    <HorizontalLineSection />
                </HorizontalLineContainer>
                <RoadmapItemText>
                    Mainnet Launch.
                </RoadmapItemText>
            </RoadmapItem>
        </RoadmapContainer>
    );
};