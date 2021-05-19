import React from "react";
import styled from "styled-components";
import candyshop from "../../media/candy-shop.svg";

const CandyshopContainer = styled.div`
    height: 100%;
`;

const CandyshopHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 50px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
`;

const CandyshopImage = styled.img`

`;

export default function Hero() {
    return (
        <CandyshopContainer>
            <CandyshopHeader>
                For Creators and Collectors
            </CandyshopHeader>
            <CandyshopImage src={candyshop} />
        </CandyshopContainer>
    );
};