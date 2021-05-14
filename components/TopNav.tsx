import React from "react";
import styled from "styled-components";

const TopNavContainer = styled.div`
    width: 100%;
    height: 50px;
`;

const BrandContainer = styled.div`

`;

const BrandText = styled.span`
    font-family: Rock Salt, Open Sans;
    font-size: 50px;
    color: #D842FE;
`;

const BrandLogo = styled.img`

`;

export default function TopNav() {
    return (
        <TopNavContainer>
            <BrandContainer>
                <BrandText>Own Me</BrandText>
                <BrandLogo src="" />
            </BrandContainer>
        </TopNavContainer>
    );
};