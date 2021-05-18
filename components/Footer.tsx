import React from "react";
import styled from "styled-components";

import { navItems } from "../constants";

const FooterContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: Poppins, Open Sans;
    background-color: #D842FE;
`;

const SocialsContainer = styled.div`

`;

const SocialsHeader = styled.div`
    font-size: 36px;
    text-decoration: underline;

`;

const SocialsGrid = styled.div`

`;

const SocialIcon = styled.img`

`;

const FootnoteContainer = styled.div`

`;

export default function Footer() {
    return (
        <FooterContainer>
            <SocialsContainer>
                <SocialsHeader>Get Involved</SocialsHeader>
                <SocialsGrid>
            
                </SocialsGrid>
            </SocialsContainer>
        </FooterContainer>
    );
};