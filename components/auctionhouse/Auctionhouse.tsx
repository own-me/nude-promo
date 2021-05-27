import React from "react";
import styled from "styled-components";
import auction from "../../media/auction-house.svg";

const AuctionhouseContainer = styled.div`
    min-height: 40%;
`;

const AuctionhouseGrid = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 125px;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        margin-top: 50px;
    }
`;

const AuctionhouseImage = styled.img`
    width: 80%;
    max-width: 500px;
    flex-grow: 1;
    margin-bottom: 50px;
    @media screen and (min-width: 1200px) {
        display: block;
    }
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const AuctionhouseImageMobile = styled.img`
    width: 80%;
    max-width: 500px;
    flex-grow: 1;
    margin-bottom: 50px;
    @media screen and (min-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 1200px) {
        display: block;
    }
    @media screen and (max-width: 600px) {
        max-width: 300px;
        margin-bottom: 25px;
    }
`;

const AuctionhouseTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 75px;

    @media screen and (max-width: 1200px) {
        padding: 0px;
    }
`;

const AuctionhouseTextHeader = styled.div`
    font-family: Rock Salt, Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 35px;
    }
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

const AuctionhouseText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins, Open Sans;
    
    @media screen and (max-width: 1200px) {
        padding: 0px 10px;
        font-size: 25px;
    }
    @media screen and (max-width: 600px) {
        margin: 20px 0px;
        font-size: 22px;
    }
`;

export default function Auctionhouse() {
    return (
        <AuctionhouseContainer>
            <AuctionhouseGrid>
                <AuctionhouseImageMobile src={auction} />
                <AuctionhouseTextContainer>
                    <AuctionhouseTextHeader>
                        The Auction House
                    </AuctionhouseTextHeader>
                    <AuctionhouseText>
                        Creators list their best content for auction as NFTs. Set time locked auctions and keep track of collectors bets. You choose the rarity of your NFT and if the NFT content is publicy viewable.
                    </AuctionhouseText>
                    <AuctionhouseText>
                        Collectors compete with crypto bids to own NFTs of their favorite creators. Build your private or public collection of rare creator content.
                    </AuctionhouseText>
                </AuctionhouseTextContainer>
                <AuctionhouseImage src={auction} />
            </AuctionhouseGrid>
        </AuctionhouseContainer>
    );
};