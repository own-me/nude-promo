import React from "react";
import { createRoot } from 'react-dom/client';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import TopNav from "./sections/nav/TopNav";
import AppLayout from "./components/AppLayout";
import Hero from "./sections/hero/Hero";
import FeatureCards from "./sections/feature-cards/FeatureCards";
import Footer from "./components/Footer";
import Tokenomics from "./sections/tokenomics/Tokenomics";
import Roadmap from "./sections/roadmap/Roadmap";
import MainFeatures from "./sections/main-features/MainFeatures";
import Team from "./sections/team/Team";
import Funding from "./sections/funding/Funding";
import CreatorProfiles from "./sections/creator-profiles/CreatorProfiles";
import BuiltWith from "./sections/built-with/BuiltWith";
import Moderation from "./sections/moderation/Moderation";
import OpenSource from "./sections/open-source/OpenSource";

function App() {
    return (
        <>
            <AppLayout>
                <TopNav />
                <Hero />
                <MainFeatures />
                <CreatorProfiles />
                <FeatureCards />
                <Tokenomics />
                <Roadmap />
                <Moderation />
                <OpenSource />
                <Team />
                <BuiltWith />
                <Funding />
            </AppLayout>
            <Footer />
        </>
    );
};

const container = document.getElementById("react-container");
if (container) {
    createRoot(container).render(<App />);
}