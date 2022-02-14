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

const InnerLeftContainer = styled.div`
    display: flex;
    flex-direction: column; 
`;

const InnerRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
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
    margin-bottom: 145px;
`;

const DevDiscordButton = styled.button`
    background-color: #2DCDFF;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 20px;
    height: 40px;
    width: 225px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.495));
    border: 0px;
    &:hover{
            border: 3px solid #269ADB
        }
`;

const GithubButton = styled.button`
    background-color: #FF81EB;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 28px;
    height: 85px;
    width: 270px;
    margin-top: 20px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.317));
    border: 0px;

        &:hover{
            border: 3px solid #269ADB
        }
`;

export default function OpenSource() {
    return (
        <PageContainer>
            <BlueBanner />
            <InnerLeftContainer>
                {
                    openSourceData.map(({ title, text }, index) => {
                        return <OpenSourceText title={title} text={text} key={index} />
                    })
                }
            </InnerLeftContainer>
            <InnerRightContainer>
                <GitHub src={github} />
                <a href={"https://github.com/own-me"}><DevDiscordButton>Devs in Discord</DevDiscordButton></a>
                <GithubButton >Visit our Github</GithubButton>
            </InnerRightContainer>
        </PageContainer>
    );
};