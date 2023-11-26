import React from 'react';
import Navbar from "./navbar";
import Title from "./title";
import MainProgram from "./mainProgram";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";
import './styles.css';
function App() {
    return (
        <div className = "App">
            <Title />
            <Navbar />
            <div className="content">
                <SideBarLeft/>
                <MainProgram />
                <SideBarRight/>
            </div>
        </div>
    );
}

export default App;