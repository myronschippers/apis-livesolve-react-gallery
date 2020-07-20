import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    galleryList: [],
  }

  componentDidMount() {
    console.log(this);
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          galleryList: response.data
        }, () => {
          console.log(this.state);
        });
        /// log state
      })
      .catch((err) => {
        console.log(err);
        alert('There was and ERROR, run for the hills.');
      });
  }

  render() {
    // any JS in here
    const displayList = this.state.galleryList.map((item, index) => {
      return <li key={item.id}>{item.description}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <ul>{displayList}</ul>
      </div>
    );
  }
}

export default App;
