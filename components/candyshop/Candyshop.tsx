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
`;

const CandyshopGrid = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 200px;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
    }
`;

const CandyshopImage = styled.img`
    width: 80%;
    max-width: 500px;
    flex-grow: 1;
    margin-bottom: 50px;
`;

const CandyshopTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 50px;

    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
    }
`;

const CandyshopTextHeader = styled.div`
    font-family: Rock Salt,Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 35px;
    }
`;

const CandyshopText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;
    padding: 0px 50px;

    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
        font-size: 25px;
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