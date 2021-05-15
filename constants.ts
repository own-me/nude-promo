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
    }
};