import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    activeTab: 'add',
    items: []
  }

  render() {
    return (
      <div>
        <Add />
        <List />
        <Pay />
        <Button label='Add' />
        <Button label='List' />
        <Button label='Pay' />
      </div>
    );
  }

}

export default App;
