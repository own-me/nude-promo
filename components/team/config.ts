import chrisImage from "../../media/team/chris.jpg";
import sylviaImage from "../../media/team/sylvia.jpg";
import tobiImage from "../../media/team/tobi.jpg";
import githubIcon from "../../media/icons/github/black.svg";
import linkedinIcon from "../../media/icons/linkedin/black.svg";

export const teamData = [
    {
        name: "Christopher Trimboli",
        image: chrisImage,
        title: "Founder | CEO | Lead Web3 Engineer",
        color: "#FF9900",
        socials: [
            {
                icon: githubIcon,
                url: "https://github.com/ChristopherTrimboli"
            },
            {
                icon: linkedinIcon,
                url: "https://www.linkedin.com/in/christophertrimboli/"
            }
        ]
    },
    {
        name: "Sylvia Makuch",
        image: sylviaImage,
        title: "Designer | Digital Artist | Junior Frontend Engineer",
        color: "#FD95FF",
        socials: [
            {
                icon: githubIcon,
                url: "https://github.com/SylviaMakuch"
            },
            {
                icon: linkedinIcon,
                url: "https://www.linkedin.com/in/sylvia-makuch-6baa4a66/"
            }
        ]
    },
    {
        name: "Tobi Trimboli",
        image: tobiImage,
        title: "Head of Security | Pussy Inspector",
        color: "#6FBAFF"
    },
];

export const missingTeamData = [
    {
        title: "Lead Blockchain Engineer"
    },
    {
        title: "Lead Dev Ops / Backend Engineer "
    },
    {
        title: "Lead Content Creator / Video Artist"
    },
    {
        title: "Lead of Business / Finance"
    },
    {
        title: "Lead of Marketing / Growth"
    },
    {
        title: "Dapp Frontend Engineer"
    }
];