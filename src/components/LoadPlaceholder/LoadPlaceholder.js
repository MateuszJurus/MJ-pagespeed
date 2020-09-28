import React from 'react';
import './LoadPlaceholder.scss';

const LoadPlaceholder = (props) => {

    if(props.isLoading) {
        return (
            <div className="loader">
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
            </div>
        )
    } else {
        return false;
    }
}

export default LoadPlaceholder;