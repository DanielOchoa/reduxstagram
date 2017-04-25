import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// css
import './css/index.css';

// components
import App from './components/App';
import Header from './components/Header';
import Photogrid from './components/Photogrid';
import Photo from './components/Photo';

const router = (
  <Router>
    <App>
      <Header/>
      <Route exact path="/" component={Photogrid}/>
      <Route path="/photos/:photoId" component={Photo}/>
    </App>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
