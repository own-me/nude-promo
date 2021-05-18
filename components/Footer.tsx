import React from "react";
import styled from "styled-components";
import discordIcon from "../media/icons/discord/negative.svg";
import instagramIcon from "../media/icons/instagram/negative.svg";
import linkedinIcon from "../media/icons/linkedin/negative.svg";
import mediumIcon from "../media/icons/medium/negative.svg";
import telegramIcon from "../media/icons/telegram/negative.svg";
import twitterIcon from "../media/icons/twitter/negative.svg";

const FooterContainer = styled.div`
    height: 350px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: Poppins, Open Sans;
    background-color: #D842FE;
    padding: 60px;
`;

const SocialsContainer = styled.div`

`;

const SocialsHeader = styled.div`
    font-size: 36px;
    text-decoration: underline;
    margin-bottom: 50px;
    margin-left: 25px;
`;

const SocialsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
`;

const SocialIcon = styled.img`
    margin: 40px;
`;

const FootnoteContainer = styled.div`

`;

export default function Footer() {
    return (
        <FooterContainer>
            <SocialsContainer>
                <SocialsHeader>Get Involved</SocialsHeader>
                <SocialsGrid>
                    <SocialIcon src={discordIcon} />
                    <SocialIcon src={instagramIcon} />
                    <SocialIcon src={twitterIcon} />
                    <SocialIcon src={linkedinIcon} />
                    <SocialIcon src={mediumIcon} />
                    <SocialIcon src={telegramIcon} />
                </SocialsGrid>
            </SocialsContainer>
        </FooterContainer>
    );
};