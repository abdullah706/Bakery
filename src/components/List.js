import React from 'react';

class List extends React.Component {

    render() {
        return (
            <div>list
                <ul>{this.props.items.map((item) =>
                {
                    return <li>{item.name}: {item.price} euros</li>
                })}
                </ul>
            </div>
        )
    }

}

export default List;