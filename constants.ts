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
        key: "$nude",
        title: "$NUDE"
    },
    {
        key: "team",
        title: "Team"
    },
    {
        key: "funding",
        title: "Funding"
    },
    {
        key: "getInvolved",
        title: "Get Involved"
    },

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
        url: "https://twitter.com/own_me_nft"
    },
    instagram: {
        key: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/own_me_nft/"
    },
    linkedin: {
        key: "linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/company/own-me-nft"
    },
    medium: {
        key: "medium",
        title: "Medium",
        url: "https://medium.com/@own.me.nft"
    },
    telegram: {
        key: "telegram",
        title: "Telegram",
        url: "https://t.me/own_me_nft"
    },
    testnet: {
        key: "testnet",
        title: "Testnet",
        url: "https://app.ownme.io/"
    }
};