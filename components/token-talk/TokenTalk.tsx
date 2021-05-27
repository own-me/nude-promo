import React from "react";
import styled from "styled-components";

const TokenTalkContainer = styled.div`
`;

const TokenTalkHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 30px;
        text-align: center;
    }
`;

const TokenTalkSubHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 40px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        font-size: 30px;
    }
    @media screen and (max-width: 600px) {
        font-size: 24px;
        text-align: center;
    }
`;

const TokenTalkText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins, Open Sans;
    padding: 0px 50px;

    @media screen and (max-width: 1200px) {
        font-size: 25px;
        padding: 0px 20px;
    }
    @media screen and (max-width: 600px) {
        font-size: 22px;
        padding: 0px 10px;
        margin: 30px 0px;
    }
`;


export default function TokenTalk() {
    return (
        <TokenTalkContainer>
            <TokenTalkHeader>$NUDE and $NUDENFT Tokens</TokenTalkHeader>
            <TokenTalkText>We will be launching an ERC-20 and ERC-721 token used for in-app transactions, NFT minting, governance, staking, investing and all that good tokenomics sauce we expect from crypto projects.</TokenTalkText>
            <TokenTalkSubHeader>How are we unique?</TokenTalkSubHeader>
            <TokenTalkText>Believe it or not, we are not a pump and dump.</TokenTalkText>
            <TokenTalkText>We will be deploying our tokens to mainnet only when we have a fully functioning app to use them with. This allows for proper auditing, testing and community input.</TokenTalkText>
            <TokenTalkText>Speculative investment is not our product pitch.</TokenTalkText>
        </TokenTalkContainer>
    );
};