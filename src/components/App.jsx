import React from 'react';
import { List, Map } from 'immutable';

// This component only renders its child components, expected to be given in as the 'children' prop.
// React Router does this - it plugs in component(s) defined for whatever the current route happens to be.
// Currently only defined one route for Voting, so at the moment the App component will always render Voting.

const pair = List.of('Trainspotting', '28 Days Later');

// Temporary hardcoded tally const to be rendered by the results component being written.
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});
