import React from 'react';

export default props => (

    <button className={`btn btn-${props.style}`}
        onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`}></i>
        <span> {props.text} </span>
    </button>
);