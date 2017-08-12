import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './NotFound';
import Home from './components/Home';
import OurTequilas from './components/OurTequilas';
import WhereToFind from './components/WhereToFind';
import OurProcess from './components/OurProcess';
import Events from './components/Events';
import Blog from './components/Blog';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/ourtequilas" component={OurTequilas} />
        <Route path="/wheretofind" component={WhereToFind} />
        <Route path="/ourprocess" component={OurProcess} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
      </Route>
      <Route path="*" component={NotFound} />
   </Router>),
  document.getElementById('root')
);
