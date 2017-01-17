import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Projects from './containers/Projects'

class App extends Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
