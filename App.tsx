import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import TopNav from "./components/TopNav";
import AppLayout from "./components/AppLayout";

function App() {
    return (
        <AppLayout>
            <TopNav />
        </AppLayout>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));