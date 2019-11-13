import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CurrentState from './CurrentState';
import RecordActivity from './RecordActivity';
import { connect } from 'react-redux';
import * as timeTrackerActions from './redux/actions/timeTrackerActions';
import * as timerActions from './redux/actions/timerActions';
import PropTypes from 'prop-types';
import Timer from './Timer';

class App extends Component {
    state = {}
    interval;
    handleInOutToggle = () => {
        console.log('Invoked')
        this.props.toggleTimeTracker();
        if(!this.props.timeTracker.inOffice) {
            console.log(`Timer`)
            this.interval = setInterval(() => {
                this.props.tickTimer(this.state.timer);
            }, 1000);
        } else {
            clearInterval(this.interval);
        }
        
    }
    render() {
        return (
            <div className="App">
                <h1>Track your time!</h1>
                <br /><br />
                <Timer timer = {this.props.timer} />
                <CurrentState inOffice = {this.props.timeTracker.inOffice} />
                <hr />
                <RecordActivity inOffice = {this.props.timeTracker.inOffice} handleInOutToggle = {this.handleInOutToggle}/>
            </div>
        );
  }
}

App.propTypes = {
    timeTracker: PropTypes.object.isRequired,
    timer: PropTypes.object.isRequired,
    toggleTimeTracker: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log(JSON.stringify(state));
    return {
        timeTracker: state.timeTracker,
        timer: state.timer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTimeTracker: () => dispatch(timeTrackerActions.toggleTimeTracker()),
        tickTimer: timer => dispatch(timerActions.tickTimer(timer))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
