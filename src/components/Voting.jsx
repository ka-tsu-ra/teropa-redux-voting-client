import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './Winner.jsx';
import Vote from './Vote.jsx';

// This module exports 2 components:
// Voting - dumb, pure component. Fully driven by props given to it.
// VotingContainer - connected. Wraps the pure version with logic to keep it in sync with changing state of Redux Store (logic provided by react-redux). 

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ? 
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

// Connect returns a connected version of Voting component - doens't actually mutate the Voting component.
// Need to grab that return value, by assigning to VotingContainer.
export const VotingContainer = connect(mapStateToProps)(Voting);

// does the component receive the server side function 'vote' through this code? 
// onClick is somehow triggering that function with the entry as the argument?
