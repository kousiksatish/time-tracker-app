import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CurrentState from './CurrentState';
import RecordActivity from './RecordActivity';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inOffice: false
        };
    }
    handleInOutToggle = () => {
        console.log('Invoked')
        this.setState({
            inOffice: !this.state.inOffice
        });
    }
    render() {
        return (
            <div className="App">
                <h1>Track your time!</h1>
                <br /><br />
                <CurrentState inOffice = {this.state.inOffice} />
                <hr />
                <RecordActivity inOffice = {this.state.inOffice} handleInOutToggle = {this.handleInOutToggle}/>
            </div>
        );
  }
}

export default App;
