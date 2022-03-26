import React from "react";
import blockingUser from "../../media/moderation-icons/blocking-user.svg"
import approval from "../../media/moderation-icons/approval.svg";
import idVerification from  "../../media/moderation-icons/id-verification.svg";
import pinkTriangle from "../../media/moderation-icons/pink-triangle.svg";
import greenTriangle from "../../media/moderation-icons/green-triangle.svg";
import redTriangle from "../../media/moderation-icons/red-triangle.svg";

interface ModerationDataItem {
    title: string;
    text: string;
    image: string;
    backgroundColor: string;
    triangle: string;
}

type ModerationData = ModerationDataItem[];

export const moderationData: ModerationData = [
    {
        title: "Real ID Verification",
        text: "We verify creators age and identity with a secure real ID process. However, for collectors there is no real ID requirement.",
        image: idVerification,
        backgroundColor: "#6B68FF",
        triangle: pinkTriangle
    },
    {
        title: "NFT Approval Process",
        text: "To make sure the community stays safe and content is acceptable, we have a human + AI moderation process for all creator’s newly minted NFTs.",
        image: approval,
        backgroundColor: "#00A3FF",
        triangle: greenTriangle
    },
    {
        title: "Reporting and Blocking",
        text: "To deal with abuse and harrasement, we give you the tools to limit the levels of interaction you feel comfortable with.",
        image: blockingUser,
        backgroundColor: "#f964e1",
        triangle: redTriangle
    },
];