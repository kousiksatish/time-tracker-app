import React, { Component } from 'react';

class RecordActivity extends Component {
    render() {
        const buttonName = this.props.inOffice ? 'Come OUT' : 'Go IN';
        return (
            <div className="row">
                <div className="text-center col-sm-12">
                    <button className="btn btn-primary btn-md center-block" onClick={this.props.handleInOutToggle}>{buttonName} now</button>
                </div>
            </div>
        );
    }
}

export default RecordActivity;
