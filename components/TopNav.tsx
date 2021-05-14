import React from "react";
import styled from "styled-components";
import logo from "../media/logo.svg";

const TopNavContainer = styled.div`
    width: 100%;
    height: 50px;
`;

const BrandContainer = styled.div`

`;

const BrandLogo = styled.img`

`;

export default function TopNav() {
    return (
        <TopNavContainer>
            <BrandContainer>
                <BrandLogo src={logo} />
            </BrandContainer>
        </TopNavContainer>
    );
};