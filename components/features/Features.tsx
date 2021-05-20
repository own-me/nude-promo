import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import padlock from "../../media/padlock.svg";
import punch from "../../media/punch.svg";
import moneyBag from "../../media/money-bag.svg";

const FeaturesContainer = styled.div`
    min-height: 800px;
`;

const featuresData = [
    {
        title: "NFT Encryption",
        icon: padlock,
        text: "State of the art NFT encryption methods make sure that your purchase stays private. Unlike other platforms, the content is not publicy viewable unless you make it so."
    },
    {
        title: "Ownership",
        icon: punch,
        text: "Take back control of your content through the power of decentralized NFT technology. When you publish or purchase  content, it is safe inside the public blockchain."
    },
    {
        title: "More Profits",
        icon: moneyBag,
        text: "Get more of your value back from your fans. We implement a competitive earnings model for our creators. We are not constricted by VISA and banks because we use cryptocurrency."
    }
];

export default function Features() {
    return (
        <FeaturesContainer>
            {
                featuresData.map(({ title, icon, text }, index) => {
                    return <FeatureCard title={title} icon={icon} text={text} key={index} />
                })
            }
        </FeaturesContainer>
    );
};