import React from "react";
import styled from "styled-components";
import { builtWithData } from "./config";

const BuiltWithContainer = styled.div`
    margin: 20px 0px 20px 0px;
`;

const BuiltWithHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 40px;
        text-align: left;
    }
`;

const BuiltWithTeamGrid = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0px 20px 0px;
    @media screen and (max-width: 600px) {
        padding: 20px 0px;
    }
`;

const BuiltWithIcons = styled.img`
    height: 200px;
    width: 180px; 
    margin: 20px;
    @media screen and (max-width: 1500px) {
        padding: 0px 60px 0px 60px;
    }
    @media screen and (max-width: 780px) {
        margin: 0px;
    }
`;

export default function BuiltWith() {
    return (
        <BuiltWithContainer>
            <BuiltWithHeader>Built With...</BuiltWithHeader>
            <BuiltWithTeamGrid>
                {builtWithData.map((value, index) => {
                    return <a href={value.url} target="blank" key={index} ><BuiltWithIcons src={value.icon} /> </a>
                }
                )}
            </BuiltWithTeamGrid>
        </BuiltWithContainer>
    )
};