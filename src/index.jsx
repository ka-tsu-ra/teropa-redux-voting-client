// This file is the app's entry point file.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Voting from './components/Voting.jsx';
import Results from './components/Results.jsx';

// Declaratively define a routing table using the React component called Route.
// Point to the App component for the root Route in the config, which will be shared for 
// all the concrete routes within. App component purpose is to rener all markup that is common 
// accross all routes.
// Specify that for path named '/results', the Results component should be used 

const routes = <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>;

// Supply the Router component from react-router package as root component of application, instaed of
// the Voting component.
// Instruct it to use the #hash based history mechanism (as opposed to the HTML5 history API).
// We plug our route table into it by passing it in as a child component.
// Now the app still renders the Voting component but now with React Router baked in, so it's
// eaiser to add more routes.

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
