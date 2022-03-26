import React from "react";
import styled from "styled-components";
import OpenSourceText from "./OpenSourceText";
import { openSourceData } from "./config";
import github from "../../media/github.svg"
import { socialLinks } from "../../constants";

const PageContainer = styled.div`
    margin: 75px 0px 215px 0px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const InnerLeftContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    padding-top: 50px;
`;

const InnerRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 155px;

    @media screen and (max-width: 1046px) {
        padding-top: 100px;
    }
`;

const BlueBanner = styled.div`
    background-color: #000632bf;
    position: absolute;
    height: 850px;
    width: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 93%);
    @media screen and (max-width: 894px) {
        height: 1250px;
    }
`;

const GitHub = styled.img`
    height: 400px;

    @media screen and (max-width: 1046px) {
        height: 275px;
    }
`;

const Button = styled.button`
    margin-top: 15px;
    padding: 10px 25px;
    text-align: center;
    transition: all 0.5s ease-out;
    font-size: 22px;
    color: #fff;
    border-radius: 5px;
    background-size: 200% auto;
    box-shadow: 0px 0px 15px 0 rgba(0,0,0,.1);
    cursor: pointer;
    border: none;
    background-image: linear-gradient(135deg,#40b3ff 0%,#4c15ff 51%,#1574ff 100%);

    :hover{
        background-position: right center;
    }
`;

const GithubButton = styled.button`
    background-color: #222222;
    color: white;
    font-family: Poppins, Open Sans;
    font-size: 28px;
    height: 65px;
    width: 270px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    transition: .3s linear;
    border: 0px;
    margin-top: 25px;

    &:hover{
        background-color: #333333;
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
                <a href={"https://github.com/own-me"} target="_blank"><GithubButton>Read our Code</GithubButton></a>
                <a href={socialLinks.discord.url} target="_blank"><Button>Chat with Devs</Button></a>
            </InnerRightContainer>
        </PageContainer>
    );
};