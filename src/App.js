import "./App.css";

import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       item: [],
       currentItem:{
        text:'',
        key:'',
       }
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="enter text" />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
