import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import GameContainer from './containers/GameContainer'
import GuessRight from './components/GuessRight'
window.addEventListener('load', () => {

  const targetDiv = document.getElementById('app');
  ReactDOM.render(

    <HashRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={GameContainer}/>
      </div>
    </HashRouter>,
    targetDiv


  );
});
