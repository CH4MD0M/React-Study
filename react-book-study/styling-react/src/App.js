import React, { Component } from "react";
// import CSSModule from "./components/CSSModule/CSSModule";
import StyledComponent from "./components/StyledComponents/StyledComponent";

class App extends Component {
    render() {
        return (
            <div>
                <StyledComponent />
            </div>
            // <div>
            //     {/* <SassComponent /> */}
            //     <CSSModule />
            // </div>
            // <div className="App">
            //     <header>
            //         <img src={logo} className="logo" alt="logo" />
            //         <p>
            //             Edit <code>src/App.js</code> and save to reload.
            //         </p>
            //         <a
            //             href="https://reactjs.org"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             Learn React
            //         </a>
            //     </header>
            // </div>
        );
    }
}

export default App;
