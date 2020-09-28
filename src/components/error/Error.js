import React from 'react';

class Error extends React.Component {

    render() {
        return <div className="panel">{this.props.popupMessage}</div>;
    }
}

export default Error;