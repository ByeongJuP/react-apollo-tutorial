import React from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import CreateLink from './CreateLink';
import LinkList from './LinkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React-Apollo-graphQL Tutorial</p>
      </header>
      <LinkList />
      <hr />
      <CreateLink />
    </div>
  );
}

export default App;
