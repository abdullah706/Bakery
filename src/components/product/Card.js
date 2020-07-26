import React, { Component } from 'react';

import specimen from '../../specimen.jpg';

class Card extends Component {

    state = {
        source: specimen
    }

    componentDidMount() {
        fetch('http://konexio.codiscovery.co/bakery/api/?q=croissant', {method: 'GET'})
             .then(res => res.json())
             .then(json => {
                 console.log('Fetched: ', json)
                this.setState(json)
             });
    }

    render() {
        return <button>
             <img style={{height: '200px', width: '200px'}} src={this.state.source}/>
            </button>
    }

}

export default Card;