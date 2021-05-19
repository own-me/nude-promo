import React from "react";
import styled from "styled-components";
import bubblegum from "../../media/bubblegum.svg";

const AuctionhouseContainer = styled.div`
    height: 50%;
`;

const AuctionhouseHeader = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #2A2825;
`;

const AuctionhouseGrid = styled.div`
    display: flex;
    margin-top: 200px;
`;

const AuctionhouseImage = styled.img`
    height: 500px;
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

export default function Hero() {
    return (
        <AuctionhouseContainer>
            <AuctionhouseGrid>
                <AuctionhouseTextContainer>
                    <AuctionhouseTextHeader>
                        The Auction House
                    </AuctionhouseTextHeader>
                    <AuctionhouseText>
                        Creators put their best content up for auction as NFTs. Earn cryptocurrency and generate profitable income. 
                    </AuctionhouseText>
                    <AuctionhouseText>
                        Collectors compete to own NFTs of their favorite creators. Build your private collection of creator content.
                    </AuctionhouseText>
                </AuctionhouseTextContainer>
                <AuctionhouseImage src={bubblegum} />
            </AuctionhouseGrid>
        </AuctionhouseContainer>
    );
};