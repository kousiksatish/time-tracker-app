import React, { Component } from 'react';

class RecordActivity extends Component {
    render() {
        const buttonName = this.props.inOffice ? 'Come OUT' : 'Go IN';
        return (
            <div class="row">
                <div class="text-center col-sm-12">
                    <button class="btn btn-primary btn-md center-block">{buttonName} now</button>
                </div>
            </div>
        );
    }
}

export default RecordActivity;
