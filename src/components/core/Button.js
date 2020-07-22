import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <button className='btn btn-outline-primary' onClick={this.props.onClick}>{this.props.label}</button>
        )
    }

}

export default Button;