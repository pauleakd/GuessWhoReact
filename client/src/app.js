import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom'
import Home from './components/Home'

window.addEventListener('load', () => {

  const targetDiv = document.getElementById('app');
  ReactDOM.render(

    <HashRouter>
      <div>
        <Route path="/" component={Home}/>
      </div>
    </HashRouter>,
    targetDiv


  );
});
