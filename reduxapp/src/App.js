import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore , combineReducers}  from 'redux';
function Todoreducer(state = [] , action) {
  return state;
}

function UserReducer(state ='', action){
  return state;
}
const AllReducers = combineReducers({
  todos : Todoreducer,
  user : UserReducer
})

const store = createStore(AllReducers)
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
