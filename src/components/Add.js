import React from 'react';

import Slider from './core/Slider';

class Add extends React.Component {

    state = {
        input: '',
        price: 1,
        min: 1,
        max: 10
    }

    onChangePrice = (val) => {
        this.setState({
            price: val
        })
    }

    render() {
        return (
            // Code pris du site de Bootstrap
            <div>
                <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append mb-3">
                        <button className="btn btn-outline-primary" type="button">Button</button>
                    </div>
                </div>
                <div>{this.state.price} €</div>
                <Slider
                    min={this.state.min}
                    max={this.state.max}
                    value={this.state.price}
                    onChange={this.onChangePrice} />
            </div>
        );
    }

}

export default Add;