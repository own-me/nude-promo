import React from "react";
import ReactDOM from 'react-dom';
import TopNav from "./components/TopNav";

function App() {
    return (
        <div>
            <TopNav />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));