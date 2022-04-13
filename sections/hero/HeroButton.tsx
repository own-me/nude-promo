import React from "react";
import styled from "styled-components";
import { socialLinks } from "../../constants";
import discordIcon from "../../media/icons/discord/inverted.svg";

const Button = styled.button`
    margin: 10px;
    padding: 15px 25px;
    text-align: center;
    transition: all 0.5s ease-out;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
    background-size: 200% auto;
    box-shadow: 0px 0px 15px 0 rgba(0,0,0,.1);
    cursor: pointer;
    border: none;
    background-image: linear-gradient(135deg,#9240ff 0%,#d500ff 51%,#1574ff 100%);
    letter-spacing: 0.8;
    font-family: Poppins, Open Sans;
    :hover{
        background-position: right center;
        font-size: 21px;
    }
    @media screen and (max-width: 1200px) {
        font-size: 22px;
        width: 100%;
    :hover{
        font-size: 23px;
        background-position: right center;
    }
     }
     @media screen and (max-width: 600px) {
         margin-top: 5px;
     }
`;

const Icon = styled.img`
    height: 20px;
    margin-left: 10px;
`;

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function HeroButton() {
    return (
        <Button>
            <Link href={socialLinks.discord.url} target="_blank">Join our Discord <Icon src={discordIcon} /></Link>
        </Button>
    );
};