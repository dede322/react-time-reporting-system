import React, { Component } from 'react';
import Projects from '../../containers/Projects'
import Header from '../Header'
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Projects/>
            </div>
        );
    }
}

export default Home;