import React, { Component } from 'react';
import ReactNotify from 'react-notify';

class Notify extends Component {

    render() {

        const { data } = this.props.data

        if (typeof (data) !== typeof (undefined)) {

            if (data.status === 'success') {
                this.refs.notificator.success(data.title, data.msg, 4000);
            } else if (data.status === 'info') {
                this.refs.notificator.info(data.title, data.msg, 4000);
            } else if (data.status === 'error') {
                this.refs.notificator.error(data.title, data.msg, 4000);
            }

            return (
                <div>
                    <ReactNotify ref='notificator' />
                </div>

            )
        }
    }
}

export default Notify;
