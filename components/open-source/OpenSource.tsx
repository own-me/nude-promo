import React from "react";
import styled from "styled-components";
import OpenSourceText from "./OpenSourceText";
import { openSourceData } from "./config";
import github from "./../../media/github.svg"


const PageContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: row;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BlueBanner = styled.div`
    background-color: #6AF6FF;
    position: absolute;
    height: 600px;
    width: 120%;
    z-index: -1;
    transform: rotate(-8deg);
    left:0px;
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
    margin-left: 251px;
`

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
            <InnerContainer>
            <GitHub src={github} />
            </InnerContainer>
        </PageContainer>
    );
};