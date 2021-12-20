import React from "react";
import styled from "styled-components";
import discordIcon from "../media/icons/discord/negative.svg";
import instagramIcon from "../media/icons/instagram/negative.svg";
import linkedinIcon from "../media/icons/linkedin/negative.svg";
import mediumIcon from "../media/icons/medium/negative.svg";
import telegramIcon from "../media/icons/telegram/negative.svg";
import twitterIcon from "../media/icons/twitter/negative.svg";
import lolipop from "../media/lolipop.svg";
import { socialLinks } from "../constants";

const socialIcons = [
    {
        key: "discord",
        icon: discordIcon,
        url: socialLinks.discord.url
    },
    {
        key: "instagram",
        icon: instagramIcon,
        url: socialLinks.instagram.url
    },
    {
        key: "linkedin",
        icon: linkedinIcon,
        url: socialLinks.linkedin.url
    },
    {
        key: "medium",
        icon: mediumIcon,
        url: socialLinks.medium.url
    },
    {
        key: "telegram",
        icon: telegramIcon,
        url: socialLinks.telegram.url
    },
    {
        key: "twitter",
        icon: twitterIcon,
        url: socialLinks.twitter.url
    }
];

const FooterContainer = styled.div`
    height: 350px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: Poppins, Open Sans;
    background-color: #D842FE;
    padding: 60px;

    @media screen and (max-width: 600px) {
        height: 370px;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const SocialsHeader = styled.div`
    font-size: 36px;
    text-decoration: underline;
    margin-bottom: 50px;
    margin-left: 25px;
    font-weight: 600;

    @media screen and (max-width: 600px) {
        margin-bottom: 30px;
        margin-left: 0px;
        text-align: center;
    }
`;

const SocialsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
`;

const SocialLink = styled.a`
`;

const SocialIcon = styled.img`
    margin: 40px;

    @media screen and (max-width: 1200px) {
        margin: 30px;
    }
`;

const FootnoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        padding-top: 30px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const FootnoteText = styled.div`
    @media screen and (max-width: 600px) {
        font-size: 14px;
        text-align: right;
    }
`;

const Lolipop = styled.img`
    float: right;
    width: 60px;
    @media screen and (max-width: 600px) {
        width: 40px;
    }
`;

const Copyright = styled.div`
    @media screen and (min-width: 600px) {
        padding-top: 10px;
        font-size: 22px;
    }
`;

export default function Footer() {
    return (
        <FooterContainer id="footer">
            <SocialsContainer>
                <SocialsHeader>Get Involved</SocialsHeader>
                <SocialsGrid>
                    {
                        Object.values(socialIcons).map((value, index) => {
                            return <SocialLink href={value.url} target="_blank" key={index}><SocialIcon src={value.icon} /></SocialLink>
                        })
                    }
                </SocialsGrid>
            </SocialsContainer>
            <FootnoteContainer>
                <Lolipop src={lolipop} />
                <FootnoteText>
                    <div>Made by The Digital Labs</div>
                    <Copyright>&#169; {new Date().getFullYear()} Own Me Inc.</Copyright>
                </FootnoteText>
            </FootnoteContainer>
        </FooterContainer>
    );
};