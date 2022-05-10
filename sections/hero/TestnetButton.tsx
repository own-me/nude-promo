import React from "react";
import styled from "styled-components";
import { socialLinks } from "../../constants";

const Link = styled.a`
    margin: 15px 15px 15px 50px;
    padding: 10px 35px;
    text-align: center;
    transition: all 0.2s linear;
    font-size: 20px;
    color: black;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 15px 0 rgba(0,0,0,.1);
    cursor: pointer;
    border: none;
    z-index: 3;
    border: 2px solid #d21fff;
    font-family: Poppins, Open Sans;
    letter-spacing: 0.8;

    :hover{
        transition: all 0.2s linear;
        box-shadow: #d21fff 0px 0px 2px, #d21fff 0px 0px 2px, #d21fff 0px 0px 2px, #d21fff 0px 0px 2px;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1px;
        width: 60%;
        margin: 5px 15px 15px 15px;
        font-size: 19px;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 16px;
        margin: 3px;
        width: 70%;
    }
`;

export default function TestnetButton() {
    return (
        <Link href={socialLinks.testnet.url} target="_blank">
            Launch TestNet
        </Link>
    );
};