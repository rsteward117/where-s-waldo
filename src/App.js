import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './App-Pages/Home';
import Game from './App-Pages/Game';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
