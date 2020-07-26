import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

import Card from './components/product/Card';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    activeTab: 'add',
    items: []
  }

  onClickTabAdd = () => {
    this.setState({
      activeTab: 'add'
    });
  }

  onClickTabList = () => {
    this.setState({
      activeTab: 'list'
    });
  }

  onClickTabPay = () => {
    this.setState({
      activeTab: 'pay'
    });
  }  
  onAdd  = (price, input) => {
        // console.log('xxPrice: ', price, ' input: ', input);
        this.setState({
          items: [...this.state.items, {price: price, name: input}]
        });
        // console.log(this.state.items);
    // this.setState({
       
    // })
  }

  render() {
    return (
      <div className='container mt-5'>
        <Button label='Add' onClick={this.onClickTabAdd}/>
        <Button label='List' onClick={this.onClickTabList}/>
        <Button label='Pay' onClick={this.onClickTabPay}/>
        <Add add={this.onAdd}/>
        <List items={this.state.items}/>
        <Card />
        {/* <List />
        <Pay /> */}
        <p>{this.state.activeTab}</p>
      </div>
    );
  }

}

export default App;
