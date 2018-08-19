import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

import { updateUser } from './actions/actions.js'
class App extends Component {

  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);

  }

  updateUser(event){
    this.props.onUpdateUser(event.target.value)
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload mr {this.props.user }.
        </p>
        <input onChange={this.updateUser} />

      </div>

    );
  }
}

const mapStateToProps = function(state) {
  return state;
}

const mapActionToProps = {
  onUpdateUser : updateUser
}

export default connect(mapStateToProps , mapActionToProps)(App);
