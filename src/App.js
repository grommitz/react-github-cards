import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    cardData: [
      {
        name:"Martin Charlesworth", 
        avatar_url:"https://avatars0.githubusercontent.com/u/2547666?v=4",
        company:"CSC"
      },
      {
        name:"Diabolic Developer",
        avatar_url:"https://avatars0.githubusercontent.com/u/254123?v=4",
        company:"XXX"
      }
    ]
  };
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cardData: prevState.cardData.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cardData}/>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    userName : ""
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("sumitted!", this.state.userName);
    axios.get("https://api.github.com/users/" + this.state.userName)
      .then(resp => {
        console.log("API RESPONSE: ", resp.data);
        this.props.onSubmit(resp.data);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={(event) => this.setState({ userName : event.target.value })} 
          type="text" placeholder="github user name" required/>
        <button type="submit">Add card</button>
      </form>
    )
  };
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
        {props.cards.map(card => <Card {...card}/>)}
      </div>
  )
};

export default App;
