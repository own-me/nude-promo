import React from "react";
import styled from "styled-components";
import gumballMachine from "../../media/gumball-machine.svg";

const GumballMachineContainer = styled.div`
    min-height: 50%;
`;

const GumballMachineGrid = styled.div`
    display: flex;
    margin-top: 200px;
    flex-wrap: wrap;
`;

const GumballMachineImage = styled.img`
    height: 500px;
    flex-grow: 1;
`;

const GumballMachineTextContainer = styled.div`
    flex-grow: 1;
    padding: 0px 50px;
`;

const GumballMachineTextHeader = styled.div`
    font-family: Rock Salt,Open Sans;
    color: #D83DFF;
    font-size: 50px;
    text-align: center;
`;

const GumballMachineText = styled.div`
    font-size: 30px;
    text-align: left;
    margin: 50px 0px;
    font-family: Poppins,Open Sans;
    padding: 0px 50px;
`;

export default function GumballMachine() {
    return (
        <GumballMachineContainer>
            <GumballMachineGrid>
                <GumballMachineImage src={gumballMachine} />
                <GumballMachineTextContainer>
                    <GumballMachineTextHeader>
                        The Gumball Machine
                    </GumballMachineTextHeader>
                    <GumballMachineText>
                        Creators mint NFTs and put their content into a pool to be randomly drawn by collectors. Creators receive profit back from the sale of their NFT. It is a fun way to promote your content to random people and bring attention to your profile.
                    </GumballMachineText>
                    <GumballMachineText>
                        Collectors enter a fixed cryptocurrency fee and receive a NFT from a random creator to add to their collection.
                    </GumballMachineText>
                </GumballMachineTextContainer>
            </GumballMachineGrid>
        </GumballMachineContainer>
    );
};