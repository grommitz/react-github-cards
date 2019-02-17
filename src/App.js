import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const Card = (props) => {
  return (
      <div style={{margin: '1em'}}>
          <img width="75" style={{display:'inline-block', marginLeft:10}} 
              src={props.avatar_url} />
          <div className="info">
              <div style={{fontSize: '1.25em', fontWeight:'bold'}}>{props.name}</div>
              <div>{props.company}</div>
          </div>
      </div>      
  );
};

const CardList = (props) => {
  return (
      <div>
          <Card name="Martin Charlesworth" 
              avatar_url="https://avatars0.githubusercontent.com/u/2547666?v=4"
              company="CSC"/>
          <Card name="Diabolic Developer" 
              avatar_url="https://avatars0.githubusercontent.com/u/254123?v=4"
              company="XXX"/>
          <Card name="Terry" 
              avatar_url="https://avatars2.githubusercontent.com/u/32106?v=4"
              company="Company"/>
      </div>
  )
};

export default App;
