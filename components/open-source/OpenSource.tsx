import React from "react";
import styled from "styled-components";
import OpenSourceText from "./OpenSourceText";
import { openSourceData } from "./config";
import github from "./../../media/github.svg"

const PageContainer = styled.div`
    padding: 20px;
    margin: 180px 0px 300px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column; 
`;

const BlueBanner = styled.div`
    background-color: #6AF6FF;
    position: absolute;
    height: 650px;
    width: 120%;
    z-index: -1;
    transform: rotate(-8deg);
    left: -70px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    margin-bottom: 40px;
    font-size: 30px;
`;

const Text = styled.div`
    color: black;
    font-size: 20px;
`;

const GitHub = styled.img`
    height: 300px;
    margin-bottom: 100px;
`;

const GithubButton = styled.button`
    background-color: #FF81EB;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 28px;
    height: 85px;
    width: 270px;
    margin-top: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 0px;
`;

const DevDiscordButton = styled.button`
    background-color: #2DCDFF;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 20px;
    height: 40px;
    width: 225px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default function OpenSource() {
    return (
        <PageContainer>
            <BlueBanner />
            <InnerContainer>
                {
                    openSourceData.map(({ title, text }, index) => {
                        return <OpenSourceText title={title} text={text} key={index} />
                    })
                }
            </InnerContainer>
            <InnerContainer style={{ alignItems: "center", justifyContent:"flex-end" }}>
                <GitHub src={github} />
                <DevDiscordButton>Devs in Discord</DevDiscordButton>
                <GithubButton>Visit our Github</GithubButton>
            </InnerContainer>
        </PageContainer>
    );
};