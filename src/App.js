import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './containers/Projects'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Projects/>
            </div>
        );
    }
}

export default App;
