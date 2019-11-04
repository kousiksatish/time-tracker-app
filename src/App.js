import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CurrentState from './CurrentState';
import RecordActivity from './RecordActivity';
import { connect } from 'react-redux';
import * as timeTrackerActions from './redux/actions/timeTrackerActions';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        timeTracker: {
            inOffice: false
        }
    };
    handleInOutToggle = () => {
        console.log('Invoked')
        this.props.toggleTimeTracker();
    }
    render() {
        return (
            <div className="App">
                <h1>Track your time!</h1>
                <br /><br />
                <CurrentState inOffice = {this.props.timeTracker.inOffice} />
                <hr />
                <RecordActivity inOffice = {this.props.timeTracker.inOffice} handleInOutToggle = {this.handleInOutToggle}/>
            </div>
        );
  }
}

App.propTypes = {
    timeTracker: PropTypes.object.isRequired,
    toggleTimeTracker: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        timeTracker: state.timeTracker
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTimeTracker: () => dispatch(timeTrackerActions.toggleTimeTracker())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
