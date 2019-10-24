import React, { Component } from 'react';

class CurrentState extends Component {
    render() {
        const currentState = this.props.inOffice ? 'IN' : 'OUT';
        return (
            <div className="text-center">
                You are currently
                <br />
                <h1>
                    {currentState}
                </h1>
                {!this.props.inOffice ? 'of' : ''} office.
            </div>
        );
    }
}

export default CurrentState;