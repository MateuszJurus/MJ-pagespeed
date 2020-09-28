import React from 'react';
import './Input.scss';

const Input = props => {

    return (
        <span className="input-wrapper">
            <input required={props.required} disabled={props.disabled} className="input" onChange={e => {
            props.passUrl(e.target.value);
        }} />
            <span className="input--before">https://</span>
        </span>
    );

}

export default Input;