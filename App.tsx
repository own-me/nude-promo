import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import TopNav from "./components/TopNav";
import AppLayout from "./components/AppLayout";
import Hero from "./components/hero/Hero";
import Candyshop from "./components/candyshop/Candyshop";
import Auctionhouse from "./components/auctionhouse/Auctionhouse";
import Features from "./components/features/Features";
import Footer from "./components/Footer";
import GumballMachine from "./components/gumball-machine/GumballMachine";
import TokenTalk from "./components/token-talk/TokenTalk";
import Roadmap from "./components/roadmap/Roadmap";

function App() {
    return (
        <>
            <AppLayout>
                <TopNav />
                <Hero />
                <Candyshop />
                <Auctionhouse />
                <GumballMachine />
                <Features />
                <TokenTalk />
                <Roadmap />
            </AppLayout>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));