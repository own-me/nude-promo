import React from "react";
import styled from "styled-components";
import gumballMachine from "../../media/gumball-machine.svg";

const GumballMachineContainer = styled.div`
    height: 50%;
`;

const GumballMachineGrid = styled.div`
    display: flex;
    margin-top: 200px;
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
                        Creators put their best content up for auction as NFTs. Earn cryptocurrency and generate profitable income.
                    </GumballMachineText>
                    <GumballMachineText>
                        Collectors compete to own NFTs of their favorite creators. Build your private collection of creator content.
                    </GumballMachineText>
                </GumballMachineTextContainer>
            </GumballMachineGrid>
        </GumballMachineContainer>
    );
};