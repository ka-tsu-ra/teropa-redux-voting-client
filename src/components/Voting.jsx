import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return (<div className="voting">
      {this.getPair().map(entry =>
        <button key={entry} 
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>);
  }
});
// does the component receive the server side function 'vote' through this code? 
// onClick is somehow triggering that function with the entry as the argument?
