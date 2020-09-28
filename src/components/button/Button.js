import React from 'react';
import './button.scss';

const Button = props => {

    if(!props.onClick) {
        return (
            <button className={props.className + " button"} type={props.type}>{props.text}</button>
        )
    } else {
        return (
            <button className={props.className + " button"} type={props.type} onClick={e => clickHandler(props.onClick)}>{props.text}</button>
        )
    }
}

const clickHandler = data => {

    console.log(localStorage.getItem(data['url']))

    if(localStorage.getItem(data['url']) != null) {
        console.log()
        let storage = JSON.parse(localStorage.getItem(data['url']));
        let storageLength = Object.keys(storage).length;
        console.log(storage)
        let val = [];
        Object.keys(data).forEach(item => {
            val.push(data[item])
        })
        let num = storageLength + 1;
        storage[num] = val;
        localStorage.setItem(data['url'], JSON.stringify(storage))
    } else {
        let val = [];
        Object.keys(data).forEach(item => {
            val.push(data[item])
        })
        localStorage.setItem(data['url'], JSON.stringify({1: val}))
    }    
}

export default Button;