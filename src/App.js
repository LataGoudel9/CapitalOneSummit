import React, { Component } from 'react';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Album from './componets/Album';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
     <Album/>
      <Footer/>
      </div>
    );
  }
}

export default App;
