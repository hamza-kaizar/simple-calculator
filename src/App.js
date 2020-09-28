import React from 'react';
import './App.css';
import Header from './components/Header';
import TextField from './components/TextField';
import ActionButton from './components/ActionButton';

function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <Header
          className="Header"
          value="Simple Calculator"
        /> <br />

        <TextField
          id="input_one"
          className="Text"
          placeholder="Input 1"
        /> <br />

        <TextField
          id="input_two"
          className="Text"
          placeholder="Input 2"
        /> <br />

        <ActionButton
          id="add"
          className="Button"
          value="+"
        />

        <ActionButton
          id="subtract"
          className="Button"
          value="-"
        />

        <ActionButton 
          id="multiply"
          className="Button"
          value="x"
        />

        <ActionButton 
          id="divide"
          className="Button"
          value="/"
        />

        <ActionButton 
          id="clear"
          className="Button"
          value="Clear"
          background="firebrick"
          color="floralwhite"
        /> <br />

        <Header 
          id="output"
          className="Text"
          value="0"
        />
      </div>
    </div>
  );
}

export default App;
