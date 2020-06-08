import React from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={askForPermissioToReceiveNotifications} >
      Click here to receive notifications
    </button>
      </header>
    </div>
  );
}

export default App;
