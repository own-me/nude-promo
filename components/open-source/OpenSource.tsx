import React from "react";
import styled from "styled-components";
import OpenSourceText from "./OpenSourceText";
import { openSourceData } from "./config";
import bluebanner from "./../../media/bluebanner.svg"

const PageContainer = styled.div`
 background-image: url(${bluebanner});
 height: 635px;
 padding: 80px;
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

export default function OpenSource() {
    return (
        <PageContainer>
            {
                openSourceData.map(({ title, text }, index) => {
                    return <OpenSourceText title={title} text={text} key={index}/> 
                })
            }
        </PageContainer>
    );
};