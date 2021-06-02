import React from "react";
import styled from "styled-components";
import { teamData, missingTeamData } from "./config";
import TeamProfile from "./TeamProfile";
import TeamMissing from "./TeamMissing";

const TeamContainer = styled.div`

`;

const TeamHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 40px;
        text-align: center;
    }
`;

const TeamGrid = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    padding: 100px 0px 20px 0px;
    @media screen and (max-width: 600px) {
        padding: 20px 0px;
    }
`;

const TeamMissingGrid = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    padding: 0px 0px 100px 0px;
    @media screen and (max-width: 600px) {
        padding: 0px 0px 20px 0px;
    }
`;

export default function Team() {
    return (
        <TeamContainer>
            <TeamHeader>Our Team</TeamHeader>
            <TeamGrid>
                {
                    teamData.map(({ name, image, title, color }, index) => {
                        return <TeamProfile name={name} image={image} title={title} color={color} key={index} />
                    })
                }
            </TeamGrid>
            <TeamMissingGrid>
                {
                    missingTeamData.map(({ title }, index) => {
                        return <TeamMissing title={title} key={index} />
                    })
                }
            </TeamMissingGrid>
        </TeamContainer>
    );
};