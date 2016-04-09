import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
    // currently getting this from hardcoded const pair in App.jsx
  },
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
      // tally prop is currently hardcoded into App.jsx
    }
    return 0;    
  },
  // For each 'entry' in this.props.pair, make a div with the entry name as its key, className 'entry',
  // display the entry name as an h1,
  // make a div with className 'voteCount' and display the number in this.props.tally for that entry.
  render: function() {
    return <div className="results">
      {this.getPair().map(entry =>
        <div key={entry} className="entry">
          <h1>{entry}</h1>                             
          <div className="voteCount">
            {this.getVotes(entry)}
          </div>
        </div>
      )}
    </div>;
  }
});
