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
    padding: 50px 0px;
    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export default function RoadmapMobile() {
    return (
        <RoadmapContainer>

        </RoadmapContainer>
    );
};