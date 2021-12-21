import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import TopNav from "./components/nav/TopNav";
import AppLayout from "./components/AppLayout";
import Hero from "./components/hero/Hero";
import FeatureCards from "./components/feature-cards/FeatureCards";
import Footer from "./components/Footer";
import TokenTalk from "./components/token-talk/TokenTalk";
import Roadmap from "./components/roadmap/Roadmap";
import MainFeatures from "./components/main-features/MainFeatures";
import Team from "./components/team/Team";
import Funding from "./components/funding/Funding";
import CreatorProfiles from "./components/creator-profiles/CreatorProfiles";
import BuiltWith from "./components/built-with/BuiltWith";

function App() {
    return (
        <>
            <AppLayout>
                <TopNav />
                <Hero />
                <MainFeatures />
                <CreatorProfiles />
                <FeatureCards />
                <BuiltWith />
                <TokenTalk />
                <Team />
                <Roadmap />
                <Funding />
            </AppLayout>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));