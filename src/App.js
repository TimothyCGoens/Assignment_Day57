import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'

class App extends Component {

  render() {

    return(
      <div>
      <h1> the very best and most awesome counter app!</h1>
      <Counter />
      </div>
    )
  }
}

export default App;
