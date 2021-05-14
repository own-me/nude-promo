import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import TopNav from "./components/TopNav";

function App() {
    return (
        <div>
            <TopNav />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));