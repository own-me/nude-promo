import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import TopNav from "./components/TopNav";
import AppLayout from "./components/AppLayout";
import Hero from "./components/hero/Hero";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <AppLayout>
                <TopNav />
                <Hero />
            </AppLayout>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));