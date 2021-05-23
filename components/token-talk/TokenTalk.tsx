import React from "react";
import styled from "styled-components";

const TokenTalkContainer = styled.div`
    max-height: 100%;
`;

const TokenTalkHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
    @media screen and (max-width: 900px) {
        font-size: 50px;
    }
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

const TokenTalkText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;
    padding: 0px 50px;
`;


export default function TokenTalk() {
    return (
        <TokenTalkContainer>
            <TokenTalkHeader>$NUDE and $NUDENFT Tokens</TokenTalkHeader>
            <TokenTalkText>We will be launching an ERC-20 and ERC-721 token used for in-app transactions, NFT minting, governance, staking, investing and all that good tokenomics sauce we expect from crypto projects.</TokenTalkText>
            <TokenTalkHeader style={{ fontSize: 40 }}>How are we unique?</TokenTalkHeader>
            <TokenTalkText>Believe it or not, we are not a pump and dump.</TokenTalkText>
            <TokenTalkText>We will be deploying our tokens to mainnet only when we have a fully functioning app to use them with. This allows for proper auditing, testing and community input.</TokenTalkText>
            <TokenTalkText>Speculative investment is not our product pitch.</TokenTalkText>
        </TokenTalkContainer>
    );
};