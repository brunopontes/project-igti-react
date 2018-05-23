import React, { Component } from 'react';

class Error extends Component {

    render() {
        var msg = ''
        if (this.props.msg.data && this.props.msg.data.error) {
            msg = this.props.msg.data.errorMessage
        } else {
            msg = this.props.msg.message
        }

        return (
            <div style={{ backgroundColor: 'white', textAlign: 'center', padding: '50px' }}>

                <p>{this.props.title}</p>

                <p>
                    <strong style={{ color: 'red' }}>Error: </strong>
                    {msg}
                </p>

            </div>

        )
    }
}

export default Error;
