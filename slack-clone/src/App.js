import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import styled from "styled-components";

import "./App.css";

function App() {
    return (
        <div className="app">
            <Router>
                <>
                    <Header />
                    <AppBody>
                        <Sidebar />
                        <Switch>
                            <Route path="/">{/* Chat */}</Route>
                        </Switch>
                    </AppBody>
                </>
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;
