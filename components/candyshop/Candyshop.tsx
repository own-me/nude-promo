import React from "react";
import styled from "styled-components";
import candyshop from "../../media/candy-shop.svg";

const CandyshopContainer = styled.div`
    min-height: 65%;
`;

const CandyshopHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;

    @media screen and (max-width: 1200px) {
        font-size: 45px;
    }
    @media screen and (max-width: 600px) {
        font-size: 32px;
        text-align: center;
    }
`;

const CandyshopGrid = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 125px;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        margin-top: 50px;
    }
`;

const CandyshopImage = styled.img`
    width: 80%;
    max-width: 500px;
    flex-grow: 1;
    margin-bottom: 50px;

    @media screen and (max-width: 600px) {
        max-width: 300px;
        margin-bottom: 25px;
    }
`;

const CandyshopTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 75px;

    @media screen and (max-width: 1200px) {
        padding: 0px;
    }
`;

const CandyshopTextHeader = styled.div`
    font-family: Rock Salt, Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 35px;
    }
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

const CandyshopText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;

    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
        font-size: 25px;
    }
    @media screen and (max-width: 600px) {
        margin: 20px 0px;
        font-size: 22px;
    }
`;

export default function Candyshop() {
    return (
        <CandyshopContainer>
            <CandyshopHeader>
                For Creators and Collectors
            </CandyshopHeader>
            <CandyshopGrid>
                <CandyshopImage src={candyshop} />
                <CandyshopTextContainer>
                    <CandyshopTextHeader>
                        The Candy Shop
                    </CandyshopTextHeader>
                    <CandyshopText>
                        A place for creators to promote their posts for free and market their profiles to the world. We give both established and newer creators equal promotional opportunities.
                    </CandyshopText>
                    <CandyshopText>
                        Collectors discover new creators and browse content that matches their interests. Browse by category, gender, date, popularity and more.
                    </CandyshopText>
                </CandyshopTextContainer>
            </CandyshopGrid>
        </CandyshopContainer>
    );
};