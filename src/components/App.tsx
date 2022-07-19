import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import '../style/App.css';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React-Apollo-graphQL Tutorial</p>
      </header>
      <div>
        <Switch>
          <Route path="/" component={LinkList} exact />
          <Route path="/create" component={CreateLink} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
