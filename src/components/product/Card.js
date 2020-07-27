import React, { Component } from 'react';

import specimen from '../../specimen.jpg';

class Card extends Component {

    state = {
        source: specimen // image initiale (specimen.jpg) avant fetch
    }

    componentDidMount() {
        fetch('http://konexio.codiscovery.co/bakery/api/?q=croissant', {method: 'GET'})
             .then(res => res.json())
             .then(json => {
                 console.log('Fetched: ', json)
                this.setState(json)
             }); // On modifie l'image du state grâce à fetch
    }

//     Dans le onClickFn de Card, mettre une méthode anonyme qui envoie directement le price. C’est une autre manière de faire remonter les informations
// Pour passer à l’étape suivante, vérifier que chaque clic sur un bouton Card affiche un message dans la console

    render() {
        return <button >
             <img style={{height: '200px', width: '200px'}} src={this.state.source}/>
            </button>
    }

}

export default Card;