import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <HelloWorld />
        <IamgoinfToNewWorld />
    </div>

  );
}

function IamgoinfToNewWorld() {
    return (
        <div>
          <a href="#k"> IamgoinfToNewWorld</a>
        </div>

    );

}

function HelloWorld() {
    return (
        <div>
        <a href="#s">hello world</a>
        </div>
    );
}

export default App;
