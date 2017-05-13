import React, { Component } from 'react';
import Head from "./layout/head";
import './App.css';

class App extends Component {
  render() {
    const gameContainerStyle = {
      width: "655px",
      height: "400px"
    };    
    return (
      <div className="App">
        <Head />        
        <div className="container content webgl-content">
          <div id="gameContainer" style={gameContainerStyle}></div>
          <div className="footer">
            <div className="webgl-logo"></div>
            <div className="fullscreen" onClick={this.triggerFullscreen}></div>
            <div className="title">Naifu</div>
          </div>
        </div>
      </div>
    );
  }

  triggerFullscreen (e) {
    document.getElementById("fs-link").click();
  }
}

export default App;
