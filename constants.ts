interface navItem {
    key: string,
    title: string
};

export const navItems: Array<navItem> = [
    {
        key: "ourDream",
        title: "Our Dream"
    },
    {
        key: "getInvolved",
        title: "Get Involved"
    },
    {
        key: "$nude",
        title: "$NUDE"
    }
];

interface socialLink {
    key: string,
    title: string,
    url: string
};

export const socialLinks: Record<string, socialLink> = {
    discord: {
        key: "discord",
        title: "Discord",
        url: "https://discord.gg/Ww5nckNGpS"
    },
    twitter: {
        key: "twitter",
        title: "Twitter",
        url: "https://twitter.com/Own_Me_NFT"
    },
    instagram: {
        key: "instagram",
        title: "Instagram",
        url: "_"
    },
    linkedin: {
        key: "linkedin",
        title: "LinkedIn",
        url: "_"
    },
    medium: {
        key: "medium",
        title: "Medium",
        url: "_"
    },
    telegram: {
        key: "telegram",
        title: "Telegram",
        url: "https://t.me/own_me_nft"
    }
};