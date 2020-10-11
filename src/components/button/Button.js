import React, { useState } from "react";
import './button.scss';

const Button = props => {

    const [buttonState, setButtonState] = useState('default');
    const [buttonText, setButtonText] = useState(props.text);

    if(!props.onClick) {
        return (
            <button className={props.className + " button"} type={props.type}>{buttonText}</button>
        )
    } else {
        return (
            <button className={`${props.className} button button--${buttonState}`} type={props.type} onClick={e => clickHandler(props.onClick, setButtonState, setButtonText)}>{buttonText}</button>
        )
    }
}

const clickHandler = (data,setButtonState, setButtonText) => {

    if(localStorage.getItem(data['url']) != null) {
        //If url already exists add new score to it
        let storage = JSON.parse(localStorage.getItem(data['url']));
        let storageLength = Object.keys(storage).length;
        let val = [];
        Object.keys(data).forEach(item => {
            val.push(data[item])
        })
        let num = storageLength + 1;
        storage[num] = val;
        localStorage.setItem(data['url'], JSON.stringify(storage));
        setButtonState('saved');
        setButtonText('Saved successfuly');
    } else {
        //If not create new item in storage
        let val = [];
        Object.keys(data).forEach(item => {
            val.push(data[item])
        })
        localStorage.setItem(data['url'], JSON.stringify({1: val}));
        setButtonState('saved');
        setButtonText('Saved successfuly');
    }    
}

export default Button;