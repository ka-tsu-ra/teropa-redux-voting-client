import React from 'react';
import { List } from 'immutable';

// Don't use pure render mixin in App component. It would cause route changes not to fire. (At time of
// the blog, there was implementation issue between the router and React).

// Moved this over from index.jsx
const pair = List.of('Trainspotting', '28 Days Later');

// This component only renders its child components, expected to be given in as the 'children' prop.
// React Router does this - it plugs in component(s) defined for whatever the current route happens to be.
// Currently only defined one route for Voting, so at the moment the App component will always render Voting.

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
