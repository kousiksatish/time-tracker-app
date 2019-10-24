import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CurrentState from './CurrentState';
import RecordActivity from './RecordActivity';

const inOffice = false;

class App extends Component {
  render() {
      return (
          <div className="App">
              <h1>Track your time!</h1>
              <br /><br />
              <CurrentState inOffice = {inOffice} />
              <hr />
              <RecordActivity inOffice = {inOffice} />
          </div>
      );
  }
}

export default App;
