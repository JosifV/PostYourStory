import React, { Component } from 'react';
import Aux from './Auxila/Aux';
import All from './All/All'
import './App.css';
import Spinner from './Spinner/Spinner'
class App extends Component {
  state={
    loading:true
  }
  componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    return (
      <Aux>
        {this.state.loading ? <Spinner/> : <All/>}
      </Aux>
    );
  }
}

export default App;
