import React, { memo } from "react";
import styled from "styled-components";
import polygonLogo from "../../media/tokenomics/polygon-logo.png";
import fireLogo from "../../media/tokenomics/fire.png";
import lockLogo from "../../media/tokenomics/lock.png";
import moneyBagLogo from "../../media/tokenomics/money-bag.png";

const NudeNftContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`;

const Item = styled.div`
    display: flex;
    font-family: Poppins, Open Sans;
    align-items: center;
`;

const Icon = styled.img`
    height: 50px;
    width: auto;
`;

const Text = styled.div`
    font-size: 25px;
    padding: 40px 30px;

    @media screen and (max-width: 1200px) {
        padding: 30px 25px;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
        padding: 20px;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;

    @media screen and (max-width: 1200px) {
        padding: 10px;
    }
`;

const NudeNftSection = memo((props) => {
    return (
        <NudeNftContainer>
            <Section>
                <Item>
                    <Icon src={polygonLogo} />
                    <Text><b>Gas-free</b> NFT marketplace with Polygon Network. Compatible with Opensea.</Text>
                </Item>
                <Item>
                    <Icon src={lockLogo} />
                    <Text><b>Encrypted content</b> with Pinata Submarining. Mint a private NUDE NFT only the owner can view.</Text>
                </Item>
            </Section>
            <Section>
                <Item>
                    <Icon src={fireLogo} />
                    <Text>Safely <b>burnable</b> and <b>destructible</b> by moderators and creators.</Text>
                </Item>
                <Item>
                    <Icon src={moneyBagLogo} />
                    <Text>Own Me takes a <b>0.69% tax</b> on NFT transactions to support our team and community. This is <b>10x - 25x less fees</b> then leading adult content apps.</Text>
                </Item>
            </Section>
        </NudeNftContainer>
    );
});

export default NudeNftSection;