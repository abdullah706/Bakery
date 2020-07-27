import React from 'react';

import Card from './product/Card';

class Pay extends React.Component {

    state = {
        basket: [],
        total: 0,
        totalVat: 0,
        totalEcoTax: 0
    }

    onClickProduct = (name, price) => {
        // this.setState({
        //     total: 2
        // })
    }

    // Etape 9 : Pas clair

    render() {
        return (
            <div>
            <div>{this.state.total}</div>
            {this.props.items.map((item) => {
                return <Card />
            })}
            </div>
        )
    }

}

export default Pay;