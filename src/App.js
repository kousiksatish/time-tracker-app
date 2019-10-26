import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CurrentState from './CurrentState';
import RecordActivity from './RecordActivity';

class App extends Component {
    state = {
        timeTracker: {
            inOffice: false
        }
    };
    handleInOutToggle = () => {
        console.log('Invoked')
        const timeTracker = { ...this.state.timeTracker, inOffice: !this.state.timeTracker.inOffice};
        console.log(timeTracker);
        this.setState({ timeTracker });
    }
    render() {
        return (
            <div className="App">
                <h1>Track your time!</h1>
                <br /><br />
                <CurrentState inOffice = {this.state.timeTracker.inOffice} />
                <hr />
                <RecordActivity inOffice = {this.state.timeTracker.inOffice} handleInOutToggle = {this.handleInOutToggle}/>
            </div>
        );
  }
}

export default App;
