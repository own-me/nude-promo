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
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        margin: 180px 0px 200px 0px;
        }
`;

const InnerLeftContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    margin-top: 100px;
`;

const InnerRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
`;

const BlueBanner = styled.div`
    background-color: #6AF6FF;
    position: absolute;
    height: 800px;
    width: 130%;
    z-index: -1;
    transform: rotate(-8deg);
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
    margin-top: 140px;
`;

const DevDiscordButton = styled.button`
    background-color: #2DCDFF;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 20px;
    height: 40px;
    width: 225px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.495));
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    transition: .3s linear;
    border: 0px;
    &:hover{
        transform: rotateX(15deg);
         box-shadow: 0px 15px 15px #00a8ff;
        }
`;

const GithubButton = styled.button`
    background-color: #FF81EB;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 28px;
    height: 85px;
    width: 270px;
    margin-top: 30px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.317));
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    transition: .3s linear;
    border: 0px;

        &:hover{
            transform: rotateX(15deg);
         box-shadow: 0px 15px 15px #e375e3;
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
                <a href={"https://discord.gg/T9GyMU3S"}><DevDiscordButton>Devs in Discord</DevDiscordButton></a>
                <a href={"https://github.com/own-me"}><GithubButton >Visit our Github</GithubButton></a>
            </InnerRightContainer>
        </PageContainer>
    );
};