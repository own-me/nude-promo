import React from "react";
import styled from "styled-components";
import { socialLinks } from "../../constants";

const Button = styled.button`
    background: #9727fd;
    border: none;
    color: white;
    border-radius: 30px;
    padding: 10px 40px;
    font-family: Poppins, Open Sans;
    font-size: 15px;
    cursor: pointer;

    :hover {
        color: yellow;
    }
`;

const Link = styled.a`
    color: inherit;
`;

export default function HeroButton() {
    return (
        <Button>
            <Link href={socialLinks.discord.url} target="_blank">Join our Discord</Link>
        </Button>
    );
};