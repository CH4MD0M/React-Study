const React = require("react");
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: "Hello, Webpack",
    };
    render() {
        return <div>{this.state.text}</div>;
    }
}

module.exports = WordRelay;
