import Pie from "chart.js/auto";
import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import NudeNftSection from "./NudeNftSection";

const TokenomicsContainer = styled.div`
`;

const Header = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    letter-spacing: 2.0;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

const SubHeader = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #525252;
    padding-bottom: 40px;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const SectionContainer1 = styled.div`
    padding-bottom: 175px;

    @media screen and (max-width: 1200px) {
        padding-bottom: 100px;
    }
    @media screen and (max-width: 600px) {
        padding-bottom: 50px;
    }
`;

const SectionContainer2 = styled.div`

`;

const SectionHeader = styled.span`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    letter-spacing: 2.0;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 600px) {
        font-size: 32px;
    }
`;

const SectionSubHeader = styled.span`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    line-height: 2.0;
    letter-spacing: 2.0;
    color: #525252;
    padding-left: 25px;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
    @media screen and (max-width: 600px) {
        font-size: 15px;
        padding-left: 10px;
    }
`;

const SectionContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 50px 0px;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding: 10px 0px;
    }
`;

const LeftSection = styled.div`
    @media screen and (max-width: 1200px) {
        width: 100%;
        text-align: left;
        padding: 30px 0px;
    }
    @media screen and (max-width: 600px) {

    }
`;

const LeftItem = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    padding: 20px 0px;
    font-weight: 600;
    width: 250px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    @media screen and (max-width: 600px) {

    }
`;

const PieSection = styled.div`
    height: 350px;
`;

const PieTitle = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    text-align: center;
    font-weight: 600;
`;

const PieSupply = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    text-align: center;
    font-weight: 600;
`;

const PieSupplyText = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 22px;
    text-align: center;
    font-weight: 400;
`;

const LegendSection = styled.div`
    font-family: Poppins, Open Sans;

    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 0px 20px;
    }
    @media screen and (max-width: 1000px) {
        padding-top: 125px;
    }
`;

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    padding: 20px 0px;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

const LegendColor = styled.div`
    width: 36px;
    height: 36px;
`;

const LegendValue = styled.div`
    font-weight: 600;
    padding-left: 20px;
`;

const LegendText = styled.div`
    padding-left: 10px;
`;

const Line = styled.hr`

`;

const Tokenomics = memo((props) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            const pie = new Pie(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Team', 'VIPs', 'Community', 'Liquidity'],
                    datasets: [{
                        label: '# of Votes',
                        data: [6.9, 6.9, 69, 17.2],
                        backgroundColor: [
                            '#F4CA33',
                            '#17C7FF',
                            '#FF51E3',
                            '#972FFF'
                        ],
                        borderColor: [
                            '#b18a00',
                            '#008db8',
                            '#bb3fa6',
                            '#832fd8'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }, [ref]);

    return (
        <TokenomicsContainer id="tokenomics">
            <Header>
                <Header>Tokenomics</Header>
                <SubHeader>{"Functionality > Speculation"}</SubHeader>
            </Header>

            <SectionContainer1>
                <SectionHeader>$NUDE</SectionHeader>
                <SectionSubHeader>MATIC(ERC20)</SectionSubHeader>
                <SectionContent>
                    <LeftSection>
                        <LeftItem>Governance <Line /></LeftItem>
                        <LeftItem>Gas Free <Line /></LeftItem>
                        <LeftItem>Fixed Supply <Line /></LeftItem>
                    </LeftSection>
                    <PieSection>
                        <PieTitle>Token Allocation</PieTitle>
                        <canvas ref={ref}></canvas>
                        <PieSupply>69,696,696,696<PieSupplyText>Total Supply</PieSupplyText></PieSupply>
                    </PieSection>
                    <LegendSection>
                        <LegendItem>
                            <LegendColor style={{ backgroundColor: '#F4CA33' }} />
                            <LegendValue>6.9%</LegendValue>
                            <LegendText>Team</LegendText>
                        </LegendItem>
                        <LegendItem>
                            <LegendColor style={{ backgroundColor: '#17C7FF' }} />
                            <LegendValue>6.9%</LegendValue>
                            <LegendText>VIPs</LegendText>
                        </LegendItem>
                        <LegendItem>
                            <LegendColor style={{ backgroundColor: '#FF51E3' }} />
                            <LegendValue>69%</LegendValue>
                            <LegendText>Community</LegendText>
                        </LegendItem>
                        <LegendItem>
                            <LegendColor style={{ backgroundColor: '#972FFF' }} />
                            <LegendValue>17.2%</LegendValue>
                            <LegendText>Liquidity</LegendText>
                        </LegendItem>
                    </LegendSection>
                </SectionContent>
            </SectionContainer1>

            <SectionContainer2>
                <SectionHeader>$NUDE_NFT</SectionHeader>
                <SectionSubHeader>MATIC(ERC721)</SectionSubHeader>
                <SectionContent>
                    <NudeNftSection />
                </SectionContent>
            </SectionContainer2>

        </TokenomicsContainer>
    );
});

export default Tokenomics;