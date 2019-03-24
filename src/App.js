import React, { Component } from 'react';
import Header from './componets/Header';
import Footer from './componets/Footer';
import firebase from 'firebase';
import './App.css';
//main js file which runs app 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
