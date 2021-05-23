import React from "react";
import styled from "styled-components";
import auction from "../../media/auction-house.svg";

const AuctionhouseContainer = styled.div`
    min-height: 40%;
`;

const AuctionhouseGrid = styled.div`
    display: flex;
    margin-top: 200px;
    flex-wrap: wrap;
`;

const AuctionhouseImage = styled.img`
    height: 425px;
    flex-grow: 1;
`;

const AuctionhouseTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 50px;
`;

const AuctionhouseTextHeader = styled.div`
    font-family: Rock Salt,Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;
`;

const AuctionhouseText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;
    padding: 0px 50px;
`;

export default function Auctionhouse() {
    return (
        <AuctionhouseContainer>
            <AuctionhouseGrid>
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