import React from "react";
import styled from "styled-components";
import candyshop from "../../media/candy-shop.svg";

const CandyshopContainer = styled.div`
    height: 65%;
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
    margin-top: 200px;
`;

const CandyshopImage = styled.img`
    height: 500px;
    flex-grow: 1;
`;

const CandyshopTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 50px;
`;

const CandyshopTextHeader = styled.div`
    font-family: Rock Salt,Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;
`;

const CandyshopText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;
    padding: 0px 50px;
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
                        Creators promote their posts for free and market their profiles to the world.
                    </CandyshopText>
                    <CandyshopText>
                        Collectors discover new creators and browse content that matches their interests.
                    </CandyshopText>
                </CandyshopTextContainer>
            </CandyshopGrid>
        </CandyshopContainer>
    );
};