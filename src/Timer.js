import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>{(this.props.timer.minutes).toString().padStart(2,'0')}:{(this.props.timer.seconds).toString().padStart(2,'0')}</div>
        )
    }
}

export default Timer;